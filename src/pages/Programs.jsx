import { useState } from 'react';

export function Programs() {
  const [selectedProgram, setSelectedProgram] = useState('cs');

  const programs = {
    cs: {
      name: 'BSc (Hons) Computer Science',
      code: 'CS',
      description: 'A comprehensive program covering software development, algorithms, databases, security, and AI.',
      years: {
        year1: {
          title: 'Year 1 (Level 4)',
          type: 'Foundation Year',
          core: [
            'Software Development I',
            'Mathematics for Computing',
            'Computer Systems Fundamentals',
            'Trends in Computer Science',
            'Software Development II',
            'Web Design and Development',
          ],
        },
        year2: {
          title: 'Year 2 (Level 5)',
          type: 'Core with Specialisation',
          core: [
            'Object Oriented Programming',
            'Database Systems',
            'Client-Server Architectures',
            'Software Development Group Project (40-credit)',
          ],
          optional: [
            { name: 'Mobile & Web Computing Pathway', modules: ['Advanced Client-side Development', 'Mobile Application Development', 'Server-side Web Development'] },
            { name: 'HCI & Usability Theme', modules: ['Usability and Interaction', '3D Interactive Media Development', 'XR & Multimodal Interaction'] },
            { name: 'Computer Engineering Theme', modules: ['Robotic Principals', 'Sensors & Interfaces'] },
            { name: 'Business Information Systems (BIS) Theme', modules: ['Information Technology Security', 'Data Science'] },
            { name: 'Data Science Theme', modules: ['Algorithms', 'Machine Learning and Data mining'] },
            { name: 'Games & Computer Graphics Theme', modules: ['Game Engine Architecture', 'Maths and Physics for Games', 'XR Multimodal Interaction'] },
          ],
        },
        year3: {
          title: 'Year 3 (Industrial Placement)',
          type: 'Mandatory Work Experience',
          description: 'A 12-month placement period is compulsory between years 2 and 4. This experience will give you additional practical skills and a competitive edge in the job market. With this added advantage, IIT students have a 100% employment assurance and are most often selected for high income employment at renowned organisations.',
        },
        year4: {
          title: 'Year 4 (Level 6)',
          type: 'Specialisation & Final Project',
          core: [
            'Final Year Project (40-credit)',
            'Cyber Security',
            'Applied Artificial Intelligence',
          ],
          optional: [
            { name: 'Mobile & Web Computing Pathway', modules: ['Mobile Native Application Development', 'Advanced Server-Side Web Programming'] },
            { name: 'Usability and Interaction Theme', modules: ['Usability Testing', 'Digital marketing, Social Media and Web Analytics', 'Advanced Interactive Media Development'] },
            { name: 'BIS Theme', modules: ['Information Driven Entrepreneurship and Enterprise', 'Strategic Management of IS (IT)'] },
            { name: 'Data Science Theme', modules: ['Data Visualisation and Dash Boarding', 'Business Intelligence', 'Operational Research and Optimisation'] },
            { name: 'Games and Computer Graphics Theme', modules: ['Game AI', 'Games Development (Advanced Topics)', 'Real-time Graphics and Rendering'] },
          ],
        },
      },
    },
    se: {
      name: 'BSc (Hons) Software Engineering',
      code: 'SE',
      description: 'A program focused on software development, software engineering principles, and full-stack development.',
      years: {
        year1: {
          title: 'Year 1 (Level 4)',
          type: 'Foundation Year',
          core: [
            'Computer Systems Fundamentals',
            'Trends in Computer Science',
            'Software Development I',
            'Software Development II',
            'Web Design and Development',
            'Mathematics for Computing',
          ],
        },
        year2: {
          title: 'Year 2 (Level 5)',
          type: 'Core with Projects',
          core: [
            'Software Development Group Project (40-credit)',
            'Object-Oriented Programming',
            'Algorithms: Theory, Design and Implementation',
            'Database Systems',
            'Software Engineering Principles and Practice',
          ],
          optional: [
            'Robotic Principles',
            'Mobile Application Development',
            'Operating Systems',
            'Server-side Web Development',
            'Business Analytics',
            'Machine learning and Data Mining',
          ],
        },
        year3: {
          title: 'Year 3 (Industrial Placement)',
          type: 'Mandatory Work Experience',
          description: 'A 12-month placement period is compulsory between years 2 and 4. This experience will give you additional practical skills and a competitive edge in the job market. With this added advantage, IIT students have a 100% employment assurance and are most often selected for high income employment at renowned organisations.',
        },
        year4: {
          title: 'Year 4 (Level 6)',
          type: 'Final Year Project & Specialisation',
          core: [
            'Final Year Project (40-credit)',
            'Cyber-Security',
            'Formal Methods',
            'Concurrent Programming',
          ],
          optional: [
            'Advanced Server-side Web Programming',
            'Mobile Native Application Development',
            'Operational Research and Optimisation',
            'Applied Robotics',
            'Internet of Things',
          ],
        },
      },
    },
  };

  const current = programs[selectedProgram];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">UOW Program Structures</h1>
          <p className="text-lg text-gray-600">Overview of Computer Science and Software Engineering degree programs</p>
        </div>

        {/* Program Selector */}
        <div className="flex gap-4 justify-center flex-wrap">
          {Object.entries(programs).map(([key, prog]) => (
            <button
              key={key}
              onClick={() => setSelectedProgram(key)}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                selectedProgram === key
                  ? 'bg-crimson text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {prog.code} - {prog.name.split('(')[1].replace(')', '').trim()}
            </button>
          ))}
        </div>

        {/* Program Info */}
        <div className="bg-gradient-to-r from-crimson-dark/10 to-crimson/10 border-l-4 border-crimson rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{current.name}</h2>
          <p className="text-gray-700">{current.description}</p>
        </div>

        {/* Years */}
        <div className="space-y-8">
          {Object.entries(current.years).map(([yearKey, year]) => (
            <div key={yearKey} className="border-l-4 border-crimson rounded-lg overflow-hidden shadow-md">
              <div className="bg-crimson text-white px-6 py-4">
                <h3 className="text-xl font-bold mb-1">{year.title}</h3>
                <p className="text-crimson-light text-sm">{year.type}</p>
              </div>
              
              <div className="bg-white p-6 space-y-6">
                {year.description && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-gray-700">{year.description}</p>
                  </div>
                )}

                {year.core && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Core Modules</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {year.core.map((module, idx) => {
                        const isProjectModule = module.includes('40-credit');
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-lg flex items-start gap-3 ${
                              isProjectModule ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50 border border-gray-200'
                            }`}
                          >
                            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${isProjectModule ? 'bg-orange-600' : 'bg-crimson'}`}></div>
                            <span className={isProjectModule ? 'text-orange-900 font-medium' : 'text-gray-700'}>
                              {module}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {year.optional && Array.isArray(year.optional) && year.optional.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Optional Modules/Pathways</h4>
                    <div className="space-y-4">
                      {year.optional.map((pathway, idx) => (
                        <div key={idx} className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          {typeof pathway === 'string' ? (
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-600 mt-1 flex-shrink-0"></div>
                              <span className="text-gray-700">{pathway}</span>
                            </div>
                          ) : (
                            <>
                              <p className="font-medium text-purple-900 mb-2">{pathway.name}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-5">
                                {pathway.modules.map((module, mIdx) => (
                                  <div key={mIdx} className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">◆</span>
                                    <span className="text-gray-700 text-sm">{module}</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-6">
            <h4 className="font-semibold text-emerald-900 mb-2">40-Credit Modules</h4>
            <p className="text-sm text-gray-700">
              Project modules like SDGP and FYP count as double-weighted (40 credits = 2× 20-credit modules).
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
            <h4 className="font-semibold text-blue-900 mb-2">Industrial Placement</h4>
            <p className="text-sm text-gray-700">
              Mandatory 12-month work experience between Year 2 and Year 4 with 100% employment assurance.
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
            <h4 className="font-semibold text-purple-900 mb-2">Classification Formula</h4>
            <p className="text-sm text-gray-700">
              Final Mark = (Level 5 × 1/3) + (Level 6 × 2/3)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
