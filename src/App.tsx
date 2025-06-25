import './App.css'
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HomeSection from './components/Home'
import LeftSocialBar from './components/LeftSocialBar';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import RightEmailBar from './components/RightEmailBar';
import SkillsSection from './components/SkillsSection';
import VolunteeringSection from './components/VolunteeringSection';
import { portfolioData } from './data';

function App() {
  const {
    personalInfo,
    aboutMe,
    workExperience,
    projects,
    skills,
    education,
    volunteering,
  } = portfolioData;


  return (
    <div className="min-h-screen bg-navy font-sans text-light-slate">
      <Navbar personalInfo={personalInfo} />
      <LeftSocialBar personalInfo={personalInfo} />
      <RightEmailBar email={personalInfo.email} />
      <main className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-64">
        <HomeSection personalInfo={personalInfo} />
        <AboutSection aboutMe={aboutMe} personalInfo={personalInfo} />
        <ExperienceSection workExperience={workExperience} />
        <EducationSection education={education} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <VolunteeringSection volunteering={volunteering} />
        <ContactSection personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App
