export default function ProjectTipsAndTricks() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">SDGP & Capstone Project Tips & Tricks</h1>
        <p className="text-gray-600">By Senior Developers • July 1, 2025</p>
      </div>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The 40-Credit Monster 👹</h2>
          <p>
            Your SDGP (Software Development Group Project) is worth 40 credits - double the weight of regular modules! 
            With the 1/3 Level 5 weighting, nailing this project can significantly boost your degree classification.
          </p>
          <p className="mt-3">
            <span className="bg-crimson text-white px-2 py-1 rounded">Pro Tip:</span> A 10% difference in SDGP translates 
            to a 3.33% impact on your final mark. Every percentage point counts!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Team Selection is Everything</h2>
          <ul className="space-y-2 ml-4">
            <li><strong>Choose collaborators wisely:</strong> Pick people who are committed, not your best friends</li>
            <li><strong>Mix skill levels:</strong> Combine strong coders with good communicators and project managers</li>
            <li><strong>Avoid pure friend groups:</strong> It's harder to give critical feedback to close friends</li>
            <li><strong>Interview potential teammates:</strong> Have a quick chat about expectations and commitment</li>
            <li><strong>Document it:</strong> Get everyone to agree on roles and commitment levels before Day 1</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Agile Methodology is Your Friend</h2>
          <p>
            Use Scrum or Kanban even though it's not officially required. Teams using Agile consistently get higher marks.
          </p>
          <ul className="space-y-2 ml-4 mt-3">
            <li><strong>2-week sprints:</strong> Break work into manageable chunks</li>
            <li><strong>Daily standups:</strong> 10-minute sync to identify blockers (can be async via Slack)</li>
            <li><strong>Sprint retrospectives:</strong> Reflect and improve your process every 2 weeks</li>
            <li><strong>Use tools:</strong> Jira, Trello, or GitHub Projects to visualize work</li>
            <li><strong>Document everything:</strong> Markers want to see your process, not just the final product</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Architecture & Design Patterns</h2>
          <p>
            This is where many teams fall short. Don't just code - architect properly:
          </p>
          <ul className="space-y-2 ml-4 mt-3">
            <li><strong>Create a system design document:</strong> Document your architecture before coding</li>
            <li><strong>Use design patterns:</strong> MVC, Repository Pattern, Factory Pattern - show you know them</li>
            <li><strong>Database schema:</strong> Normalize properly and explain your design decisions</li>
            <li><strong>API design:</strong> RESTful principles, proper HTTP methods, versioning strategy</li>
            <li><strong>Error handling:</strong> Comprehensive error messages and logging</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Code Quality is Non-Negotiable</h2>
          <ul className="space-y-2 ml-4">
            <li><strong>Follow naming conventions:</strong> Markers immediately spot sloppy variable names</li>
            <li><strong>Write unit tests:</strong> Aim for 70%+ code coverage using JUnit, Jest, or similar</li>
            <li><strong>Code reviews:</strong> Every PR needs at least 1 approval before merging</li>
            <li><strong>Use linters:</strong> SonarQube, Checkstyle, ESLint - enforce consistency automatically</li>
            <li><strong>Refactor regularly:</strong> Don't accumulate technical debt</li>
            <li><strong>DRY principle:</strong> Don't Repeat Yourself - extract common code into utilities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Git Workflow Matters</h2>
          <p>
            Markers can see your entire Git history. Use this to your advantage:
          </p>
          <ul className="space-y-2 ml-4 mt-3">
            <li><strong>Meaningful commits:</strong> "Fixed bug" is lazy; "Fixed null pointer in UserService line 42" is excellent</li>
            <li><strong>Feature branches:</strong> One feature per branch, named clearly (feature/user-authentication)</li>
            <li><strong>Atomic commits:</strong> Each commit should be logically complete and testable</li>
            <li><strong>Pull requests:</strong> Use them for code review, not just merging</li>
            <li><strong>Release tags:</strong> Tag major milestones (v0.1.0, v1.0.0)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Documentation is Underrated</h2>
          <p>
            Great documentation separates Distinctions from 2:1s:
          </p>
          <ul className="space-y-2 ml-4 mt-3">
            <li><strong>README.md:</strong> How to set up and run the project</li>
            <li><strong>Architecture document:</strong> System design, component diagrams, data flow</li>
            <li><strong>API documentation:</strong> Swagger/OpenAPI with example requests</li>
            <li><strong>Installation guide:</strong> Dependencies, environment setup, database migrations</li>
            <li><strong>Contributing guide:</strong> How future developers can extend your code</li>
            <li><strong>Decisions log:</strong> Why you chose certain technologies (this impresses markers!)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Testing Strategy</h2>
          <ul className="space-y-2 ml-4">
            <li><strong>Unit tests:</strong> Test individual functions and methods (70% of your coverage)</li>
            <li><strong>Integration tests:</strong> Test how components work together (20%)</li>
            <li><strong>E2E tests:</strong> Test full user workflows (10%)</li>
            <li><strong>Mock external services:</strong> Don't depend on real APIs during testing</li>
            <li><strong>Test error paths:</strong> What happens when things go wrong?</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Presentation & Demonstration</h2>
          <p>
            Your code is only 70% of the grade. The other 30% is communication:
          </p>
          <ul className="space-y-2 ml-4 mt-3">
            <li><strong>Story-driven demo:</strong> Show features in context, not in isolation</li>
            <li><strong>Live coding:</strong> If comfortable, show some code working live (have backup video)</li>
            <li><strong>Metrics:</strong> Performance benchmarks, load testing results, user feedback</li>
            <li><strong>Challenges & solutions:</strong> Explain obstacles and how you overcame them</li>
            <li><strong>Practice the pitch:</strong> Your team should present flawlessly 5+ times</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Timeline (12-Week Breakdown)</h2>
          <div className="bg-gray-100 p-4 rounded-md ml-4 space-y-3">
            <div>
              <strong className="text-crimson">Weeks 1-2:</strong> Brainstorm, pick idea, form team, create project charter
            </div>
            <div>
              <strong className="text-crimson">Weeks 3-4:</strong> Design phase, create system architecture, database schema
            </div>
            <div>
              <strong className="text-crimson">Weeks 5-7:</strong> Core development, first sprint cycle
            </div>
            <div>
              <strong className="text-crimson">Weeks 8-9:</strong> Feature completion, integration testing, refinement
            </div>
            <div>
              <strong className="text-crimson">Weeks 10-11:</strong> Polish, documentation, demo preparation
            </div>
            <div>
              <strong className="text-crimson">Week 12:</strong> Final presentations and submission
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Common Pitfalls to Avoid</h2>
          <ul className="space-y-2 ml-4">
            <li>❌ Picking overly ambitious scope</li>
            <li>❌ Waiting until week 10 to start serious development</li>
            <li>❌ Not using version control properly</li>
            <li>❌ Writing code without tests</li>
            <li>❌ Ignoring code quality/style</li>
            <li>❌ Poor communication within the team</li>
            <li>❌ No documentation</li>
            <li>❌ Rushing the final demo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Technology Stack Recommendations</h2>
          <div className="bg-blue-50 p-4 rounded-md ml-4 space-y-2">
            <p><strong>Backend:</strong> Spring Boot (Java), Django (Python), or Express (Node.js)</p>
            <p><strong>Frontend:</strong> React, Vue, or Angular</p>
            <p><strong>Database:</strong> PostgreSQL (structured) or MongoDB (flexible)</p>
            <p><strong>Testing:</strong> JUnit (Java), Pytest (Python), Jest (JavaScript)</p>
            <p><strong>CI/CD:</strong> GitHub Actions, GitLab CI, or Jenkins</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Final Wisdom</h2>
          <p>
            Remember: Your SDGP is your chance to show everything you've learned in Level 5. It's not just about 
            delivering a working application - it's about demonstrating professional software engineering practices.
          </p>
          <p className="mt-4">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">Good luck! Start strong, stay consistent, 
            and celebrate small wins along the way.</span>
          </p>
        </section>
      </div>
    </article>
  );
}
