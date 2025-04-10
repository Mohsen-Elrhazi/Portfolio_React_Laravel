import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="grid grid-cols-[2fr_1fr] gap-1 my-10 p-10 w-[calc(100%-20rem)] m-auto">
      <div className="container">
        <div className="max-w-2xl bg-white p-4 rounded-md shadow-xl m-auto">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Contact Us
            </h1>
            <p className="text-gray-400 dark:text-gray-400">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit} className="needs-validation">
              {/* Form fields */}
              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#ff7e00]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#ff7e00]"
                  />
                </div>
              </div>

              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#ff7e00]"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="phone"
                    className="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+1 (555) 1234-567"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#ff7e00]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#ff7e00]"
                ></textarea>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-3 rounded-md text-white font-semibold bg-[#ff7e00] focus:outline-none focus:ring-2 focus:ring-[#ff7e00] focus:ring-opacity-50 hover:bg-[#ff7e00] active:bg-[#e66e00] transition-transform transform hover:translate-y-[-2px] duration-100 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#ff7e00] to-[#ff9e33] p-6 rounded-md shadow-md h-[70%] w-full m-auto text-white -ml-10">
        <h2 className="text-xl text-center font-semibold mb-4">
          mes Informations
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="material-icons text-white mr-3">Residence</span>
            <span>Youssofia</span>
          </li>
          <li className="flex items-center">
            <span className="material-icons text-white mr-3">phone</span>
            <span>+1 (555) 123-4567</span>
          </li>
          <li className="flex items-center">
            <span className="material-icons text-white mr-3">email</span>
            <span>contact@company.com</span>
          </li>
          <li className="flex justify-evenly items-center ">
            <Link
              to="#"
              className="hover:scale-110 transition-transform duration-300 "
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
            <Link
              to="#"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link
              to="#"
              className="hover:scale-110  transition-transform duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
