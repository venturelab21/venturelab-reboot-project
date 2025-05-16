
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close any open dropdown when mobile menu is toggled
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'About', 
      link: '/about',
      dropdownItems: [
        { name: 'Our Story', link: '/about#story' },
        { name: 'Team', link: '/about#team' },
        { name: 'Mentors', link: '/about#mentors' }
      ] 
    },
    { 
      name: 'Programs', 
      link: '/programs',
      dropdownItems: [
        { name: 'Pre-Incubation', link: '/programs#pre-incubation' },
        { name: 'Incubation', link: '/programs#incubation' },
        { name: 'Acceleration', link: '/programs#acceleration' }
      ]
    },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Events', link: '/events' },
    { name: 'Resources', link: '/resources' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 md:py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-display font-bold text-thapar">VentureLab Thapar</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdownItems ? (
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-1"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-soft rounded-lg overflow-hidden z-50">
                      {item.dropdownItems.map(dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-thapar"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button asChild variant="ghost">
                  <Link to={item.link}>{item.name}</Link>
                </Button>
              )}
            </div>
          ))}
          
          <Button asChild className="ml-2">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdownItems ? (
                  <div>
                    <Button 
                      variant="ghost" 
                      className="flex items-center justify-between w-full py-3"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </Button>
                    
                    {openDropdown === item.name && (
                      <div className="pl-4 border-l-2 border-thapar-light ml-4 mb-2">
                        {item.dropdownItems.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.link}
                            className="block py-2 text-gray-600 hover:text-thapar"
                            onClick={toggleMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.link} 
                    className="block py-3 text-gray-800 hover:text-thapar"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
                {item !== menuItems[menuItems.length - 1] && <div className="border-b border-gray-100"></div>}
              </div>
            ))}
            <div className="py-4">
              <Button asChild className="w-full">
                <Link to="/apply" onClick={toggleMenu}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
