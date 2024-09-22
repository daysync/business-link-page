import Head from "next/head";
import Image from "next/image";

const HairstylistProfile = () => {
  const services = [
    {
      name: "Haircut",
      duration: "30 m.",
      price: 100,
      image: "https://picsum.photos/seed/haircut/200/200",
    },
    {
      name: "Haircut + highlights",
      duration: "1h. 30 m.",
      price: 400,
      image: "https://picsum.photos/seed/highlights/200/200",
    },
    {
      name: "Hairstyle",
      duration: "1h",
      price: 200,
      image: "https://picsum.photos/seed/hairstyle/200/200",
    },
    {
      name: "Color treatment",
      duration: "1h. 30 m.",
      price: 400,
      image: "https://picsum.photos/seed/color/200/200",
    },
    {
      name: "Hair extensions",
      duration: "2h",
      price: 500,
      image: "https://picsum.photos/seed/extensions/200/200",
    },
    {
      name: "Keratin treatment",
      duration: "2h",
      price: 600,
      image: "https://picsum.photos/seed/keratin/200/200",
    },
    {
      name: "Bridal hairstyle",
      duration: "2h",
      price: 700,
      image: "https://picsum.photos/seed/bridal/200/200",
    },
  ];

  const workingHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Jenny is amazing! Best haircut I've ever had.",
    },
    {
      id: 2,
      name: "Mike L.",
      rating: 4,
      comment: "Great service, very professional.",
    },
    {
      id: 3,
      name: "Emma W.",
      rating: 5,
      comment: "Love my new hair color! Jenny is a true artist.",
    },
  ];

  return (
    <div className="min-h-screen bg-teal-600">
      <Head>
        <title>Jenny Wilson | DaySync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-0 sm:px-4 py-8 max-w-screen-sm">
        <div className="pt-32">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 z-10">
              <div className="relative">
                <div className="w-32 h-16 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-full"></div>
                <Image
                  src="https://i.pravatar.cc/150?img=47"
                  alt="Jenny Wilson"
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white relative z-10"
                />
              </div>
            </div>

            <main className="bg-white rounded-3xl shadow-lg overflow-hidden pt-20">
              <div className="flex flex-col items-center mb-6 p-4 sm:p-6">
                <h1 className="text-2xl font-bold mb-1">Jenny Wilson</h1>
                <p className="text-purple-600 mb-2">
                  Hairstyle, make-up and brow master
                </p>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9 (128 reviews)</span>
                </div>
                <p className="text-gray-500 text-center mb-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
                <div className="flex space-x-4 mb-4">
                  <button className="p-2 border border-gray-300 rounded-lg">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </button>
                </div>
                <div className="w-full space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>+38 099 999 99 99</span>
                    </div>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
                      Call
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm">
                        1901 Thornridge Cir. Shiloh, Hawaii 81063
                      </span>
                    </div>
                    <button className="text-teal-600 underline">
                      Directions
                    </button>
                  </div>
                </div>
              </div>

              <section className="mb-8 px-4 sm:px-6">
                <h2 className="text-xl font-bold mb-4">Working Hours</h2>
                <div className="grid grid-cols-2 gap-2">
                  {workingHours.map((day) => (
                    <div key={day.day} className="flex justify-between">
                      <span className="font-medium">{day.day}</span>
                      <span className="text-gray-600">{day.hours}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8 px-4 sm:px-6">
                <h2 className="text-xl font-bold mb-4">Portfolio</h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden"
                    >
                      <Image
                        src={`https://picsum.photos/seed/portfolio${item}/300/300`}
                        alt={`Portfolio ${item}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-2 left-2 text-white text-sm">
                        Album name
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8 px-4 sm:px-6">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={50}
                          height={50}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{service.name}</h3>
                          <p className="text-gray-500 text-sm">
                            {service.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">{service.price} €</span>
                        <div className="w-6 h-6 bg-teal-600 rounded-md flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8 px-4 sm:px-6">
                <h2 className="text-xl font-bold mb-4">Client Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-4"
                    >
                      <div className="flex items-center mb-2">
                        <Image
                          src={`https://i.pravatar.cc/40?u=${review.id}`}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <span className="font-semibold mr-2">
                            {review.name}
                          </span>
                          <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-600">
          <div className="text-2xl font-bold text-teal-600 mb-2">
            <span className="text-white">DAYSYNC</span>
          </div>
          <p>&copy; 2024 DaySync. All rights reserved.</p>
          <p>This page was developed with DaySync</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-teal-600 hover:underline">
              Create DaySync Account
            </a>
            <span className="text-teal-600">09:30</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HairstylistProfile;
