'use client';

import Image from 'next/image';
import { Phone, ToolCase, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="Nate's Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold italic text-blue-700">Nate’s Handyman Services</h1>
        </div>
        <a href="tel:+16302596403" className="flex items-center gap-2 text-blue-600 font-medium">
          <Phone className="w-5 h-5" /> 630 259 64 03
        </a>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="rYmGLs9OS6k5DrIlV1GjFA" async></script>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1470"
          alt="Handyman truck"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">Reliable Handyman Services</h1>
          <p className="text-lg mb-6 max-w-xl">From plumbing to painting, we fix it all. Trusted by homeowners for quality craftsmanship.</p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "General Handyman",
                description: "Furniture assembly, wall repairs, painting, and more.",
                image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&q=80&w=1470",
                icon: <ToolCase className="w-10 h-10 text-blue-600 mb-4" />,
              },
              {
                title: "Electrical Services",
                description: "Safe wiring, lighting installations, and inspections.",
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1469",
                icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />,
              },
              {
                title: "Plumbing Services",
                description: "Leaks, installations, and full bathroom setups.",
                image: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&q=80&w=1374",
                icon: <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />,
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 p-6">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John M.", review: "Amazing handyman! Fixed my bathroom leak quickly." },
              { name: "Sarah L.", review: "Reliable, professional, and affordable. Highly recommend." },
              { name: "David R.", review: "Repaired my electrical wiring flawlessly. Very skilled." },
              { name: "Emily W.", review: "Friendly and punctual. My kitchen looks brand new!" },
              { name: "Michael T.", review: "Fast service and excellent results. Will hire again." },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-2">
                <p className="italic text-center mb-4">“{t.review}”</p>
                <p className="mt-2 font-semibold text-center">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">Contact Us</h3>
          <form
            action="https://formspree.io/f/xblzqdko"
            method="POST"
            className="space-y-4"
          >
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded-lg" rows={4} required></textarea>
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
            <Image src="images/logo.png" alt="Nate's Logo" width={50} height={50} />
            <p className="font-semibold">Nate’s Handyman Services</p>
          </div>
          <p>© {new Date().getFullYear()} Nate’s Handyman Services. All rights reserved.</p>
          <p>Phone: <a href="tel:+16302596403" className="text-blue-400 hover:underline">630 259 64 03</a></p>
        </div>
      </footer>

    </div>
  );
}
