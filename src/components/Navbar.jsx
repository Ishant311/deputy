import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Product", "Solutions", "Pricing", "Resources"];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-between items-center gap-4">
        
        <Link to="/" className="flex items-center">
          <Logo  color="#0C017B"/>
        </Link>

        <div className="hidden lg:flex flex-grow justify-around items-center">
          <div className="flex items-center space-x-6">
            {["Product", "Solutions", "Resources"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-800 transition text-[16px]"
              >
                {item}
                <ChevronDown size={16} />
              </button>
            ))}
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-blue-800 text-[16px]"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-blue-900 hover:underline transition font-medium"
            >
              Log in
            </Link>
            <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-900 font-bold hover:bg-blue-100">
              Book a demo
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800">
              Start my free trial
            </button>
          </div>
        </div>

        <div className="lg:hidden ml-auto flex justify-center items-center gap-5">
          <button className="px-2 py-1 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 text-md">
              Start my free trial
            </button>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto flex flex-col justify-between lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 shadow-sm">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Logo color="#0C017B"/>
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-blue-800">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {navItems.map((item) => (
              <button
                key={item}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-semibold text-[#2a2a7a]"
              >
                {item}
                <ChevronRight size={18} className="text-[#6c63ff]" />
              </button>
            ))}
          </div>

          <div className="px-4 mt-6">
            <button className="w-full py-3 rounded-lg bg-[#0a008c] text-white font-bold mb-3">
              Start my free trial
            </button>
            <button className="w-full py-3 rounded-lg bg-blue-50 text-[#0a008c] font-bold">
              Log in
            </button>
          </div>

       
          <div className="flex justify-around items-center mt-6 border-t border-gray-200 py-4 text-[#0a008c] text-sm font-semibold">
            <Link to="/demo">Book a demo</Link>
            <span>|</span>
            <Link to="/help">Help center</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
