# 🎓 SIRA - Student Insights & Resource Archive

> **Free, open-source student hub platform** | Built by students, for students

SIRA is a lightweight, community-driven platform designed to help students succeed academically. It features a **GPA calculator** tailored to University of Westminster Honours degree classification, a **survival toolkit** with essential resources, and an **articles hub** where students can share wisdom with the community.

## ✨ Features

### 🧮 GPA Calculator
- **Westminster Honours Weighting**: Calculates final degree classification using the official 1/3 Level 5 + 2/3 Level 6 formula
- **Module-Level Tracking**: Input marks and credits for each module
- **40-Credit Module Support**: Automatically applies double weighting for projects like SDGP
- **Level 4 Awareness**: Reminds you that Level 4 marks don't count toward final classification
- **Real-Time Calculations**: Instant GPA and honours class predictions
- **Persistent State**: All data saved to browser localStorage automatically

### 📚 Survival Toolkit
- **Campus Portal Links**: Quick access to Appsanywhere, GitHub Student Pack, IIT Intranet
- **Peer Resources**: Crowdsourced study materials, project guides, exam prep resources
- **Community Contributions**: Links to legendary study notes and survival guides

### 📝 Articles Hub
- **Student-Written Guides**: Comprehensive articles by senior students sharing real-world advice
- **Searchable & Categorized**: Browse by topic (General, Projects, Study Materials, Career Development)
- **Easy Contribution**: Markdown-based article system with contributor guide
- **No Backend Required**: 100% client-side, no database needed

## 🚀 Tech Stack

- **Frontend**: React 18+ with Vite (ultra-fast development)
- **Routing**: React Router v6 for multi-page navigation
- **Styling**: Tailwind CSS for modern, responsive design
- **State Management**: React hooks + localStorage for persistence
- **Language**: JavaScript ES6+ (no TypeScript, beginner-friendly)
- **Package Manager**: pnpm

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ and pnpm installed
- A modern web browser

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sira-platform.git
   cd sira-platform
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the dev server**:
   ```bash
   pnpm dev
   ```

4. **Open in your browser**:
   - Navigate to `http://localhost:5173`
   - Start exploring!

### Build for Production

```bash
pnpm build
```

## 📁 Project Structure

```
sira-platform/
├── index.html                    # Entry point
├── src/
│   ├── main.js                  # React app bootstrap
│   ├── App.js                   # Main router component
│   ├── index.css                # Global styles + Tailwind
│   ├── hooks/
│   │   └── useLocalStorageState.js  # Custom state hook
│   ├── components/
│   │   ├── Navbar.js            # Navigation bar
│   │   └── Layout.js            # Main layout wrapper
│   ├── pages/
│   │   ├── Home.js              # GPA Calculator page
│   │   ├── Resources.js         # Survival Toolkit page
│   │   └── ArticlesHub.js       # Articles Hub page
│   └── articles/
│       ├── registry.js          # Central article registry
│       ├── README.md            # Contributor guide
│       ├── freshmanSurvivalGuide.js   # Example article
│       └── projectTipsAndTricks.js    # Example article
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies
```

## 📖 Usage

### GPA Calculator

1. **Select your academic level** (Level 4, 5, or 6)
2. **Add modules** with their marks and credit values
3. **View calculations** in real-time:
   - Individual module weighted marks
   - Year average (weighted by credits)
   - Final degree classification (with Level 5 & 6 data)
   - Predicted US GPA on 4.0 scale

**Note**: Level 4 data is informational only; it doesn't affect your final classification.

### Contributing Articles

Want to share your knowledge? Check out `src/articles/README.md` for a complete contributor guide.

**Quick steps**:
1. Create a `.js` file in `src/articles/`
2. Export a React component with your article content
3. Register it in `src/articles/registry.js`
4. Submit a Pull Request

## 🤝 Contributing

We welcome contributions from students and developers! Here's how to get involved:

### Bug Reports & Feature Requests
- Open an issue on GitHub with clear details
- Use the provided issue templates

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Make your changes following the code style
4. Commit with clear messages (`git commit -m "Add awesome feature"`)
5. Push to your fork (`git push origin feature/awesome-feature`)
6. Open a Pull Request

### Article Contributions
See `src/articles/README.md` for the full contributor guide.

## 📋 Code Style

- **JavaScript**: ES6+ with clear, descriptive naming
- **Components**: Functional components with React hooks
- **Styling**: Tailwind CSS with consistent class usage
- **Comments**: Meaningful comments explaining complex logic
- **File naming**: camelCase for JavaScript files, kebab-case for route names

## 🎨 Design

SIRA features a clean, professional design with:
- **Color Scheme**: Crimson red (#A30000) primary, white cards, light grey backgrounds
- **Typography**: Clear sans-serif fonts for maximum readability
- **Responsive Design**: Mobile-first approach, adapts to all screen sizes
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation

## 📝 License

This project is **free and open source** under the MIT License. See `LICENSE` file for details.

## 🙏 Acknowledgments

- Built by students who understand the student experience
- Inspired by the spirit of open-source collaboration
- Dedicated to the global student community

## 📞 Support

- **Questions?** Open an issue on GitHub
- **Found a bug?** Report it with reproduction steps
- **Have suggestions?** We'd love to hear them!

---

**SIRA** © 2024 | Student Insights & Resource Archive | Built with ❤️ by and for students

### Quick Links
- [Contributor Guide](src/articles/README.md)
- [Issues](https://github.com/yourusername/sira-platform/issues)
- [Discussions](https://github.com/yourusername/sira-platform/discussions)

---

### Getting Started Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Happy learning! 🚀
