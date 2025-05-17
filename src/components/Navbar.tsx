
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'About', link: '/about' },
    { name: 'Programs', link: '/programs' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Mentors', link: '/mentors' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold">
            <span className="text-gray-800">Venture</span>
            <span className="text-thapar">Lab</span>
            <span className="text-gray-800"> Thapar</span>
          </span>
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              to={item.link}
              className="text-gray-700 hover:text-thapar font-medium"
            >
              {item.name}
            </Link>
          ))}
          
          <Button asChild className="bg-blue-800 text-white hover:bg-blue-900 rounded-full">
            <Link to="/apply">Get Started</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link 
                  to={item.link} 
                  className="block py-3 text-gray-800 hover:text-thapar"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
                {item !== menuItems[menuItems.length - 1] && <div className="border-b border-gray-100"></div>}
              </div>
            ))}
            <div className="py-4">
              <Button asChild className="w-full bg-blue-800 hover:bg-blue-900 rounded-full">
                <Link to="/apply" onClick={toggleMenu}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
