import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import logoImage from '../../assets/Scrap-logo.png';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#3f51b5] text-white py-4 header-shadow sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="SBD Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors mr-4"
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
            <span className="text-sm font-medium">
              {i18n.language === 'ar' ? 'English' : 'عربي'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="nav-link font-medium hover:text-gray-200 transition-colors"
            >
              {t('header.home')}
            </a>
            <a
              href="#our-services"
              className="nav-link font-medium hover:text-gray-200 transition-colors"
            >
              {t('header.ourServices')}
            </a>
            <a
              href="#about"
              className="nav-link font-medium hover:text-gray-200 transition-colors"
            >
              {t('header.about')}
            </a>
            <a
              href="#location"
              className="nav-link font-medium hover:text-gray-200 transition-colors"
            >
              {t('header.location')}
            </a>
            <a
              href="#contact"
              className="contact-button px-6 py-2 rounded font-medium text-white hover:bg-red-700 transition-all"
            >
              {t('header.contactUs')}
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col items-center space-y-4 pt-4`}
        >
          <a
            href="#"
            className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
            onClick={toggleMenu}
          >
            {t('header.home')}
          </a>
          <a
            href="#our-services"
            className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
            onClick={toggleMenu}
          >
            {t('header.ourServices')}
          </a>
          <a
            href="#about"
            className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
            onClick={toggleMenu}
          >
            {t('header.about')}
          </a>
          <a
            href="#location"
            className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
            onClick={toggleMenu}
          >
            {t('header.location')}
          </a>
          <a
            href="#contact"
            className="w-full text-center py-2 bg-red-600 hover:bg-red-700 transition-colors"
            onClick={toggleMenu}
          >
            {t('header.contactUs')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 