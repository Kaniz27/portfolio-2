import { IconType } from 'react-icons';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaExternalLinkAlt
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiFirebase, SiVercel, SiNetlify, SiPrisma, SiMongoose, SiBootstrap
} from 'react-icons/si';

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const NAV_LINKS = [
  { 
    name: 'About', 
    to: 'about',
    dropdown: [
      { name: 'About Me', to: 'about' },
      { name: 'Skills', to: 'skills' },
      { name: 'Experience', to: 'experience' },
      { name: 'Education', to: 'education' },
    ]
  },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'MERN Stack',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Express.js', icon: SiExpress },
      { name: 'React.js', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
    ]
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Redux', icon: SiRedux },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Mongoose', icon: SiMongoose },
      { name: 'REST API', icon: FaNodeJs },
      { name: 'Prisma', icon: SiPrisma },
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
    ]
  }
];

export const PROJECTS = [
  {
    title: 'Frontliner Dashboard',
    featured: true,
    description: 'Sales & Performance Management System. A professional dashboard for frontliners to track sales, targets, and analytics.',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Chart.js'],
    github: '#',
    live: '#',
    features: ['Role-based access', 'Performance analytics', 'Target tracking']
  },
  {
    title: 'Movie Ticket Booking',
    description: 'Online cinema ticket booking platform with seat selection and showtime scheduling.',
    image: 'https://picsum.photos/seed/movie/800/600',
    tech: ['React', 'Tailwind CSS', 'Redux', 'Firebase', 'Node.js'],
    github: '#',
    live: '#',
    features: ['Movie listing', 'Seat selection', 'Booking confirmation']
  },
  {
    title: 'Nest Website',
    description: 'Modern Portfolio / Landing Page with clean design and smooth animations.',
    image: 'https://picsum.photos/seed/nest/800/600',
    tech: ['React', 'Tailwind CSS', 'DaisyUI', 'Vite'],
    github: '#',
    live: '#',
    features: ['Responsive design', 'Smooth scrolling', 'Modern UI']
  },
  {
    title: 'Grocify',
    description: 'Grocery e-commerce UI focusing on product listing and seamless cart flow.',
    image: 'https://picsum.photos/seed/grocery/800/600',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: '#',
    live: '#',
    features: ['Product listing', 'Cart flow', 'Responsive design']
  },
  {
    title: 'Dragon News',
    description: 'Live breaking news application with category filtering and dynamic feeds.',
    image: 'https://picsum.photos/seed/news/800/600',
    tech: ['React', 'Firebase', 'Bootstrap', 'Node.js'],
    github: '#',
    live: '#',
    features: ['Category filtering', 'Authentication', 'Dynamic feeds']
  },
  {
    title: 'Products E-Commerce Site',
    description: 'Online shopping platform with product listings, cart, and checkout system.',
    image: 'https://picsum.photos/seed/shopping/800/600',
    tech: ['React', 'Tailwind CSS', 'Redux', 'Firebase', 'Node.js', 'Express'],
    github: '#',
    live: '#',
    features: ['Product listings', 'Cart functionality', 'Checkout system']
  },
  {
    title: 'Tour & Travel Website',
    description: 'Explore and book tours online with destination browsing and packages.',
    image: 'https://picsum.photos/seed/travel/800/600',
    tech: ['React', 'Tailwind CSS', 'React Router', 'Firebase'],
    github: '#',
    live: '#',
    features: ['Destination browsing', 'Packages', 'Booking system']
  },
  {
    title: 'E-commerce Website',
    description: 'Full-featured e-commerce platform with product management and secure checkout.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Redux'],
    github: '#',
    live: '#',
    features: ['Product management', 'Secure checkout', 'State management']
  },
  {
    title: 'Flooring Website',
    description: 'Professional flooring service website with portfolio showcase and smooth navigation.',
    image: 'https://picsum.photos/seed/flooring/800/600',
    tech: ['React', 'Tailwind', 'DaisyUI'],
    github: '#',
    live: '#',
    features: ['Service listings', 'Portfolio showcase', 'Smooth navigation']
  }
];

export const EDUCATION = [
  {
    year: '2025',
    degree: 'Diploma in CSE',
    institution: 'Graphic Arts Institute',
    result: 'CGPA: 3.70'
  },
  {
    year: '2022',
    degree: 'HSC',
    institution: 'Fulchari Degree College',
    result: 'GPA: 4.73'
  },
  {
    year: '2017',
    degree: 'SSC',
    institution: 'Shaghata Pilot Girls High School & College',
    result: 'GPA: 4.68'
  }
];

export const TRAINING = [
  {
    title: 'Industrial Attachment Trainee (Intern)',
    company: 'Bdcalling – Betopia Group',
    location: 'Dhaka',
    period: 'Sep 2025 – Nov 2025',
    responsibilities: [
      'Built responsive UI (HTML, CSS, JS)',
      'Developed React components',
      'Clean architecture',
      'REST APIs (Node + Express)',
      'Full-stack integration'
    ]
  }
];

export const EXPERIENCE = [
  {
    period: 'Dec 2025 – Mar 2026',
    role: 'Frontend Developer',
    company: 'Green Soul IT',
    description: 'Developed responsive e-commerce website using React, Tailwind CSS, JavaScript. Implemented routing using React Router and managed global state with Redux.',
    roles: [
      'Developed responsive e-commerce website using React, Tailwind CSS, JavaScript',
      'Implemented routing using React Router',
      'Managed state with Redux',
      'Designed modern UI',
      'Ensured cross-device compatibility'
    ]
  },
  {
    period: 'Mar 2025 – Aug 2025',
    role: 'Frontend Developer',
    company: 'HSBLCO LLC',
    description: 'Built flooring website using React.js and Tailwind. Implemented smooth navigation and designed UI using Tailwind + DaisyUI.',
    roles: [
      'Built flooring website using React.js and Tailwind',
      'Implemented smooth navigation',
      'Designed UI using Tailwind + DaisyUI'
    ]
  }
];

export const ADDITIONAL_INFO = {
  languages: [
    { name: 'Bangla', level: 'Native' },
    { name: 'English', level: 'B1 (CEFR)' }
  ],
  extraCurricular: [
    'Created AI-based promotional videos and images',
    'Managed digital marketing pages',
    'Experience in content boosting and marketing'
  ]
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/kanizfatematuly27', icon: FaFacebook },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kanizfatema96/', icon: FaLinkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/kaniz.tuly/', icon: FaInstagram },
  { name: 'WhatsApp', url: 'https://wa.me/8801700000000', icon: FaWhatsapp }, // Placeholder number
];
