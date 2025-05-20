
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const aboutSubMenuItems = [
    { name: 'Know Us', link: '/about/know-us' },
    { name: 'About Us', link: '/about/venture-lab' },
    { name: 'Our Team', link: '/about/team' },
    { name: 'Governing Council', link: '/about/council' },
    { name: 'Our Mentors', link: '/mentors' },
  ];

  const programMenuItems = [
    { name: 'VentureLab Program', link: '/programs/venture-lab' },
    { name: 'MeiTY TIDE 2.0', link: '/programs/meity-tide' },
    { name: 'SISFS', link: '/programs/sisfs' },
  ];

  const menuItems = [
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold">
            <span className="text-blue-900">Venture</span>
            <span className="text-teal-600">Lab</span>
            <span className="text-blue-900"> Thapar</span>
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
          {/* About Us Dropdown */}
          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-900 font-medium" asChild>
                <span className="cursor-pointer">About Us</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {aboutSubMenuItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link 
                      to={item.link}
                      className="w-full block py-2 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Programs Dropdown */}
          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-900 font-medium" asChild>
                <span className="cursor-pointer">Programs</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {programMenuItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link 
                      to={item.link}
                      className="w-full block py-2 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Regular Menu Items */}
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              to={item.link}
              className="text-gray-700 hover:text-blue-900 font-medium"
            >
              {item.name}
            </Link>
          ))}
          
          <Button asChild className="bg-blue-900 text-white hover:bg-blue-950 rounded-full">
            <Link to="/apply">Get Started</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-2">
            {/* Mobile About Us Submenu */}
            <div className="py-2">
              <div className="block py-3 text-gray-800 font-medium">About Us</div>
              <div className="pl-4">
                {aboutSubMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block py-2 text-gray-600 hover:text-blue-900"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-b border-gray-100 mt-2"></div>
            </div>
            
            {/* Mobile Programs Submenu */}
            <div className="py-2">
              <div className="block py-3 text-gray-800 font-medium">Programs</div>
              <div className="pl-4">
                {programMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block py-2 text-gray-600 hover:text-blue-900"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-b border-gray-100 mt-2"></div>
            </div>
            
            {/* Mobile Regular Menu Items */}
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link 
                  to={item.link} 
                  className="block py-3 text-gray-800 hover:text-blue-900"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
                {item !== menuItems[menuItems.length - 1] && <div className="border-b border-gray-100"></div>}
              </div>
            ))}
            
            <div className="py-4">
              <Button asChild className="w-full bg-blue-900 hover:bg-blue-950 rounded-full">
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
