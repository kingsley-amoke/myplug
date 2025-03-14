import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>
      <p className="mb-4">
        MyPlug is a platform that connects customers with independent service
        providers. By using our app, you acknowledge that you have read,
        understood, and agree to be bound by this disclaimer.
      </p>
      <h2 className="text-xl font-semibold mt-6">Limitation of Liability</h2>
      <p className="mb-4">
        MyPlug is not responsible for any damages, losses, or injuries that may
        arise from the use of our platform or the services provided by our
        service providers. We do not guarantee the quality, safety, or
        suitability of the services provided by our service providers.
      </p>
      <h2 className="text-xl font-semibold mt-6">No Warranty</h2>
      <p className="mb-4">
        Our platform and the services provided by our service providers are
        provided on an "as is" and "as available" basis. We disclaim all
        warranties, express or implied, including but not limited to the implied
        warranties of merchantability, fitness for a particular purpose, and
        non-infringement.
      </p>
      <h2 className="text-xl font-semibold mt-6">Assumption of Risk</h2>
      <p className="mb-4">
        By using our platform, you assume all risks associated with the use of
        our platform and the services provided by our service providers. You
        acknowledge that you are responsible for your own actions and decisions,
        and that MyPlug is not responsible for any consequences that may arise
        from your use of our platform.
      </p>
      <h2 className="text-xl font-semibold mt-6">Release of Liability</h2>
      <p className="mb-4">
        You release MyPlug, its officers, directors, employees, agents, and
        affiliates from any and all claims, demands, or causes of action that
        you may have arising from your use of our platform or the services
        provided by our service providers.
      </p>
      <h2 className="text-xl font-semibold mt-6">Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify and hold harmless MyPlug, its officers,
        directors, employees, agents, and affiliates from any and all claims,
        demands, or causes of action that may arise from your use of our
        platform or the services provided by our service providers.
      </p>
      <h2 className="text-xl font-semibold mt-6">Governing Law</h2>
      <p className="mb-4">
        This disclaimer shall be governed by and construed in accordance with
        the laws of the Federal Republic of Nigeria and other relevant
        jurisdictions where MyPlug is used. Any disputes arising from this
        disclaimer shall be resolved through binding arbitration in accordance
        with the rules of the International Chamber of Commerce (ICC) Court of
        Arbitration and the International Centre for Dispute Resolution (ICDR).
      </p>
      <h2 className="text-xl font-semibold mt-6">Changes to Disclaimer</h2>
      <p className="mb-4">
        We reserve the right to modify or update this disclaimer at any time
        without notice. Your continued use of our platform after any changes to
        this disclaimer shall constitute your acceptance of the revised
        disclaimer.
      </p>
      <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this disclaimer, please
        contact us at{" "}
        <a href="mailto:contact@myplug.com" className="text-blue-600">
          contact@myplug.com
        </a>{" "}
        or call
        <a href="tel:+2347017663503" className="text-blue-600">
          {" "}
          +2347017663503
        </a>
        .
      </p>
      <p className="mt-6 font-semibold">Last Updated: 30th December, 2024</p>
    </div>
  );
};

export default Disclaimer;
