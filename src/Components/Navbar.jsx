import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState("");

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    // Get the current path and update active state
    const currentPath = location.pathname;
    const activeLink = links.find((link) => link.href === currentPath);
    setActive(activeLink ? activeLink.name : "Home");
  }, [location.pathname]); // Re-run when location changes

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <img
                src="https://lakshayainstitute.com/wp-content/uploads/2025/06/Lashayalogo.png"
                alt="Logo"
                className="md:h-12 h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  active === link.name
                    ? "text-[#002B5B] bg-blue-50 border-b-2 border-[#002B5B]"
                    : "text-gray-800 hover:text-[#002B5B] hover:bg-blue-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-sm">
              Study Enquiry
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#002B5B] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                active === link.name
                  ? "text-[#002B5B] bg-blue-50 border-l-4 border-[#002B5B]"
                  : "text-gray-800 hover:text-[#002B5B] hover:bg-blue-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full text-left bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-200 mt-2">
            Study Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;