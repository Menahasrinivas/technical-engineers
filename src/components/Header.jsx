import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const desktopLinkClass = ({ isActive }) =>
  `relative px-3 py-1.5 transition
   ${isActive
     ? "text-teal-700 font-semibold"
     : "text-gray-700 hover:text-teal-700"}
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:h-[2px] after:w-full after:bg-teal-700
   after:scale-x-0 hover:after:scale-x-100
   after:origin-left after:transition-transform after:duration-300`;

const mobileLinkClass = ({ isActive }) =>
  `relative block py-3 text-base transition
   ${isActive ? "text-teal-700 font-semibold" : "text-gray-700"}
   
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:h-[2px] after:w-full after:bg-teal-700
   after:scale-x-0
   active:after:scale-x-100
   focus-visible:after:scale-x-100
   after:transition-transform after:duration-300`;


  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="w-full px-4 md:px-8 py-2 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
  <Link to="/" className="flex items-center justify-start">
  <img
    src="/logo/techlogo.png"
    alt="Technical Engineers Logo"
    className="h-14 md:h-20 w-auto"
  />
</Link>
</div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={desktopLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={desktopLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/services" className={desktopLinkClass}>
            Services
          </NavLink>
          <NavLink to="/why-choose-us" className={desktopLinkClass}>
            Why Choose Us
          </NavLink>
          <NavLink to="/contact" className={desktopLinkClass}>
            Contact
          </NavLink>
        </nav>

       <button
  className="md:hidden text-gray-700 focus:outline-none ml-auto"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {menuOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
</button>

      </div>

{menuOpen && (
  <div className="md:hidden bg-white border-t">
    <nav className="flex flex-col px-4">
      <NavLink to="/" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/about" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
        About Us
      </NavLink>
      <NavLink to="/services" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
        Services
      </NavLink>
      <NavLink to="/why-choose-us" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
        Why Choose Us
      </NavLink>
      <NavLink to="/contact" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
        Contact
      </NavLink>
    </nav>
  </div>
)}


    </header>
  );
}