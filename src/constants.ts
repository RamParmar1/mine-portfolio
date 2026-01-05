import { Project, NavItem, Skill } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Travel Management System (PHP)',
    desc: 'A live full-stack travel booking system with admin panel, user authentication, and bookings.',
    features: ['User auth', 'Booking flow', 'Admin dashboard', 'Search & filters'],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    img: 'https://plus.unsplash.com/premium_photo-1736167749916-b88de25ca315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', // Keeping your uploaded logo
    repo: 'https://github.com/RamParmar1/journey-junction-PHP',
    demo: 'https://journeyjunction.kesug.com/'
  },
  {
    id: 5,
    title: 'Travel Management System (MERN)',
    desc: 'A comprehensive travel booking platform built with the MERN stack, featuring dynamic tour packages and user management.',
    features: ['MERN Stack', 'JWT Auth', 'Redux', 'Booking System'],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    // Illustrative travel image (Plane/Map vibe)
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    repo: 'https://github.com/RamParmar1/journey-junction-MERN',
    
  },
  {
    id: 2,
    title: 'PurePlate (Restaurant Management)',
    desc: 'A deployed MERN stack application for food ordering and restaurant management with a modern UI.',
    features: ['Food Menu', 'Cart & Orders', 'Admin Dashboard', 'JWT Authentication'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    // Illustrative food image
    img: 'https://plus.unsplash.com/premium_photo-1675660733763-84fb0836cfa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aWxsdXN0cmF0aW9uJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
    repo: 'https://github.com/RamParmar1/restaurant-PurePlate',
    
  },
  {
    id: 3,
    title: 'Travel Management (Django + React)',
    desc: 'Currently in development. A robust travel platform leveraging the power of Django REST Framework and PostgreSQL.',
    features: ['Relational Database', 'Django ORM', 'Secure API', 'Scalable Backend'],
    tech: ['Django', 'React', 'PostgreSQL', 'Python'],
    // Illustrative adventure/nature image
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    repo: 'https://github.com/RamParmar1/travel_management_system',
  },
  {
    id: 4,
    title: 'Python Mini Projects',
    desc: 'Collection: Tkinter GUI apps, FastAPI backends, automation scripts',
    features: ['GUI Apps', 'REST APIs', 'Automation', 'Chatbot agent'],
    tech: ['Python', 'FastAPI', 'Tkinter', 'OpenAI'],
    // Abstract code/tech illustration
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    repo: 'https://github.com/RamParmar1/python/mini-project/'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain-wordmark colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'Python', iconClass: 'devicon-python-plain colored' },
  { name: 'Java', iconClass: 'devicon-java-plain colored' },
  { name: 'C++', iconClass: 'devicon-cplusplus-plain colored' },
  { name: 'C', iconClass: 'devicon-c-plain colored' },
  { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
  { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
  { name: 'Express', iconClass: 'devicon-express-original dark:text-white' }, 
  { name: 'Django', iconClass: 'devicon-django-plain colored' },
  { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
  { name: 'PHP', iconClass: 'devicon-php-plain colored' },
  { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'SQLite', iconClass: 'devicon-sqlite-plain colored' },
];

export const EMAIL = 'ramparmar.dev@gmail.com';
export const GITHUB_URL = 'https://github.com/RamParmar1';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ram-parmar-7b3664398';
export const LEETCODE_URL = 'https://leetcode.com/u/RamParmar/';
export const RESUME_PATH = '/resume/ram-parmar-resume.pdf';
