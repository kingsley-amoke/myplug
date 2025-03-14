import Head from "next/head";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | MyPlug</title>
        <meta name="description" content="MyPlug Terms and Conditions" />
      </Head>

      <div className="min-h-screen  py-10 px-6 md:px-20">
        <div className="max-w-3xl mx-auto  p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Terms & Conditions</h1>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">Introduction</h2>
            <p className=" mt-2">
              MyPlug ("we," "us," or "our") provides a marketplace and service
              providers app (the "App") that connects customers with service
              providers. These Terms and Conditions ("Terms") govern your use of
              the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">Definitions</h2>
            <ul className="list-disc ml-6  mt-2">
              <li>
                <strong>App:</strong> The MyPlug marketplace and service
                providers app.
              </li>
              <li>
                <strong>User:</strong> Any individual using the App.
              </li>
              <li>
                <strong>Customer:</strong> A User who requests services through
                the App.
              </li>
              <li>
                <strong>Service Provider:</strong> A User who offers services
                through the App.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">User Agreement</h2>
            <ul className="list-decimal ml-6  mt-2">
              <li>By using the App, you agree to these Terms.</li>
              <li>You must be at least 18 years old to use the App.</li>
              <li>
                You warrant that you have the authority to enter into these
                Terms.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">Payment Terms</h2>
            <ul className="list-decimal ml-6  mt-2">
              <li>
                Customers must pay for services through the App's payment
                system.
              </li>
              <li>
                Service Providers will receive payment for their services
                through the App's payment system.
              </li>
              <li>MyPlug may charge a commission fee for each transaction.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">
              Cancellation and Refund Policy
            </h2>
            <ul className="list-decimal ml-6  mt-2">
              <li>
                Customers may cancel a service request at any time before the
                service is completed.
              </li>
              <li>
                Service Providers may cancel a service request at any time
                before the service is completed.
              </li>
              <li>
                Refunds will be processed in accordance with MyPlug's refund
                policy.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">Governing Law</h2>
            <p className=" mt-2">
              These Terms shall be governed by and construed in accordance with
              the laws of the Federal Republic of Nigeria.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2">
              If you have any questions, please contact us at:
            </p>
            <p className="">
              <strong>Email:</strong> connect@myplugmobile.com
            </p>
            <p className="">
              <strong>Phone:</strong> +2347017663503
            </p>
            <p className="">
              <strong>Address:</strong> 81 Agwangede Extension, Kuje, Abuja.
            </p>
          </section>

          <p className=" text-sm mt-6">Last Updated: December 31, 2024</p>
        </div>
      </div>
    </>
  );
};

export default Terms;
