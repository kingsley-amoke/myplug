"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <header className="w-full shadow-md p-4 flex justify-between items-center max-w-5xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">MyPlug</h1>

        {/* Mobile Menu Button */}
        <div className="flex flex-col items-end">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            }  w-full  shadow-md lg:static lg:block lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-4 p-4 lg:p-0">
              <li>
                <Link href="/" className="block py-2 px-4 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="block py-2 px-4 hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="block py-2 px-4 hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-4 hover:text-blue-600"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="text-center mt-10 max-w-3xl">
        <h2 className="text-4xl font-bold ">
          Connecting Job Seekers & Employers, and Enabling E-Commerce
        </h2>
        <p className="mt-4  text-lg">
          Find the perfect job, hire top talent, or buy and sell products—all in
          one place.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </main>

      <section id="features" className="mt-16 w-full max-w-5xl mx-auto">
        <h3 className="text-2xl font-semiboldtext-center">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="border p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold">Job Listings</h4>
            <p className="">Find and apply for jobs easily.</p>
          </div>
          <div className=" p-6 shadow-md rounded-lg text-center border ">
            <h4 className="text-lg font-semibold">Employer Dashboard</h4>
            <p className="">Post jobs and hire the best candidates.</p>
          </div>
          <div className="border p-6 shadow-md rounded-lg text-center">
            <h4 className="text-lg font-semibold">Marketplace</h4>
            <p className="">Buy and sell products securely.</p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mt-16 w-full max-w-3xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold ">Contact Us</h3>
        <p className="mt-4 ">Have questions? Reach out to us.</p>
        <p className="mt-2  font-semibold">Email: connect@myplugmobile.com</p>
        <p className="mt-1  font-semibold">Phone: +2347017663503</p>
      </section>

      <footer className="mt-16 py-4 w-full  text-center  shadow-md">
        &copy; {new Date().getFullYear()} MyPlug. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
