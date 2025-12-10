import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TensionControl } from './components/TensionControl';
import { ProductSolution } from './components/ProductSolution';
import { Team } from './components/Team';
import { JoinRevolution } from './components/JoinRevolution';
import { Footer } from './components/Footer';
import { NAV_ITEMS, ASSETS } from './constants';
import { Menu, X, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-3">
                <img
                  src={ASSETS.logo}
                  alt="VitaSens Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-vitasens-primary' : 'text-gray-800'}`}>
                  VitaSens
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center text-sm font-medium hover:text-vitasens-primary transition-colors py-2 ${isScrolled ? 'text-gray-600' : 'text-gray-800'
                      }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </a>

                  {/* Dropdown / Popover */}
                  {item.submenu && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden relative">
                        {/* Triangle Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>

                        <div className="py-2 relative z-10 bg-white">
                          {item.submenu.map((subItem, idx) => (
                            <div key={idx} className="px-6 py-3 hover:bg-gray-50 transition-colors cursor-default">
                              <p className="text-gray-900 font-bold text-sm mb-1">{subItem.title}</p>
                              <p className="text-gray-500 text-xs leading-relaxed">{subItem.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-800 font-bold text-lg block py-2"
                  >
                    {item.label}
                  </a>
                  {/* Mobile Submenu items (always visible or simplified) */}
                  {item.submenu && (
                    <div className="pl-4 border-l-2 border-gray-100 space-y-3 mt-1 mb-2">
                      {item.submenu.map((sub, idx) => (
                        <div key={idx}>
                          <p className="text-sm font-semibold text-gray-700">{sub.title}</p>
                          <p className="text-xs text-gray-500">{sub.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <TensionControl />
        <ProductSolution />
        <Team />
        <JoinRevolution />
      </main>

      <Footer />
    </div>
  );
};

export default App;