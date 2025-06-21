
export interface PersonalInfo {
  name: string;
  tagline: string;
  profilePictureUrl: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  address: string;
  cvUrl: string;
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface Skills {
  programmingLanguages: string[];
  frameworksLibraries: string[];
  tools: string[];
  microsoftOffice: string[];
  other: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  website?: string;
  details?: string;
}

export interface LanguageItem {
  name: string;
  level?: string; 
  listening?: string;
  reading?: string;
  spokenProduction?: string;
  spokenInteraction?: string;
  writing?: string;
  proficiency?: string; 
}

export interface VolunteeringItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  link?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  aboutMe: string;
  workExperience: WorkExperienceItem[];
  projects: ProjectItem[];
  skills: Skills;
  education: EducationItem[];
  languages: LanguageItem[];
  volunteering: VolunteeringItem[];
}
