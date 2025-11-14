import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, SunIcon, MoonIcon, ChevronDownIcon } from './icons';
import { ThemeContext } from '../contexts/ThemeContext';

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About Us' },
  // Services is now a special dropdown item
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/team', name: 'Our Team' },
  { path: '/career', name: 'Careers' },
  { path: '/contact', name: 'Contact' },
];

const serviceDropdownLinks = [
    { path: '/weddings', name: 'Weddings' },
    { path: '/corporate-events', name: 'Corporate Events' },
    { path: '/services/destination-weddings', name: 'Destination Weddings' },
    { path: '/services/concerts-live-shows', name: 'Concerts & Shows' },
    { path: '/services', name: 'View All Services' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const pagesWithLightBg = ['/cost-calculator', '/contact', '/career'];
  const hasLightBg = pagesWithLightBg.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = { color: '#c5a35a' };
  
  const navLinkClasses = "text-brand-light/70 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const mobileNavLinkClasses = "text-brand-light/70 hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium transition-colors";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || hasLightBg ? 'bg-brand-dark/90 dark:bg-brand-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <span className="text-3xl font-serif font-bold tracking-wider">
                <span className="text-brand-light">Ka</span>
                <span className="text-brand-gold">Sha</span>
              </span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.slice(0, 2).map((link) => (
                <NavLink key={link.name} to={link.path} style={({ isActive }) => (isActive && link.path !== '/services' ? activeLinkStyle : {})} className={navLinkClasses}>
                  {link.name}
                </NavLink>
              ))}

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <NavLink to="/services" style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={`${navLinkClasses} flex items-center`}>
                  Services <ChevronDownIcon className="w-4 h-4 ml-1"/>
                </NavLink>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-brand-dark ring-1 ring-black ring-opacity-5 py-1 z-10">
                    {serviceDropdownLinks.map(link => (
                      <NavLink key={link.name} to={link.path} className="block px-4 py-2 text-sm text-brand-light/70 hover:text-brand-gold hover:bg-brand-dark-secondary" onClick={() => setIsServicesDropdownOpen(false)}>
                        {link.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              
              {navLinks.slice(2).map((link) => (
                <NavLink key={link.name} to={link.path} style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={navLinkClasses}>
                  {link.name}
                </NavLink>
              ))}

               <NavLink to="/cost-calculator" className="bg-brand-gold text-brand-dark font-bold py-2 px-5 rounded-sm hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-sm">
                  Cost Calculator
                </NavLink>
                <button onClick={toggleTheme} className="p-2 rounded-full text-brand-light/70 hover:text-brand-gold transition-colors">
                    {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
             <button onClick={toggleTheme} className="p-2 rounded-full text-brand-light/70 hover:text-brand-gold transition-colors">
                {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-brand-light hover:text-brand-gold focus:outline-none">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-dark dark:bg-brand-dark-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={mobileNavLinkClasses}>
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Services Dropdown */}
            <div>
              <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className={`${mobileNavLinkClasses} w-full text-left flex justify-between items-center`}>
                Services
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-1 border-l-2 border-brand-gold/20">
                    {serviceDropdownLinks.map(link => (
                        <NavLink key={link.name} to={link.path} onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }} className={mobileNavLinkClasses}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)} style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={mobileNavLinkClasses}>
                {link.name}
              </NavLink>
            ))}

            <NavLink to="/cost-calculator" onClick={() => setIsOpen(false)} className="bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-sm hover:bg-yellow-500 transition-all duration-300 block text-center mx-2 mt-2">
              Cost Calculator
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;