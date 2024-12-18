import React from 'react';
import about from '../assets/About.jpg'


const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Saptjanm</h2>
          <p className="text-lg text-gray-600">
            Redefining relationships with trust and care.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={about}
              alt="About Saptjanm"
              className="rounded-lg shadow-lg w-[400px] h-[600px]"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-gray-700 text-lg">
            <p className="mb-4">
              Saptjanm is more than just a company—it’s a journey of building
              lifelong connections. With a foundation rooted in trust, care, and
              values, we aim to redefine relationships. Our mission is to bring
              people together, fostering meaningful interactions that stand the
              test of time.
            </p>
            <p className="mb-4">
              Whether it's building partnerships, helping individuals find their
              perfect match, or providing tools for better communication,
              Saptjanm is committed to being a pillar of support in every step of
              your journey.
            </p>
            <p>
              Join us in celebrating the essence of human connection. At
              Saptjanm, every relationship begins with a promise—a promise of
              care, respect, and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
