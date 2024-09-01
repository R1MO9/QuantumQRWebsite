import React from 'react';
import { FaCogs, FaUserShield } from 'react-icons/fa'; // Example icons from react-icons

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Our Project</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We are excited to present our innovative attendance tracking system, designed to meet the needs of modern work environments. Our solution integrates cutting-edge technologies to offer a secure and efficient way of managing attendance across diverse settings.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 text-blue-500">
              <FaCogs />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Innovative Technology</h3>
            <p>
              Our project leverages state-of-the-art technology to deliver a seamless and reliable attendance tracking experience. From biometric verification to blockchain security, we ensure every aspect of the system is designed with modern needs in mind.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 text-purple-500">
              <FaUserShield />
            </div>
            <h3 className="text-2xl font-semibold mb-4">User-Centric Design</h3>
            <p>
              Designed with users in mind, our system offers an intuitive interface and flexible features to accommodate various work environments. Whether online or offline, our solution provides a smooth and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
