import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  return (
  
    
      <footer className=" bottom-0  left-0 w-full shadow-2xl bg-gray-700 text-gray-300 mt-30 pt-10 pb-6 ">
        <div className="bg-gray-700  max-w-7xl mx-3  px-6  grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Volt-Ex ⚡
            </h2>
            <p className="text-sm text-gray-400">
              Your one-stop shop for smartphones, laptops, speakers, and
              headphones. Quality gadgets at lightning speed ⚡.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Smart Phone", "Laptop", "Speakers", "Head Phones"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/abc"
                      className="hover:text-white transition duration-300">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <HiOutlineMail className="h-5 w-5" />
                <span>support@voltex.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlinePhone className="h-5 w-5" />
                <span>+91 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlineLocationMarker className="h-5 w-5" />
                <span>Kannur, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Volt-Ex. Made for study purpose
        </div>
      </footer>
      
  );
};

export default Footer;
