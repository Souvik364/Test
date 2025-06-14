import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Reviews',
      links: [
        { name: 'Smartphones', href: '/reviews/smartphones' },
        { name: 'Laptops', href: '/reviews/laptops' },
        { name: 'Audio', href: '/reviews/audio' },
        { name: 'Wearables', href: '/reviews/wearables' },
        { name: 'Accessories', href: '/reviews/accessories' },
      ],
    },
    {
      title: 'Content',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Videos', href: '/videos' },
        { name: 'Buying Guides', href: '/guides' },
        { name: 'Comparisons', href: '/comparisons' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com' },
    { name: 'YouTube', icon: FiYoutube, href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <span className="text-xl font-bold text-primary">TechReviewer</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Expert reviews on the latest technology products and digital content.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} TechReviewer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 