
import './App.css';

import CallToActionSection from './components/CallToActionSection';
import FAQ from './components/FAQ';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import ServicesSection from './components/ServiceSection';
import SkillsSection from './components/SkillSection';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import WhyUsSection from './components/WhyYsSection';
import AboutSection from './pages/About';

function App() {
  return (
    <div className="index-page">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <WhyUsSection/>
      <SkillsSection/>
      <ServicesSection/>
      <CallToActionSection/>
      <Portfolio/>
      <Team/>
      
      <Pricing/>
      <Testimonials/>
      <FAQ/>
    </div>
  );
}

export default App;
