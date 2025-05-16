
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4 text-thapar">VentureLab Thapar</h3>
            <p className="text-gray-300 mb-4">
              We back bold entrepreneurs building disruptive solutions through mentorship, funding, and workspace support.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-300 hover:text-thapar">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-thapar">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-thapar">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-thapar">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-thapar">Programs</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-thapar">Portfolio</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-thapar">Events</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-thapar">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs#pre-incubation" className="text-gray-300 hover:text-thapar">Pre-Incubation</Link></li>
              <li><Link to="/programs#incubation" className="text-gray-300 hover:text-thapar">Incubation</Link></li>
              <li><Link to="/programs#acceleration" className="text-gray-300 hover:text-thapar">Acceleration</Link></li>
              <li><Link to="/programs#investment" className="text-gray-300 hover:text-thapar">Investment</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>VentureLab Thapar</p>
              <p>123 Innovation Street</p>
              <p>Mumbai, India 400001</p>
              <p className="mt-2">Email: <a href="mailto:info@venturelabThapar.org.in" className="hover:text-thapar">info@venturelabThapar.org.in</a></p>
              <p>Phone: <a href="tel:+919876543210" className="hover:text-thapar">+91 987 654 3210</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} VentureLab Thapar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-thapar text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-thapar text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
