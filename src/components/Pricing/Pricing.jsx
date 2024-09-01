import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-green-300">
                        <h3 className="text-2xl font-bold mb-4 text-black">Basic</h3>
                        <p className="text-green-600 text-5xl font-semibold mb-4">$19<span className="text-base font-medium text-gray-500">/month</span></p>
                        <ul className="mb-6 text-gray-600 space-y-4">
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 10 Projects</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 100 GB Storage</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Basic Support</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 10 calls per month</li>
                        </ul>
                        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition-colors transform hover:scale-105">Get Started</button>
                    </div>

                    {/* Standard Plan */}
                    <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-green-300">
                        <h3 className="text-2xl font-bold mb-4 text-black">Standard</h3>
                        <p className="text-green-600 text-5xl font-semibold mb-4">$49<span className="text-base font-medium text-gray-500">/month</span></p>
                        <ul className="mb-6 text-gray-600 space-y-4">
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 50 Projects</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 500 GB Storage</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Priority Support</li>
                            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 50 calls per month</li>
                        </ul>
                        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition-colors transform hover:scale-105">Get Started</button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-gradient-to-t from-green-600 to-green-400 border border-green-700 shadow-lg p-6 rounded-lg text-white transition-transform transform hover:scale-105 hover:shadow-xl hover:border-green-500">
                        <h3 className="text-2xl font-bold mb-4">Premium</h3>
                        <p className="text-5xl font-semibold mb-4">$99<span className="text-base font-medium">/month</span></p>
                        <ul className="mb-6 space-y-4">
                            <li className="flex items-center"><FaCheckCircle className="text-white mr-2" /> Unlimited Projects</li>
                            <li className="flex items-center"><FaCheckCircle className="text-white mr-2" /> 1 TB Storage</li>
                            <li className="flex items-center"><FaCheckCircle className="text-white mr-2" /> 24/7 Support</li>
                            <li className="flex items-center"><FaCheckCircle className="text-white mr-2" /> Unlimited calls</li>
                            <li className="flex items-center"><FaCheckCircle className="text-white mr-2" /> Free Custom Domain</li>
                            <li className="flex items-center"><FaCheckCircle className="text-white mr-2" /> Free Setup</li>
                            <li className="flex items-center"><FaCheckCircle className="text-white mr-2" /> Free SSL Certificate</li>
                        </ul>
                        <button className="w-full px-4 py-2 bg-white text-green-600 rounded-lg border border-green-700 shadow hover:bg-gray-100 transition-colors transform hover:scale-105">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
