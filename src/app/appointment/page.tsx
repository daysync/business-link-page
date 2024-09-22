import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  Scissors,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const Logo = () => (
  <div className="flex items-center">
    <Scissors className="text-white mr-2" size={24} />
    <span className="text-white text-2xl font-bold">Number1</span>
  </div>
);

const BeautyLinkLogo = () => (
  <div className="flex items-center">
    <Smartphone className="text-[#016A70] mr-2" size={24} />
    <span className="text-[#016A70] text-2xl font-bold">BeautyLink</span>
  </div>
);

const MasterList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      { name: "John Doe", role: "Master Barber" },
      { name: "Mike Smith", role: "Beard Specialist" },
      { name: "Tom Johnson", role: "Hair Stylist" },
      { name: "Chris Brown", role: "Apprentice Barber" },
    ].map((master, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#f0f0f0]"
      >
        <Image
          src={`/api/placeholder/150/150`}
          alt={master.name}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-center text-[#333333]">
          {master.name}
        </h3>
        <p className="text-[#666666] text-center">{master.role}</p>
      </div>
    ))}
  </div>
);

const ServiceList = () => (
  <ul className="space-y-4">
    {[
      {
        name: "Classic Haircut",
        description: "Precision cut and style",
        price: 30,
      },
      {
        name: "Beard Trim",
        description: "Shape and groom your beard",
        price: 20,
      },
      {
        name: "Hot Towel Shave",
        description: "Traditional straight razor shave",
        price: 35,
      },
      {
        name: "Hair & Beard Combo",
        description: "Complete grooming package",
        price: 50,
      },
    ].map((service, index) => (
      <li
        key={index}
        className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center hover:bg-[#f0f0f0] transition-all duration-300"
      >
        <div>
          <h3 className="text-xl font-semibold text-[#333333]">
            {service.name}
          </h3>
          <p className="text-[#666666]">{service.description}</p>
        </div>
        <p className="text-2xl font-bold text-[#333333]">${service.price}</p>
      </li>
    ))}
  </ul>
);

const ReviewList = () => (
  <div className="space-y-6">
    {[
      {
        title: "Great Haircut!",
        content:
          "John gave me the best haircut I've had in years. Booking through BeautyLink was so easy!",
        author: "Mike T.",
        rating: 5,
      },
      {
        title: "Excellent Beard Trim",
        content:
          "Mike really knows how to shape a beard. The BeautyLink app reminders were helpful!",
        author: "Steve R.",
        rating: 5,
      },
      {
        title: "Professional and Quick",
        content:
          "In and out in no time, but still got a top-notch cut. Love the digital queue feature!",
        author: "Alex D.",
        rating: 4,
      },
    ].map((review, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md hover:bg-[#f0f0f0] transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-[#333333] mb-2">
          {review.title}
        </h3>
        <p className="text-[#666666] mb-4">{review.content}</p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
          <span className="text-[#666666]">by {review.author}</span>
        </div>
      </div>
    ))}
  </div>
);

const AppointmentPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "ProximaNova-Regular", color: "#333333" }}
    >
      <header
        className="bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('/api/placeholder/1600/500')" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            <BeautyLinkLogo />
          </div>
          <h1 className="text-5xl font-bold mt-8 mb-4">Number1 Barbershop</h1>
          <p className="text-xl mb-8">
            Where style meets tradition. Get the perfect cut, every time.
          </p>
          <button className="bg-[#016A70] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#015960] transition-colors duration-300">
            Book Now with BeautyLink
          </button>
        </div>
      </header>

      <nav className="bg-[#333333] text-white py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#" className="hover:text-[#f0f0f0]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f0f0f0]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f0f0f0]">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f0f0f0]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Number1 Barbershop
          </h2>
          <p className="max-w-2xl mx-auto text-[#666666] mb-8">
            At Number1, we blend classic barbering techniques with modern styles
            to give you the perfect look. Our skilled barbers are dedicated to
            providing top-notch cuts, trims, and shaves in a friendly, relaxed
            atmosphere. Step into our shop and experience the difference that
            comes with being Number1.
          </p>
          <div className="bg-[#f0f8f8] p-6 rounded-lg inline-block">
            <BeautyLinkLogo />
            <p className="text-[#016A70] font-semibold mt-2">
              Sync your appointments in Digital way
            </p>
            <p className="text-[#666666] mt-2">
              Experience seamless booking with our digital platform
            </p>
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Location &amp; Hours</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="text-[#333333] mr-2" />
                <p>
                  123 Barber Street
                  <br />
                  Styleville, ST 12345
                  <br />
                  United States
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="text-[#333333] mr-2 mt-1" />
                <ul className="space-y-2">
                  <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                  <li>Saturday: 8:00 AM - 5:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                Choose a date and time for your next great haircut:
              </p>
              <Calendar className="w-full h-64 text-[#333333]" />
              <button className="mt-4 bg-[#016A70] text-white py-2 px-4 rounded-lg hover:bg-[#015960] transition-colors duration-300 flex items-center justify-center w-full">
                <Smartphone className="mr-2" size={18} />
                Book with BeautyLink
              </button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((work) => (
              <div
                key={work}
                className="bg-white p-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={`/api/placeholder/300/200`}
                  alt={`Haircut Style ${work}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Style {work}</h3>
                <p className="text-[#666666]">
                  Classic cut with a modern twist
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Barbers</h2>
          <MasterList />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <ServiceList />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Client Reviews</h2>
          <ReviewList />
        </section>
      </main>

      <footer className="bg-[#333333] text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-2">Your Number1 choice for style and grooming.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#f0f0f0]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0f0f0]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0f0f0]">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0f0f0]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2" size={18} /> (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={18} /> info@number1barbershop.com
              </li>
            </ul>
            <div className="mt-4">
              <BeautyLinkLogo />
              <p className="text-sm mt-1">Powered by BeautyLink</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-4 border-t border-white/20 text-center">
          <p>&copy; 2024 Number1 Barbershop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppointmentPage;
