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
    const totalCredits = modules.reduce((sum, m) => sum + (m.credits || 0), 0);
    if (totalCredits === 0) return 0;
    const weightedSum = modules.reduce((sum, m) => sum + (m.mark || 0) * (m.credits || 0), 0);
    return weightedSum / totalCredits;
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
            {['level4', 'level5', 'level6'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  selectedLevel === level
                    ? 'bg-crimson text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {level.charAt(5).toUpperCase() + level.slice(6).toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Level 4 Warning */}
        {selectedLevel === 'level4' && (
          <div className="alert alert-warning">
            ⚠️ Level 4 grades do not contribute to your final Westminster Honours classification. This data is for reference only.
          </div>
        )}

        {/* Module Input Form */}
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
              {currentLevelData[selectedLevel].map(module => (
                <div key={module.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center p-4 bg-gray-50 rounded-md border border-gray-200">
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
                  <input
                    type="number"
                    placeholder="Credits"
                    value={module.credits || 20}
                    onChange={(e) => updateModule(module.id, 'credits', e.target.value)}
                    min="0"
                    className="input-field"
                  />
                  <div className="text-gray-700 font-medium">
                    {((module.mark || 0) * (module.credits || 0)).toFixed(0)}
                  </div>
                  <button
                    onClick={() => removeModule(module.id)}
                    className="btn-secondary"
                  >
                    Remove
                  </button>
                </div>
              ))}
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

        {/* Final Classification */}
        {level5Data.length > 0 && level6Data.length > 0 && (
          <div className="card bg-gradient-to-r from-crimson-dark to-crimson text-white">
            <h2 className="text-2xl font-bold mb-6">Final Degree Classification</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm opacity-90">Level 5 Average</p>
                <p className="text-3xl font-bold">{level5Avg.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Level 6 Average</p>
                <p className="text-3xl font-bold">{level6Avg.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Predicted Final Mark</p>
                <p className="text-3xl font-bold">{finalMark.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-sm opacity-90">GPA (US Scale)</p>
                <p className="text-3xl font-bold">{finalGPA.toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/30">
              <p className="text-sm opacity-90 mb-1">Honours Classification</p>
              <p className="text-4xl font-bold">{finalClass}</p>
              <p className="text-xs opacity-75 mt-2">Formula: (L5 × 1/3) + (L6 × 2/3)</p>
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
