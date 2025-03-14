import React from "react";
import Link from "next/link";
import { FaDotCircle } from "react-icons/fa";

const About = () => {
  const values = [
    "Quality: We're committed to providing high-quality services that meet our customers' needs",
    "Reliability: We're dedicated to building a platform that's reliable and trustworthy",
    "Convenience: We're passionate about making it easy and convenient for customers to find and book services",
    "Community: We believe in building a community of customers and service providers who support and trust each other",
  ];

  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <header className="w-full shadow-md p-4 max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyPlug</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className=" hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className=" hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-3xl text-center mt-10">
        <h2 className="text-3xl font-bold ">Welcome to MyPlug</h2>
        <p className="mt-4 0">
          MyPlug is a revolutionary service provider and marketplace app that
          connects customers with trusted professionals.
        </p>
      </main>

      <section className="mt-10 max-w-3xl">
        <h3 className="text-2xl font-semibold ">Our Story</h3>
        <p className="mt-2 \">
          We founded MyPlug to bridge the gap between customers and service
          providers, creating a platform for seamless interaction and business
          growth.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h3 className="text-2xl font-semibold">How It Works</h3>
        <p className="mt-2 ">
          Customers can browse and book services in various categories, while
          service providers can showcase their skills and manage bookings
          effortlessly.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h3 className="text-2xl font-semibold ">Our Values</h3>
        <ul className="mt-4  space-y-2">
          {values.map((item, index) => (
            <li key={index} className="flex items-center">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-3xl text-center">
        <h3 className="text-2xl font-semibold ">Join Our Community</h3>
        <p className="mt-2 ">
          Download our app today and experience the convenience of booking
          quality services at your fingertips.
        </p>
      </section>

      <section className="mt-10 max-w-3xl text-center">
        <h3 className="text-2xl font-semibold ">Contact Us</h3>
        <p className="mt-2 ">Have questions or feedback? Reach out to us.</p>
        <p className="mt-2 font-semibold ">Email: connect@myplugmobile.com</p>
        <p className="mt-1 font-semibold ">Phone: +2347017663503</p>
      </section>

      <footer className="mt-16 py-4 w-full  text-center  shadow-md">
        &copy; {new Date().getFullYear()} MyPlug. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
