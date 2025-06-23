import './App.css'
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HomeSection from './components/Home'
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import { portfolioData } from './data';

function App() {
  const { personalInfo, aboutMe, workExperience, projects, skills } = portfolioData;


  return (
    <div className="min-h-screen bg-navy font-sans text-light-slate">
      <Navbar personalInfo={personalInfo} />
      <main className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-64">
        <HomeSection personalInfo={personalInfo} />
        <AboutSection aboutMe={aboutMe} personalInfo={personalInfo} />
        <ExperienceSection workExperience={workExperience} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App
