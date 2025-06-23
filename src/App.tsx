import './App.css'
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import HomeSection from './components/Home'
import Navbar from './components/Navbar';
import { portfolioData } from './data';

function App() {
  const { personalInfo, aboutMe, workExperience } = portfolioData;


  return (
    <div className="min-h-screen bg-navy font-sans text-light-slate">
      <Navbar personalInfo={personalInfo} />
      <main className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-64">
        <HomeSection personalInfo={personalInfo} />
        <AboutSection aboutMe={aboutMe} personalInfo={personalInfo} />
        <ExperienceSection workExperience={workExperience} />
      </main>
    </div>
  );
}

export default App
