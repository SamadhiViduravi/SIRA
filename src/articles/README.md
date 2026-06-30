# Contributing Articles to SIRA

Welcome to the SIRA Articles Hub! This guide teaches you how to share your knowledge with fellow students by contributing an article to the platform.

## Why Contribute?

- **Help others succeed** - Your experience can make a huge difference for future students
- **Build your portfolio** - Show your communication and knowledge-sharing skills
- **Give back to the community** - SIRA thrives on student contributions
- **Get recognized** - Your name will appear as the article author

## Article Ideas

We're looking for articles across these categories:

- **General Advice** - University life, time management, mental health
- **Study Materials** - Course summaries, study techniques, exam prep
- **Projects** - Tips for SDGP, Final Year Project, group work
- **Career Development** - CV writing, interviews, internships, networking
- **Technical Guides** - Programming languages, frameworks, tools
- **Course Survival Guides** - Specific module reviews and strategies
- **Community Resources** - Local events, clubs, networking opportunities

## Step 1: Create Your Article Component

Create a new JavaScript file in the `src/articles/` folder with a descriptive name:

```bash
src/articles/myAwesomeGuide.js
```

Export a React component that renders your article content. Here's a template:

```javascript
export default function MyAwesomeGuide() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Article Title</h1>
        <p className="text-gray-600">By Your Name • Publication Date</p>
      </div>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Section 1</h2>
          <p>Your content here...</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Section 2</h2>
          <ul className="space-y-2 ml-4">
            <li><strong>Point 1:</strong> Description</li>
            <li><strong>Point 2:</strong> Description</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
```

### Styling Guidelines

We use **Tailwind CSS** for all styling. Here are common classes to use:

- **Headings**: `text-4xl font-bold` (h1), `text-2xl font-bold` (h2), `text-xl font-bold` (h3)
- **Text**: `text-gray-700` for body, `text-gray-600` for secondary
- **Spacing**: `space-y-6` for sections, `space-y-2` for lists
- **Emphasis**: `bg-yellow-100 px-2 py-1 rounded` for highlights, `italic` for emphasis
- **Accent color**: Use `text-crimson` or `bg-crimson` for important highlights

### Article Structure Tips

1. **Start strong** - Hook readers in the first paragraph
2. **Use headers** - Break content into scannable sections
3. **Add lists** - Use bullet points for clarity
4. **Include examples** - Show real-world scenarios
5. **End with advice** - Leave readers with actionable takeaways
6. **Keep it concise** - Aim for 1,000-2,000 words

## Step 2: Register Your Article

Edit `src/articles/registry.js` and add your article to the `studentArticles` array:

```javascript
import YourArticleComponent from './myAwesomeGuide.js';

export const studentArticles = [
  // ... existing articles
  {
    id: 'my-awesome-guide',              // Unique identifier (use kebab-case)
    title: 'Your Article Title',          // Display title
    author: 'Your Name',                  // Your name
    category: 'General',                  // Choose from: General, Projects, Study Materials, Career Development, Technical, etc.
    description: 'Brief 1-2 sentence summary of your article',
    date: '2024-01-15',                   // Publication date (YYYY-MM-DD)
    component: YourArticleComponent,      // Your component
  },
];
```

## Step 3: Test Locally

Before submitting, test your article locally:

1. **Install dependencies** (if not already done):
   ```bash
   pnpm install
   ```

2. **Start the development server**:
   ```bash
   pnpm dev
   ```

3. **Navigate to the Articles Hub** and verify:
   - Your article appears in the grid
   - Clicking on it displays the full content
   - Styling looks good and is readable
   - Links work correctly (if included)

## Step 4: Submit a Pull Request

1. **Fork the repository** on GitHub
2. **Create a new branch** for your article:
   ```bash
   git checkout -b article/my-awesome-guide
   ```

3. **Add your files** to Git:
   ```bash
   git add src/articles/myAwesomeGuide.js src/articles/registry.js
   ```

4. **Commit with a descriptive message**:
   ```bash
   git commit -m "Add article: My Awesome Guide by Your Name"
   ```

5. **Push to your fork**:
   ```bash
   git push origin article/my-awesome-guide
   ```

6. **Open a Pull Request** on GitHub with:
   - Title: "Add article: My Awesome Guide"
   - Description: 2-3 sentences explaining what your article covers
   - Any notes about the article's target audience or special considerations

## Review Process

- SIRA maintainers will review your PR within 3-5 business days
- You may be asked for:
  - Spelling/grammar corrections
  - Content clarifications
  - Styling adjustments
  - Subject matter improvements
- Once approved, your article will be merged and live on SIRA! 🎉

## Content Guidelines

✅ **Do**:
- Share genuine personal experience
- Be encouraging and supportive
- Use inclusive, respectful language
- Fact-check your advice (especially for technical content)
- Credit external sources and previous contributors
- Update your article if feedback suggests improvements

❌ **Don't**:
- Plagiarize or copy from other sources without attribution
- Make specific claims about grades or exam answers
- Promote commercial products or services
- Include personal identifying information beyond your name
- Use offensive or derogatory language
- Copy entire sections from course materials

## Examples

Check out existing articles for style and structure:
- `freshmanSurvivalGuide.js` - General advice format
- `projectTipsAndTricks.js` - Technical tips with lists and sections

## Need Help?

- **Have questions?** Open an issue on GitHub
- **Want feedback before submitting?** Open a Draft PR and ask for suggestions
- **Found an error in an existing article?** Submit a PR with corrections

---

**Thank you for sharing your knowledge!** 🎓 The SIRA community grows stronger with each contribution.

---

### Quick Checklist Before Submitting

- [ ] Article component is in `src/articles/` folder
- [ ] Component exports a default React function
- [ ] Article is registered in `registry.js`
- [ ] Styling uses Tailwind CSS classes
- [ ] Content is proofread and error-free
- [ ] Article tested locally in dev server
- [ ] PR title and description are clear
- [ ] No plagiarized content
- [ ] No personal identifying information beyond name

Happy writing! ✨
