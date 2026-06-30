import { useState } from 'react';
import { studentArticles } from '../articles/registry.jsx';

export function ArticlesHub() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    const article = studentArticles.find(a => a.id === selectedArticle);
    if (!article) return null;

    const ArticleComponent = article.component;

    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-8 px-4 py-2 bg-crimson text-white rounded-md hover:bg-crimson-dark transition"
          >
            ← Back to Articles
          </button>
          <ArticleComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Articles Hub</h1>
          <p className="text-lg text-gray-600">
            Learn from senior students. Wisdom shared by the community, for the community.
          </p>
        </div>

        {/* Filter by Category */}
        <div className="flex gap-2 justify-center flex-wrap">
          {['All', 'General', 'Projects', 'Study Materials', 'Career Development'].map(cat => (
            <button
              key={cat}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-crimson hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studentArticles.map(article => (
            <div
              key={article.id}
              className="card cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1"
              onClick={() => setSelectedArticle(article.id)}
            >
              <div className="mb-3 inline-block px-3 py-1 bg-crimson text-white rounded-full text-xs font-semibold">
                {article.category}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{article.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">By {article.author}</span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <div className="mt-4 text-crimson font-semibold text-sm">
                Read Article →
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Contribute */}
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
