import { useState } from 'react';
import { studentArticles } from '../articles/registry.jsx';

export function ArticlesHub() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle viewing a full article component view
  if (selectedArticle) {
    const article = studentArticles.find(a => a.id === selectedArticle);
    if (!article) return null;

    const ArticleComponent = article.component;

    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-8 px-4 py-2 bg-crimson text-white rounded-md hover:bg-crimson-dark transition duration-200 shadow-sm"
          >
            &larr; Back to Articles
          </button>
          <div className="prose max-w-none border border-gray-100 p-6 rounded-lg bg-gray-50/50 shadow-inner">
            <ArticleComponent />
          </div>
        </div>
      </div>
    );
  }

  // Filter computation logic
  const filteredArticles = activeCategory === 'All'
    ? studentArticles
    : studentArticles.filter(article => article.category === activeCategory);

  const categories = ['All', 'General', 'Projects', 'Study Materials', 'Career Development'];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Header Block */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Articles Hub</h1>
          <p className="text-lg text-gray-600">
            Learn from senior students. Peer-contributed wisdom, shared by the community for the community.
          </p>
        </div>

        {/* Dynamic Interactive Filter Buttons */}
        <div className="flex gap-2 justify-center flex-wrap">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow-sm ${
                  isActive
                    ? 'bg-crimson text-white scale-105'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map(article => (
              <div
                key={article.id}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedArticle(article.id)}
              >
                <div>
                  <div className="mb-3 inline-block px-3 py-1 bg-crimson text-white rounded-full text-xs font-semibold">
                    {article.category}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-crimson transition">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 text-xs text-gray-500">
                    <span>By {article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  <div className="mt-4 text-crimson font-semibold text-sm hover:underline flex items-center">
                    Read Article &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State Handling */
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="font-semibold text-gray-700 text-lg">No articles found</h3>
            <p className="text-gray-500 text-sm mt-1">Be the first to submit a PR for the "{activeCategory}" track!</p>
          </div>
        )}

        {/* Git Contribution Guideline Blueprint */}
        <div className="bg-gradient-to-r from-crimson-dark to-crimson text-white rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-bold mb-2">Your Insights Matter</h3>
          <p className="mb-4 opacity-90 max-w-2xl mx-auto">
            Have valuable advice to share? Write an article for SIRA and help future students succeed. 
            Your experience could make someone&apos;s academic journey so much easier!
          </p>
          <div className="mt-6 space-y-2">
            <h4 className="font-semibold">How to contribute:</h4>
            <ol className="text-sm space-y-1 inline-block text-left">
              <li>1. Create a new .js file in <code className="bg-white bg-opacity-20 px-2 py-1 rounded">src/articles/</code></li>
              <li>2. Export a React component as default</li>
              <li>3. Add your article metadata to <code className="bg-white bg-opacity-20 px-2 py-1 rounded">registry.js</code></li>
              <li>4. Submit a Pull Request on GitHub</li>
            </ol>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contributors Guide</h3>
          <p className="text-gray-700 mb-4">
            Check out the <code className="bg-gray-200 px-2 py-1 rounded">src/articles/README.md</code> file for detailed 
            instructions on creating and submitting your own article to the SIRA platform.
          </p>
          <p className="text-sm text-gray-600">
            Questions? Open an issue on GitHub or reach out to the SIRA maintainers.
          </p>
        </div>
      </div>
    </div>
  );
}