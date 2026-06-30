import { Navbar } from './Navbar.jsx';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-200 border-t border-gray-300 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-sm">
          <p>SIRA © 2024 - Student Insights & Resource Archive</p>
          <p className="mt-2">Built by students, for students. Open source and free forever.</p>
        </div>
      </footer>
    </div>
  );
}
