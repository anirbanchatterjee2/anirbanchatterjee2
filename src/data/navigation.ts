export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Awards', href: '/awards' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Projects & Research', href: '/research' },
  { label: 'Technical Blogs', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const secondaryNavLinks: NavLink[] = [
  { label: 'Resume', href: '/resume' },
];

export const footerLinks = {
  main: navLinks,
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anirban-chatterjee-42151a19/' },
    { label: 'GitHub', href: 'https://github.com/anirbanchatterjee2' },
    { label: 'Email', href: 'mailto:hereiam.1987@gmail.com' },
  ],
};
