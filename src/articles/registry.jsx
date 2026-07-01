/**
 * SIRA Articles Registry
 * Central registry for all student-contributed articles
 * 
 * To add your own article:
 * 1. Create a new .js file in src/articles/
 * 2. Export a React component as default
 * 3. Add an entry to this registry array with metadata
 * 4. Submit a Pull Request!
 */

import FreshmanSurvivalGuide from './freshmanSurvivalGuide.jsx';
import ProjectTipsAndTricks from './projectTipsAndTricks.jsx';

export const studentArticles = [
  {
    id: 'freshman-survival-guide',
    title: 'The Ultimate IIT Freshman Survival Guide',
    author: 'Samadhi Dissanayake',
    category: 'General',
    description: 'Your complete guide to surviving and thriving in your first year at university. From campus orientation to time management strategies.',
    date: '2026-06-15',
    component: FreshmanSurvivalGuide,
  },
  {
    id: 'project-tips-tricks',
    title: 'SDGP & Capstone Project Tips & Tricks',
    author: 'Samadhi Dissanayake',
    category: 'Projects',
    description: 'Proven strategies for success in large-scale software development projects. Learn from past students who achieved distinction.',
    date: '2026-07-01',
    component: ProjectTipsAndTricks,
  },
];
