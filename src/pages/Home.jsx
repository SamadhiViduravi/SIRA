import { useState, useMemo } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState.jsx';

export function Home() {
  const [selectedLevel, setSelectedLevel] = useState('level5');
  const [level4Data, setLevel4Data] = useLocalStorageState('level4-modules', []);
  const [level5Data, setLevel5Data] = useLocalStorageState('level5-modules', []);
  const [level6Data, setLevel6Data] = useLocalStorageState('level6-modules', []);

  const currentLevelData = {
    level4: level4Data,
    level5: level5Data,
    level6: level6Data,
  };

  const setCurrentLevelData = {
    level4: setLevel4Data,
    level5: setLevel5Data,
    level6: setLevel6Data,
  };

  const calculateYearAverage = (modules) => {
    if (modules.length === 0) return 0;
    
    // Calculate with proper 40-credit weighting
    let totalWeightedCredits = 0;
    let totalWeightedMarks = 0;
    
    modules.forEach(m => {
      const credits = m.credits || 20;
      // 40-credit modules count as double weight (like 2 × 20-credit modules)
      const weight = credits === 40 ? 2 : 1;
      const effectiveCredits = 20 * weight;
      
      totalWeightedCredits += effectiveCredits;
      totalWeightedMarks += (m.mark || 0) * effectiveCredits;
    });
    
    if (totalWeightedCredits === 0) return 0;
    return totalWeightedMarks / totalWeightedCredits;
  };

  const calculateGPA = (percentage) => {
    // Convert UK percentage to US 4.0 GPA scale
    if (percentage >= 70) return 4.0;
    if (percentage >= 60) return 3.7;
    if (percentage >= 50) return 3.0;
    if (percentage >= 40) return 2.0;
    return 0.0;
  };

  const getHonoursClass = (percentage) => {
    if (percentage >= 70) return 'First Class (1st)';
    if (percentage >= 60) return 'Upper Second Class (2:1)';
    if (percentage >= 50) return 'Lower Second Class (2:2)';
    if (percentage >= 40) return 'Third Class (3rd)';
    return 'Below Pass Mark';
  };

  const level5Avg = useMemo(() => calculateYearAverage(level5Data), [level5Data]);
  const level6Avg = useMemo(() => calculateYearAverage(level6Data), [level6Data]);

  const finalMark = useMemo(() => {
    return (level5Avg * (1 / 3)) + (level6Avg * (2 / 3));
  }, [level5Avg, level6Avg]);

  const finalGPA = useMemo(() => calculateGPA(finalMark), [finalMark]);
  const finalClass = useMemo(() => getHonoursClass(finalMark), [finalMark]);

  const addModule = () => {
    const key = `level${selectedLevel.replace('level', '')}`;
    const newModule = { id: Date.now(), mark: 0, credits: 20 };
    setCurrentLevelData[selectedLevel]([...currentLevelData[selectedLevel], newModule]);
  };

  const updateModule = (id, field, value) => {
    const updated = currentLevelData[selectedLevel].map(m =>
      m.id === id ? { ...m, [field]: field === 'mark' || field === 'credits' ? parseFloat(value) || 0 : value } : m
    );
    setCurrentLevelData[selectedLevel](updated);
  };

  const removeModule = (id) => {
    const updated = currentLevelData[selectedLevel].filter(m => m.id !== id);
    setCurrentLevelData[selectedLevel](updated);
  };

  const clearAllData = () => {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      setLevel4Data([]);
      setLevel5Data([]);
      setLevel6Data([]);
      setSelectedLevel('level5');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">UOW GPA Calculator</h1>
          <p className="text-lg text-gray-600">Calculate your degree classification with Westminster Honours weighting</p>
        </div>

        {/* Level Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Academic Level</h2>
          <div className="flex gap-4 flex-wrap">
            {['level4', 'level5', 'level6', 'overall'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  selectedLevel === level
                    ? 'bg-crimson text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {level === 'overall' ? 'Overall Degree' : level.charAt(5).toUpperCase() + level.slice(6).toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        {selectedLevel === 'level4' && (
          <div className="alert alert-warning">
            ⚠️ Level 4 grades do not contribute to your final Westminster Honours classification. This data is for reference only.
          </div>
        )}

        {(selectedLevel === 'level5' || selectedLevel === 'level6') && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Quick Guide</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li><strong>Standard modules:</strong> 20 credits (normal weight)</li>
              <li><strong>Project modules ( FYP in Year 4):</strong> 40 credits (2x weight)</li>
              <li><strong>40-credit modules:</strong> Highlighted in orange, count as double-weighted in calculations</li>
              <li><strong>Final classification:</strong> (Level 5 Average × 1/3) + (Level 6 Average × 2/3)</li>
            </ul>
          </div>
        )}

        {selectedLevel === 'overall' && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-3">Overall Degree GPA Summary</h3>
            <p className="text-sm text-purple-800 mb-3">
              View your complete academic journey across all levels and get your final degree classification.
            </p>
            <ul className="space-y-2 text-sm text-purple-800">
              <li><strong>Level 4 (Year 1):</strong> Foundation year - for reference only</li>
              <li><strong>Level 5 (Year 2):</strong> Weighted at 1/3 of final classification</li>
              <li><strong>Level 6 (Final Year):</strong> Weighted at 2/3 of final classification</li>
              <li><strong>Overall GPA:</strong> Combines all levels for your final honours classification</li>
            </ul>
          </div>
        )}

        {/* Module Input Form or Overall Summary */}
        {selectedLevel !== 'overall' ? (
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedLevel === 'level4' ? 'Level 4' : selectedLevel === 'level5' ? 'Level 5 (Year 1)' : 'Level 6 (Final Year)'} Modules
              </h2>
              <button
                onClick={addModule}
                className="btn-primary"
              >
                + Add Module
              </button>
            </div>

            {currentLevelData[selectedLevel].length === 0 ? (
              <p className="text-gray-500 text-center py-8">No modules added yet. Click "Add Module" to get started.</p>
            ) : (
            <div className="space-y-4">
              {currentLevelData[selectedLevel].map(module => {
                const credits = module.credits || 20;
                const isDoubleWeighted = credits === 40;
                return (
                  <div key={module.id} className={`grid grid-cols-1 md:grid-cols-6 gap-4 items-center p-4 rounded-md border ${isDoubleWeighted ? 'bg-orange-50 border-orange-300' : 'bg-gray-50 border-gray-200'}`}>
                    <input
                      type="text"
                      placeholder="Module Code (e.g., CSA)"
                      value={module.name || ''}
                      onChange={(e) => updateModule(module.id, 'name', e.target.value)}
                      className="input-field"
                    />
                    <input
                      type="number"
                      placeholder="Mark (%)"
                      value={module.mark || ''}
                      onChange={(e) => updateModule(module.id, 'mark', e.target.value)}
                      min="0"
                      max="100"
                      className="input-field"
                    />
                    <select
                      value={credits}
                      onChange={(e) => updateModule(module.id, 'credits', e.target.value)}
                      className="input-field"
                    >
                      <option value="20">20 Credits (Normal)</option>
                      <option value="40">40 Credits (Double)</option>
                    </select>
                    <div className={`font-medium ${isDoubleWeighted ? 'text-orange-700' : 'text-gray-700'}`}>
                      Weight: {isDoubleWeighted ? '2x' : '1x'}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {((module.mark || 0) * credits).toFixed(0)}
                    </div>
                    <button
                      onClick={() => removeModule(module.id)}
                      className="btn-secondary"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          )}

            {selectedLevel !== 'level4' && currentLevelData[selectedLevel].length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Year Average:</span>{' '}
                  <span className="text-lg font-bold text-crimson">
                    {(selectedLevel === 'level5' ? level5Avg : level6Avg).toFixed(2)}%
                  </span>
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Overall Degree Summary */
          <div className="space-y-6">
            {/* Level Summaries */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Level 4 Summary */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Level 4 Summary</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Modules: <span className="font-semibold">{level4Data.length}</span></p>
                  <p className="text-2xl font-bold text-gray-900">
                    {level4Data.length > 0 ? calculateYearAverage(level4Data).toFixed(2) : '--'}%
                  </p>
                  <p className="text-xs text-gray-500 italic">For reference only</p>
                </div>
              </div>

              {/* Level 5 Summary */}
              <div className="card border-l-4 border-l-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Level 5 (Year 2)</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Modules: <span className="font-semibold">{level5Data.length}</span></p>
                  <p className="text-2xl font-bold text-blue-600">
                    {level5Data.length > 0 ? level5Avg.toFixed(2) : '--'}%
                  </p>
                  <p className="text-xs text-gray-500">Weight: 1/3 of final grade</p>
                </div>
              </div>

              {/* Level 6 Summary */}
              <div className="card border-l-4 border-l-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Level 6 (Final Year)</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Modules: <span className="font-semibold">{level6Data.length}</span></p>
                  <p className="text-2xl font-bold text-green-600">
                    {level6Data.length > 0 ? level6Avg.toFixed(2) : '--'}%
                  </p>
                  <p className="text-xs text-gray-500">Weight: 2/3 of final grade</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={clearAllData}
                className="px-6 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-md font-medium transition border border-red-200"
              >
                Clear All Data
              </button>
            </div>
          </div>
        )}

        {/* Final Classification */}
        {level5Data.length > 0 && level6Data.length > 0 && (
          <div className="space-y-6">
            <div className="card bg-gradient-to-r from-crimson-dark to-crimson text-white">
              <h2 className="text-2xl font-bold mb-8">Your Predicted Degree Classification</h2>
              
              {/* Main Classification Display */}
              <div className="bg-white/10 rounded-lg p-8 mb-8 text-center">
                <p className="text-white/80 text-sm mb-2">Honours Classification</p>
                <p className="text-5xl font-bold mb-4">{finalClass}</p>
                <p className="text-xl font-semibold">{finalMark.toFixed(2)}%</p>
              </div>
              
              {/* Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm opacity-80 mb-1">Level 5 Average</p>
                  <p className="text-2xl font-bold">{level5Avg.toFixed(2)}%</p>
                  <p className="text-xs opacity-60 mt-1">Weight: 1/3</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm opacity-80 mb-1">Level 6 Average</p>
                  <p className="text-2xl font-bold">{level6Avg.toFixed(2)}%</p>
                  <p className="text-xs opacity-60 mt-1">Weight: 2/3</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm opacity-80 mb-1">Predicted Final Mark</p>
                  <p className="text-2xl font-bold">{finalMark.toFixed(2)}%</p>
                  <p className="text-xs opacity-60 mt-1">Weighted Sum</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm opacity-80 mb-1">GPA (US Scale)</p>
                  <p className="text-2xl font-bold">{finalGPA.toFixed(2)}</p>
                  <p className="text-xs opacity-60 mt-1">4.0 Scale</p>
                </div>
              </div>
              
              {/* Formula */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-xs opacity-70 mb-2">Westminster Honours Formula</p>
                <p className="text-sm font-mono">
                  Final Mark = (L5 Average × <span className="bg-white/10 px-2 py-1 rounded">1/3</span>) + (L6 Average × <span className="bg-white/10 px-2 py-1 rounded">2/3</span>)
                </p>
              </div>
            </div>

            {/* Classification Ranges */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Honours Classification Ranges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="font-semibold text-emerald-900">First Class (1st)</p>
                  <p className="text-2xl font-bold text-emerald-700">70% - 100%</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900">Upper Second (2:1)</p>
                  <p className="text-2xl font-bold text-blue-700">60% - 69%</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Lower Second (2:2)</p>
                  <p className="text-2xl font-bold text-amber-700">50% - 59%</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-900">Third Class (3rd)</p>
                  <p className="text-2xl font-bold text-orange-700">40% - 49%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clear Data Button */}
        <div className="text-center">
          <button
            onClick={clearAllData}
            className="px-6 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition"
          >
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
}
