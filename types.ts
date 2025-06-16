import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement<{ className?: string }>;
}

export interface Skill {
  name: string;
  category: string;
  icon?: React.ReactNode; // Optional icon for skill
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  logoUrl?: string; // Optional company logo
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface NavLink {
  href: string;
  label: string;
}