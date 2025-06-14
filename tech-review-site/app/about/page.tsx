import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Us | TechReviewer',
  description: 'Learn more about the TechReviewer team, our mission, and how we review tech products to help you make informed buying decisions.',
};

// Sample team data
const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & Editor-in-Chief',
    bio: 'Tech enthusiast with over 10 years of experience reviewing consumer electronics. Previously senior editor at Tech Today magazine.',
    image: '/team/alex-chen.jpg',
    social: {
      twitter: 'https://twitter.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
      email: 'alex@techreviewer.com',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Smartphone Editor',
    bio: 'Specialized in smartphone reviews with a background in mobile technology development. Known for in-depth camera comparisons.',
    image: '/team/sarah-johnson.jpg',
    social: {
      twitter: 'https://twitter.com/sarahjohnson',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah@techreviewer.com',
    },
  },
  {
    name: 'Michael Torres',
    role: 'Audio & Wearables Editor',
    bio: 'Audio engineer turned tech reviewer with a passion for headphones, earbuds, and all things audio. Co-host of the TechTalk podcast.',
    image: '/team/michael-torres.jpg',
    social: {
      twitter: 'https://twitter.com/michaeltorres',
      linkedin: 'https://linkedin.com/in/michaeltorres',
      email: 'michael@techreviewer.com',
    },
  },
  {
    name: 'Priya Patel',
    role: 'Laptops & Computing Editor',
    bio: 'Computer science graduate specializing in laptop and PC hardware reviews. Focuses on performance benchmarking and value analysis.',
    image: '/team/priya-patel.jpg',
    social: {
      twitter: 'https://twitter.com/priyapatel',
      linkedin: 'https://linkedin.com/in/priyapatel',
      email: 'priya@techreviewer.com',
    },
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/5 dark:to-blue-500/5 rounded-2xl overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              About TechReviewer
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              We're a team of tech enthusiasts dedicated to providing honest, in-depth reviews to help you make informed decisions about your tech purchases.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          At TechReviewer, we believe that technology should enhance your life, not complicate it. Our mission is to cut through the noise and provide clear, honest, and thorough assessments of the latest tech products.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We test every product extensively in real-world conditions, focusing on the features that matter most to you. Our reviews are independent and unbiased, giving you the information you need to make smart purchasing decisions.
        </p>
      </section>
      
      {/* How We Review Section */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">How We Review</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-3">Thorough Testing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use each product for a minimum of two weeks in everyday situations. Our testing includes benchmark performance, battery life, usability, and durability assessments.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-3">Unbiased Perspective</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We don't accept payment for reviews and always disclose when products are provided by manufacturers. Our opinions are our own, with no external influence.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-3">Comprehensive Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our reviews consider multiple factors: design, performance, user experience, value for money, and long-term reliability based on our expertise.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-3">Clear Recommendations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We conclude each review with actionable advice and specific use cases where the product excels or falls short, helping you decide if it's right for you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="card overflow-hidden">
              <div className="relative h-60 w-full bg-gray-200 dark:bg-gray-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>
                
                <div className="flex space-x-3">
                  <a 
                    href={member.social.email}
                    className="text-gray-500 hover:text-primary"
                    aria-label={`Email ${member.name}`}
                  >
                    <FiMail className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="text-gray-500 hover:text-primary"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-primary"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Have questions, partnership inquiries, or feedback? We'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-full mb-4">
                  <FiMail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300">contact@techreviewer.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Office</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
            
            <Link 
              href="/contact"
              className="btn btn-primary inline-block px-6 py-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 