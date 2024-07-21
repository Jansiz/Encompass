// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './pages/footer';
import Questionnaire from './pages/questionnaire';

const App: React.FC = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
};

export default App;