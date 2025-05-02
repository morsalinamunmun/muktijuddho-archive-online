
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-bangladesh-green flex items-center justify-center">
              <span className="text-white font-bold">LW</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-bangladesh-green">Liberation War Archive</h1>
              <p className="text-xs text-gray-500">Preserving Bangladesh's History</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-bangladesh-green font-medium">Home</Link>
            <Link to="/documents" className="text-gray-700 hover:text-bangladesh-green font-medium">Documents</Link>
            <Link to="/interviews" className="text-gray-700 hover:text-bangladesh-green font-medium">Interviews</Link>
            <Link to="/photographs" className="text-gray-700 hover:text-bangladesh-green font-medium">Photographs</Link>
            <Link to="/contact" className="text-gray-700 hover:text-bangladesh-green font-medium">Contact</Link>
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white z-50 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-bangladesh-green font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>Home</Link>
            <Link to="/documents" className="text-gray-700 hover:text-bangladesh-green font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>Documents</Link>
            <Link to="/interviews" className="text-gray-700 hover:text-bangladesh-green font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>Interviews</Link>
            <Link to="/photographs" className="text-gray-700 hover:text-bangladesh-green font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>Photographs</Link>
            <Link to="/contact" className="text-gray-700 hover:text-bangladesh-green font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>Contact</Link>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search archives..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bangladesh-green"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
