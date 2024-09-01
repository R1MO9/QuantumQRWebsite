import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">About Us</h2>
                <div className="text-center mb-12">
                    <p className="text-xl text-gray-700 mb-6">
                        At [Your Company Name], we strive to provide the best solutions for all your needs. Our team is dedicated to delivering high-quality service and exceptional support. Discover all the features we offer and how we can help you achieve your goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-black">Our Features</h3>
                        <ul className="text-gray-600 space-y-4">
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> High Performance</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Secure and Reliable</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 24/7 Customer Support</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Scalable Solutions</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> User-Friendly Interface</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Customizable Features</li>
                        </ul>
                    </div>

                    {/* Mission and Vision */}
                    <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-black">Our Mission & Vision</h3>
                        <p className="text-gray-600 mb-6">
                            Our mission is to empower businesses with innovative solutions that drive growth and efficiency. We envision a future where technology enhances every aspect of our lives, and we're committed to making that vision a reality.
                        </p>
                        <p className="text-gray-600">
                            Our values center around integrity, excellence, and collaboration. We believe in building strong relationships with our clients and working together to achieve mutual success.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-700 mb-6">
                        Ready to take your business to the next level? Get started with us today and experience the difference!
                    </p>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition-colors transform hover:scale-105">Get Started</button>
                </div>
            </div>
        </section>
    );
}

export default About;
