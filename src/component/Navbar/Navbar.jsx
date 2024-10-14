
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import logo from '../../assets/bbt.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        
        <a
          href="/"
          className={`text-2xl flex  ${isScrolled ? "hover:text-indigo-600" : "text-white "}`}
        >
        {/* <img src={logo} alt="BerryBrainTech" className="w-10 h-10" /> */}
        <span>XYZ Solar energy company</span>
        </a>

        {/* Links for large screens */}
        <ul className="hidden md:flex space-x-8 items-center text-lg">
          <li>
            <a
              href="/"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Work
            </a>
          </li>
          <li className="">
            <a
              href="/"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Product
            </a>
            <button
              onClick={toggleServices}
              className={`ml-2 focus:outline-none ${isScrolled ? "text-black" : "text-white"}`}
            >
              ▼ {/* Dropdown icon */}
            </button>
            {isServicesOpen && (
              <ul className="absolute mb-2  bg-gray-200 shadow-lg mt-2 rounded-md">
                <li>
                  <button onClick={() => navigate('/')} className="block px-4 py-2 hover:bg-gray-200">
                 item1
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/')} className="block px-4 py-2 hover:bg-gray-200">
                  item1
                  </button>
                </li>
              
                <li>
                  <button onClick={() => navigate('/')} className="block px-4 py-2 hover:bg-gray-200">
                  item1
                  </button>
                </li>
               
              </ul>
            )}
          </li>
        
          <li>
            <a
              href="/contact"
              className={`${
                isScrolled ? "hover:text-indigo-600" : "text-white"
              }`}
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </li>
          {/* Call to action button */}
          <a
            href="tel:"
            className="inline-block px-6 py-2 bg-orange-600 text-white rounded-full"
            onClick={closeMenu}
          >
            Book a Call
          </a>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-lg">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
           Work
          </a>
          <div className="relative">
  <a
    href="/"
    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
    onClick={closeMenu} // Ensure the menu closes when clicked
  >
    Services
  </a>
  <button
    onClick={toggleServices}
    className="absolute ml-20 top-2 focus:outline-none"
  >
    ▼ {/* Dropdown icon */}
  </button>
  {isServicesOpen && (
    <ul className="absolute bg-white shadow-lg mt-2 rounded-md">
      <li>
        <button onClick={() => navigate('/')} className="block px-4 py-2 hover:bg-gray-200">
       item1
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/')} className="block px-4 py-2 hover:bg-gray-200">
        item1
        </button>
      </li>
      <li>
        <button onClick={() => navigate('/')} className="block px-4 py-2 hover:bg-gray-200">
        item1
        </button>
      </li>
     
    </ul>
  )}
</div>

          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-200"
            onClick={closeMenu}
          >
           Contact us
          </a>
       
          <a
            href="tel:"
            className="inline-block px-6 py-2 bg-orange-600 text-white rounded-full"
            onClick={closeMenu}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;