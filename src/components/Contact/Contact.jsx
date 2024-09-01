import React from 'react';
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-300">
                            <h3 className="text-3xl font-bold mb-4 text-gray-800">Contact Information</h3>
                            <p className="mb-6 text-gray-700 text-lg">If you have any questions, feel free to reach out to us through any of the following methods.</p>
                            <ul className="text-gray-800 text-lg">
                                <li className="mb-3 flex items-center">
                                    <IoMdCall className="text-green-700 text-3xl mr-3" />
                                    <span className="font-semibold px-2">Phone:</span> 123-456-7890
                                </li>
                                <li className="mb-3 flex items-center">
                                    <MdEmail className="text-green-700 text-3xl mr-3" />
                                    <span className="font-semibold px-2">Email:</span> quantumqr@gmail.com
                                </li>
                                <li className="flex items-center">
                                    <IoLocation className="text-green-700 text-3xl mr-3" />
                                    <span className="font-semibold px-2">Address:</span> 123 Main St, Springfield, IL
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-300">
                            <h3 className="text-3xl font-bold mb-4 text-gray-800">Contact Form</h3>
                            <form className="space-y-6">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-800 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500" placeholder="Your Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500" placeholder="Your Email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-800 mb-2">Message</label>
                                    <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <button className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
