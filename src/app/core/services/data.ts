import { Injectable } from '@angular/core';

export interface Skill{
  name: string;
  type: "technical" | "soft";
}

export interface Project{
  name:string;
  description:string;
  techStack:string[];
  githubLink:string;
  liveDemoLink?:string;
}

export interface ExperienceItem{
  company:string;
  role:string;
  startDate:string;
  endDate:string;
  description:string;
}
//this is used to create object
@Injectable({
  providedIn: 'root',//this allows only 1 object to be created--singleton services
})
export class Data {
  skills: Skill[] = [
  { name: 'Java', type: 'technical' },
  { name: 'C++', type: 'technical' },
  { name: 'C', type: 'technical' },
  { name: 'HTML', type: 'technical' },
  { name: 'CSS', type: 'technical' },
  { name: 'JavaScript', type: 'technical' },
  { name: 'SQL', type: 'technical' },
  { name: 'Data Structures', type: 'technical' },
  { name: 'OOP', type: 'technical' },
  { name: 'DBMS', type: 'technical' },
  { name: 'Angular', type: 'technical' },
  { name: 'Communication', type: 'soft' },

  { name: 'Teamwork', type: 'soft' },
  { name: 'Problem Solving', type: 'soft' },
];
 projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio built with Angular 21, featuring standalone components, lazy-loaded routing, a shared data service, and a working contact form using Reactive Forms.',
    techStack: ['Angular', 'TypeScript', 'CSS'],
    githubLink: 'https://github.com/ItsPre',
  },
  {
    name: 'Student Management System',
    description: 'A console-based Java application to manage student records efficiently, with add, delete, and display operations built using ArrayList and core OOP concepts like classes and objects.',
    techStack: ['Java', 'OOP', 'Data Structures'],
    githubLink: 'https://github.com/ItsPre',
  },
  {
    name: 'To-Do List Web Application',
    description: 'A simple task management web app with add and delete task functionality, built with a clean and user-friendly interface.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/ItsPre',
  },
];
  experience:ExperienceItem[]=[
    {
      company:'Garuda UAV',
      role:'Microfrontend Developer Intern',
      startDate:'June 2026',
      endDate:'Present',
      description:"Working on implementing a microfrontend architecture using Module Federation, enabling development and deployment of application modules. Successfully completed and submitted the assigned implementation task"
    }
  ];

  getSkills():Skill[]{
    return this.skills;
  }

  getProjects():Project[]{
    return this.projects;
  }

  getExperience():ExperienceItem[]{
    return this.experience;
  }
}
