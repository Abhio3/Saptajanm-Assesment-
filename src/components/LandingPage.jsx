import React from 'react'
import mainPic from '../assets/main-png.png'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative min-h-screen bg-gray-50">
        <div className="container px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center h-auto">
            {/* Text Content */}
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -100 }}
              transition={{ duration: 0.5 }}
              className=" container space-y-7 text-center sm:text-left text-dark order-2 sm:order-1"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-snug">
                Marriage is two people becoming one, but the struggle is in deciding which one
              </h1>
              <p className="text-lg text-cyan-800">
                Get your Perfect Partner With us
              </p>
              {/* Primary Button */}
              <div>
                <button
                  className="flex justify-center items-center bg-secondary text-sm sm:text-base text-white px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-md hover:scale-105 duration-200"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Get Started
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="order-1 sm:order-2 flex justify-center"
            >
              <img
                src={mainPic}
                alt="Main Illustration"
                className="w-[300px] sm:w-[400px] lg:w-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
