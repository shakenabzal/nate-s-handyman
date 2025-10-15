'use client';

import Image from 'next/image';
import { Phone, Wrench, Hammer, Droplet, Zap, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Nate's Handyman Logo" width={48} height={48} />
            <span className="font-bold text-xl text-gray-800">Nate’s Handyman Services</span>
          </div>

          {/* Phone Number */}
          <a
            href="tel:16302596403"
            className="mt-3 sm:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base sm:text-lg whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold tracking-wide hidden sm:inline">(630) 259-6403</span>
          </a>
        </div>
        <a href="tel:+16302596403" className="flex items-center gap-2 text-blue-600 font-medium">
          <Phone className="w-5 h-5" /> 630 259 64 03
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center mt-[80px]">
        <Image
          src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1470"
          alt="Handyman at work"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 italic">Reliable Handyman Services in Chicago</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Quality repairs, installations, and remodeling — done right, on time, every time.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-white transition transform hover:scale-105 shadow-lg"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100" id="services">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-2">
              <Hammer className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Handyman</h3>
              <p className="text-gray-600">
                From small repairs to large projects, we handle it all with precision and care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-2">
              <Zap className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Electrical Work</h3>
              <p className="text-gray-600">
                Safe, code-compliant wiring, installations, and lighting upgrades for your home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-2">
              <Droplet className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Plumbing Services</h3>
              <p className="text-gray-600">
                Fast and reliable plumbing repairs, leak fixes, and fixture installations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="reviews">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition">
              <p className="italic">“They showed up on time, worked fast, and cleaned up perfectly. Highly recommend!”</p>
              <p className="mt-4 font-semibold text-blue-600">– Sarah J., Naperville</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition">
              <p className="italic">“Fixed what three other guys couldn’t. Professional and honest service.”</p>
              <p className="mt-4 font-semibold text-blue-600">– Mike R., Schaumburg</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition">
              <p className="italic">“Quick response, fair pricing, and excellent craftsmanship. Will hire again.”</p>
              <p className="mt-4 font-semibold text-blue-600">– Linda T., Chicago</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold mb-10">Contact Us</h3>
          <p className="text-gray-600 mb-8">
            Tell us what you need fixed or built, and we’ll get back to you with a free estimate within 24 hours.
          </p>
          <form
            action="https://formspree.io/f/xblzqdko"
            method="POST"
            className="space-y-4"
          >
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-lg" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-lg" />
            <textarea name="message" placeholder="Your Message" rows={4} required className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Nate's Logo" width={50} height={50} />
            <p className="font-semibold">Nate’s Handyman Services</p>
          </div>
          <p>© {new Date().getFullYear()} Nate’s Handyman Services. All rights reserved.</p>
          <p>Phone: <a href="tel:+16302596403" className="text-blue-400 hover:underline">630 259 64 03</a></p>
        </div>
      </footer>

    </div>
  );
}
