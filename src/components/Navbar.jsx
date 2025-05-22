import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // ✅ Function to scroll smoothly to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileDrawerOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* 🔹 Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-white">Swastik</span>
          </div>

          {/* 🔹 Desktop Navigation Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li><button onClick={() => scrollToSection("home")} className="hover:text-orange-500 text-white">Home</button></li>
            <li><button onClick={() => scrollToSection("features")} className="hover:text-orange-500 text-white">Features</button></li>
            <li><button onClick={() => scrollToSection("workflow")} className="hover:text-orange-500 text-white">Workflow</button></li>
            <li><button onClick={() => scrollToSection("pricing")} className="hover:text-orange-500 text-white">Pricing</button></li>
            <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-orange-500 text-white">Testimonials</button></li>
          </ul>

          {/* 🔹 Sign In & Sign Up Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/signin" className="py-2 px-3 border rounded-md text-white">Contacts</Link>
            <a
  href="https://forms.fillout.com/t/uGrDGsr5QLus"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
>
  Place Order
</a>

          </div>

          {/* 🔹 Mobile Menu Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Navigation Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6">
              <li><button onClick={() => scrollToSection("home")} className="hover:text-orange-500 text-white">Home</button></li>
              <li><button onClick={() => scrollToSection("features")} className="hover:text-orange-500 text-white">Features</button></li>
              <li><button onClick={() => scrollToSection("workflow")} className="hover:text-orange-500 text-white">Workflow</button></li>
              <li><button onClick={() => scrollToSection("pricing")} className="hover:text-orange-500 text-white">Pricing</button></li>
              <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-orange-500 text-white">Testimonials</button></li>
            </ul>
            <div className="flex space-x-6 mt-6">
              <Link to="/signin" className="py-2 px-3 border rounded-md text-white">Contacts</Link>
             {/* 🔹 Mobile Place Order Button */}
<a
  href="https://forms.fillout.com/t/uGrDGsr5QLus"
  target="_blank"
  rel="noopener noreferrer"
  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"
>
  Place Order
</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
