
import logo from './assets/logo.jpg';
import truck from './assets/truck.jpg';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header & Navigation */}
      <header className="bg-white shadow flex items-center px-6 py-4">
        <img src={logo} alt="Wallis Trucking Logo" className="h-12 w-12 rounded-lg mr-3" />
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">Wallis Trucking</h1>
        <nav className="ml-auto space-x-6 text-gray-600 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#careers" className="hover:text-blue-600">Careers</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-blue-900 text-white" id="hero">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-4xl font-extrabold mb-4">Delivering Excellence in Transportation</h2>
            <p className="mb-6 text-lg">
              Reliable. Professional. Safe. Serving your logistics and freight needs across the nation.
            </p>
            <a
              href="#careers"
              className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
            >
              Apply Now
            </a>
          </div>
          <img
            src={truck}
            alt="Wallis Trucking Rig"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
        </section>

        {/* About Section */}
        <section id="about" className="px-8 py-16 bg-white flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">About Wallis Trucking</h3>
            <p className="mb-4 text-gray-700">
              Wallis Trucking is your trusted partner in logistics and transportation. With decades of experience, a modern fleet, and a dedicated team, we make sure your goods arrive safely and on time—every time.
            </p>
            <p className="text-gray-600">
              We pride ourselves on integrity, reliability, and building lasting relationships with our clients and drivers.
            </p>
          </div>
          <img src={logo} alt="Wallis Trucking" className="w-32 h-32 rounded-full border-4 border-blue-900" />
        </section>

        {/* Services Section */}
        <section id="services" className="px-8 py-16 bg-gray-100">
          <h3 className="text-2xl font-bold mb-8 text-blue-900 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Long-Haul Trucking</h4>
              <p className="text-gray-600">Safe, efficient delivery of freight across state lines and the country.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Local Deliveries</h4>
              <p className="text-gray-600">Flexible and reliable service for local businesses and logistics needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Freight Management</h4>
              <p className="text-gray-600">Expert coordination and oversight for your entire shipping process.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Logistics Consulting</h4>
              <p className="text-gray-600">Strategic advice to optimize your supply chain and logistics costs.</p>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="px-8 py-16 bg-white text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Careers at Wallis Trucking</h3>
          <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
            We're always seeking skilled drivers and logistics professionals to join our growing team.
            If you’re passionate about safety, service, and professionalism, we want to hear from you!
          </p>
          <a
            href="mailto:wallis1@wallistrucking.com?subject=Job Application"
            className="inline-block bg-blue-900 text-white font-bold px-8 py-3 rounded-xl shadow hover:bg-blue-800 transition"
          >
            Apply Now
          </a>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-8 py-16 bg-gray-100 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Contact Us</h3>
          <p className="mb-6 text-gray-700">Have a question or need a quote? We’re here to help.</p>
          <form className="w-full max-w-md bg-white p-8 rounded-xl shadow">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows={4}
                placeholder="How can we help?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-3 rounded-xl shadow hover:bg-blue-800 transition"
              onClick={e => {e.preventDefault(); alert("Thanks for reaching out! We’ll be in touch soon.");}}
            >
              Send Message
            </button>
          </form>
          <p className="mt-6 text-gray-500">
            Or email us directly: <a href="mailto:wallis1@wallistrucking.com" className="text-blue-700 underline">wallis1@wallistrucking.com</a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Wallis Trucking. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
