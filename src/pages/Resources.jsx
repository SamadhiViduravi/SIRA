export function Resources() {
  const resourceLinks = [
    {
      title: 'Appsanywhere',
      description: 'Access university software and applications remotely',
      url: 'https://www.appsanywhere.com',
      icon: '🖥️',
    },
    {
      title: 'GitHub Student Pack',
      description: 'Free developer tools and services for students',
      url: 'https://education.github.com/pack',
      icon: '🎓',
    },
    {
      title: 'IIT Intranet',
      description: 'University IT services and support portal',
      url: '#',
      icon: '🏢',
    },
    {
      title: 'University Library',
      description: 'Access research databases, journals, and academic resources',
      url: '#',
      icon: '📚',
    },
  ];

  const survivalResources = [
    {
      title: 'Legendary Study Notes Repository',
      description: 'Crowdsourced study materials from senior students across all courses',
      category: 'Study Materials',
    },
    {
      title: 'Project Design Toolkits',
      description: 'Templates and best practices for SDGP and capstone projects',
      category: 'Project Help',
    },
    {
      title: 'Past Exam Papers & Solutions',
      description: 'Archive of previous assessment materials with worked solutions',
      category: 'Exam Prep',
    },
    {
      title: 'Programming Language Guides',
      description: 'Quick reference guides for Java, Python, JavaScript, and more',
      category: 'Technical Resources',
    },
    {
      title: 'Career & Internship Guide',
      description: 'Tips on CVs, interviews, and landing internships in tech',
      category: 'Career Development',
    },
    {
      title: 'Campus Life & Wellbeing',
      description: 'Guides to student support services, mental health, and community events',
      category: 'Student Support',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Survival Toolkit</h1>
          <p className="text-lg text-gray-600">Essential resources to support your academic journey</p>
        </div>

        {/* Campus Portals */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Campus Portals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourceLinks.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:shadow-lg transition transform hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Peer Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Peer-to-Peer Resources</h2>
          <p className="text-gray-600 mb-6">
            Community-contributed survival guides and resources curated by your fellow students
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {survivalResources.map((resource, idx) => (
              <div key={idx} className="card">
                <div className="inline-block px-3 py-1 bg-crimson text-white rounded-full text-xs font-semibold mb-3">
                  {resource.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-crimson-dark to-crimson text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Want to contribute?</h3>
          <p className="mb-4 opacity-90">
            Have valuable resources or study materials? Share them with the community!
          </p>
          <button className="px-6 py-2 bg-white text-crimson font-semibold rounded-md hover:bg-gray-100 transition">
            Share Your Resources
          </button>
        </div>
      </div>
    </div>
  );
}
