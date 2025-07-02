import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import newLogo from '../assets/new cupid-logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

 
  const navItems = [
    { name: 'About Us', id: 'about', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    navigate('/');
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img 
              src={newLogo} 
              alt="CupidAlliance Logo" 
              className="h-16 w-16 object-contain mr-1"
            />
          </motion.div>

         
          <nav className="hidden md:flex items-center gap-8"> 
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center" 
              >
                {item.path === '/' ? (
                  <button
                    onClick={item.id === 'about' ? handleAboutClick : handleLogoClick}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-300 whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-300 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            
           
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </nav>

         
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

       
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute right-6 top-20 bg-white rounded-lg shadow-xl py-2 w-56"
          >
            {navItems.map((item) => (
              <div key={item.name} className="px-4 py-2">
                {item.path === '/' ? (
                  <button
                    onClick={item.id === 'about' ? () => {
                      setIsMobileMenuOpen(false);
                      handleAboutClick();
                    } : () => {
                      setIsMobileMenuOpen(false);
                      handleLogoClick();
                    }}
                    className="block w-full text-left text-gray-800 hover:bg-purple-100 rounded px-3 py-2"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-gray-800 hover:bg-purple-100 rounded px-3 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 py-2">
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;