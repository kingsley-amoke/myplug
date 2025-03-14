import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Privacy Policy</h1>
        <p className="mb-4">
          MyPlug ("we," "us," or "our") provides a marketplace and service
          provider app (the "App") that connects customers with service
          providers. This Privacy Policy explains how we collect, use, share,
          and protect personal information through the App.
        </p>
        <h2 className="text-lg font-bold mt-6">INFORMATION WE COLLECT</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Personal Information: name, email address, phone number, and
            physical address.
          </li>
          <li>
            Device Information: device type, operating system, and location
            data.
          </li>
          <li>
            Service Provider Information: business name, address, phone number,
            and services offered.
          </li>
          <li>
            Transaction Information: payment information, service details, and
            transaction history.
          </li>
        </ul>
        <h2 className="text-lg font-bold mt-6">HOW WE COLLECT INFORMATION</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Directly from users through the App, website, or customer support.
          </li>
          <li>
            Automatically through the App, including device and location data.
          </li>
          <li>
            From third-party partners, such as payment processors and social
            media platforms.
          </li>
        </ul>
        <h2 className="text-lg font-bold mt-6">HOW WE USE INFORMATION</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Provide and improve the App's services.</li>
          <li>Enhance user experience.</li>
          <li>Offer customer support.</li>
          <li>Conduct research and analytics.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <h2 className="text-lg font-bold mt-6">SHARING INFORMATION</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Authorized service providers.</li>
          <li>Law enforcement agencies (with valid legal requests).</li>
          <li>Third-party partners (for research or analytics).</li>
          <li>Service Providers (to facilitate transactions).</li>
        </ul>
        <h2 className="text-lg font-bold mt-6">SECURITY MEASURES</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Encryption.</li>
          <li>Secure servers.</li>
          <li>Firewalls.</li>
          <li>Access controls.</li>
        </ul>
        <h2 className="text-lg font-bold mt-6">CONTACT US</h2>
        <p className="mt-2">For questions or concerns, please contact:</p>
        <p className="mt-2 font-semibold">MyPlug Mobile App</p>
        <p>81 Agwangede Extension, Kuje, Abuja.</p>
        <p>Email: connect@myplugmobile.com</p>
        <p>Phone: +2347017663503</p>
        <p className="mt-6 font-bold">Last Updated: 31 December 2024</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
