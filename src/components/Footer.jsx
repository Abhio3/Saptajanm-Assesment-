import React from 'react';
import footerimg from '../assets/Main-png.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-dark text-white w-full px-4 py-8 ">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="p-3 bg-white rounded-2xl">
            <img src={footerimg} className="w-[50px]" alt="Logo" />
          </div>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.2 }}>
              <a href="">
                <FaInstagram className="text-xl" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <a href="">
                <FaFacebook className="text-xl" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <a href="">
                <FaLinkedin className="text-xl" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-6 text-center sm:text-left sm:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Links</h3>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">Products</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">Blogs</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">About</a>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Policies</h3>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">Privacy Policy</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">Terms & Conditions</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">Career</a>
            </motion.div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Contact</h3>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">+1-9547 9874</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="" className="text-sm">saptajnm@gmail.com</a>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-xs text-gray-400">
          <p>© 2024 All Rights Reserved</p>
          <p>Terms and Conditions Apply</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
