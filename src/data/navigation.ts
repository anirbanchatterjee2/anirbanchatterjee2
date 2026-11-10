export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Work', href: '/experience' },
  { label: 'Impact', href: '/achievements' },
  { label: 'AI', href: '/projects' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  main: navLinks,
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anirban-chatterjee-42151a19/' },
    { label: 'GitHub', href: 'https://github.com/anirbanchatterjee2' },
    { label: 'Email', href: 'mailto:hereiam.1987@gmail.com' },
  ],
};
