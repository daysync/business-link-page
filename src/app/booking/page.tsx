import Head from "next/head";

const BookingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Booking | DaySync</title>
      </Head>

      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="h-10 w-10 text-blue-500 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <h1 className="text-2xl font-bold">DaySync</h1>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
            Book Now
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Location</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">{/* Map iframe */}</div>
          <p className="text-gray-600">123 Main St, City, Country</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Open in Google Maps
          </a>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <img
              src="/path/to/hairstylist.jpg"
              alt="Hairstylist"
              className="w-32 h-32 rounded-full mr-6"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2">About John Doe</h2>
              <p className="text-lg text-gray-600">Professional Hairstylist</p>
            </div>
          </div>
          <ul className="list-disc list-inside mb-6">
            <li>10+ years of experience</li>
            <li>Specialized in stunning hairstyles for any occasion</li>
            <li>Keen eye for detail and personalized services</li>
          </ul>
          <h3 className="text-2xl font-bold mb-4">Services Offered</h3>
          <ul className="grid grid-cols-2 gap-4">
            <li>Haircuts</li>
            <li>Color and Highlights</li>
            <li>Balayage</li>
            <li>Hair Extensions</li>
            <li>Styling and Updos</li>
            <li>Keratin Treatments</li>
          </ul>
          <div className="mt-8">
            <p className="text-xl font-semibold mb-2">Customer Reviews</p>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-yellow-400 fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-gray-600">4.8 (123 reviews)</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
          <div className="max-w-lg mx-auto">
            {/* Step 1: Service Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Select a Service</h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="color">Color and Highlights</option>
                    <option value="styling">Styling and Updos</option>
                    {/* Add more service options */}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Date and Time Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Select Date and Time</h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Booking Confirmation */}
            <div>
              <h3 className="text-xl font-bold mb-4">Booking Confirmation</h3>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p className="text-gray-700">
                  <strong>Service:</strong> Haircut
                </p>
                <p className="text-gray-700">
                  <strong>Date:</strong> June 10, 2023
                </p>
                <p className="text-gray-700">
                  <strong>Time:</strong> 10:00 AM
                </p>
                <p className="text-gray-700">
                  <strong>Name:</strong> John Doe
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> johndoe@example.com
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> 123-456-7890
                </p>
              </div>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
                Confirm Booking
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <p className="text-gray-600">
              &copy; 2024 DaySync. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
          <div className="flex">
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
