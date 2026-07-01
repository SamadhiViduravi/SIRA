export function Resources() {
  const internalPortals = [
    {
      title: 'IIT Intranet',
      description: 'University IT services, administrative portals, and support',
      url: 'https://in.iit.ac.lk/',
      icon: '🏢',
    },
    
    {
      title: 'University Library',
      description: 'Access global academic databases, research journals, and e-books',
      url: 'https://archive.org', // Fallback or standard library portal
      icon: '📚',
    },
  ];

  const externalPortals = [
    
    {
      title: 'Appsanywhere',
      description: 'Access premium licensed university software with your Westminster account',
      url: 'http://appsanywhere.westminster.ac.uk/',
      icon: '🖥️',
    },
    {
      title: 'GitHub Student Pack',
      description: 'Claim premium tools for free, including GitHub Copilot using student mail',
      url: 'https://education.github.com/pack',
      icon: '🎓',
    },
    
  ];

  const survivalResources = [
    {
      title: 'Legendary Study Notes Repository',
      description: 'Crowdsourced study materials, exam revision templates, and senior lore (Isira\'s notes).',
      category: 'Study Materials',
    },
    {
      title: 'Project Design Toolkits',
      description: 'Templates and architectural guidelines for Level 5 SDGP and Final Year Capstones by Ms. Krishnakripa.',
      category: 'Project Help',
    },
    {
      title: 'FYP Starter & Strategy Archive',
      description: 'Session deep-dives and development strategy notes focused on brainstorming your thesis topics.',
      category: 'FYP Prep',
    },
    {
      title: 'Academic Research Kits',
      description: 'Guides on tracking down scientific literature using engines like ResearchGate and SciHub safely.',
      category: 'Research Tools',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Survival Toolkit</h1>
          <p className="text-lg text-gray-600">Essential institutional portals and crowdsourced student commons</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Campus Portals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internalPortals.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-crimson hover:underline">
                  Open Portal &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Portals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {externalPortals.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-crimson hover:underline">
                  Open Portal &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Peer-to-Peer Curated Commons */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Peer-to-Peer Resources</h2>
          <p className="text-gray-600 mb-6">
            Community-contributed survival guides and documents passed down through generations of developers. (This section is still building❗)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {survivalResources.map((resource, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="inline-block px-3 py-1 bg-crimson text-white rounded-full text-xs font-semibold mb-3">
                  {resource.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open-Source Git Contribution Call-To-Action Card */}
        <div className="bg-gradient-to-r from-crimson to-red-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Have extra notes or links?</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto text-sm">
            SIRA is open-source. If you have documentation, experience sheets, or links that can save someone else\'s module, push your file via a GitHub PR!
          </p>
          <a
            href="https://github.com/SamadhiViduravi/SIRA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-crimson font-bold rounded-md hover:bg-gray-100 transition shadow-md text-sm"
          >
            Submit an Issue or Pull Request
          </a>
        </div>
      </div>
    </div>
  );
}