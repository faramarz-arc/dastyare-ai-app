import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tutorials from './components/Tutorials';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import ConsultingService from './pages/ConsultingService';
import ImplementationService from './pages/ImplementationService';
import TrainingService from './pages/TrainingService';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Tutorials />
      <Blog />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/consulting" element={<ConsultingService />} />
        <Route path="/services/implementation" element={<ImplementationService />} />
        <Route path="/services/training" element={<TrainingService />} />
      </Routes>
    </Router>
  );
}

export default App;
