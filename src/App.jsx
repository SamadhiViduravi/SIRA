import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Resources } from './pages/Resources.jsx';
import { ArticlesHub } from './pages/ArticlesHub.jsx';
import { Programs } from './pages/Programs.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/articles" element={<ArticlesHub />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
