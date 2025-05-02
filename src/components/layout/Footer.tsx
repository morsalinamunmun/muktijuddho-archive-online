
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bangladesh-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-serif font-bold mb-4">Liberation War Archive</h2>
            <p className="text-gray-300 mb-4">
              Dedicated to preserving the history and memories of the Liberation War of Bangladesh through documents, interviews, and photographs.
            </p>
            <p className="text-gray-300">
              © {currentYear} Liberation War Archive. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/documents" className="text-gray-300 hover:text-white">Documents</Link>
              </li>
              <li>
                <Link to="/interviews" className="text-gray-300 hover:text-white">Interviews</Link>
              </li>
              <li>
                <Link to="/photographs" className="text-gray-300 hover:text-white">Photographs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              Dhaka, Bangladesh
            </p>
            <p className="text-gray-300 mb-2">
              info@liberationwararchive.org
            </p>
            <p className="text-gray-300">
              +880 123 456 7890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
