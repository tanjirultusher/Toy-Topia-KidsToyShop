import React from 'react';
import { Mail, Facebook, Twitter, Github, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-white shadow-inner rounded-t-xl text-blue-700 pt-8 mt-10">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center pb-2 gap-6">
          <div className="sm:col-span-2 lg:col-span-1 text-center md:text-left">
            <div className='flex justify-center md:justify-start gap-x-2 items-center mb-4'>
              <h3 className="text-2xl font-bold ">ToyTopia</h3>
            </div>
            <p className="text-blue-500 mb-6 max-w-xs mx-auto md:mx-0">
              The ultimate destination for discovering the best toys for your kids.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-bold text-lg mb-2">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 py-4 text-center text-sm text-blue-500">
          <p>&copy; {new Date().getFullYear()} HERO.IO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;