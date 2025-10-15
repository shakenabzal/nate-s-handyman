'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Home() {
  const reviews = [
    { name: 'Alex Johnson', text: 'Nate fixed my kitchen sink quickly and professionally. Highly recommend!' },
    { name: 'Samantha Lee', text: 'Excellent service! He painted my living room flawlessly.' },
    { name: 'Michael Brown', text: 'Reliable, punctual, and very skilled. Will hire again for home repairs.' },
    { name: 'Olivia Davis', text: 'He repaired my fence and even gave great advice on maintenance. Amazing!' },
    { name: 'David Wilson', text: 'Top-notch handyman service. Very trustworthy and efficient.' },
  ];

  return (
    <div className="font-sans text-gray-800">

<header className="fixed w-full z-20 top-0 left-0 backdrop-blur-sm bg-white/70 shadow-md">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
    
    {/* Logo + Company Name */}
    <div className="flex items-center gap-4">
      <Image
        src="/images/logo.png"
        alt="Nate's Handyman Logo"
        width={50}
        height={50}
        className="object-contain"
      />
      <h1 className="text-2xl md:text-3xl font-bold oblique text-blue-700 hover:text-blue-800 transition">
        Nate’s Handyman Service
      </h1>
    </div>

    {/* Phone Button */}
    <a
      href="tel:+16302596403"
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
    >
      <Phone className="w-5 h-5" />
      630 259 64 03
    </a>

  </div>
</header>


      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1470"
          alt="Handyman truck"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 oblique">Reliable Partner in everyday maintenance of your House</h1>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&q=80&w=1470"
                alt="General Handyman Services"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">General Handyman</h3>
              <p>From small repairs to large projects, we've got you covered.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1469"
                alt="Electrical Services"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Electrical Services</h3>
              <p>Safe and efficient electrical solutions for your home.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&q=80&w=1374"
                alt="Plumbing Services"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Plumbing Services</h3>
              <p>Expert plumbing repairs and installations.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">What Our Clients Say</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <p className="italic">“{review.text}”</p>
                <p className="mt-2 font-semibold">– {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">Contact Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Nate's Handyman Service</h4>
            <p>Your trusted handyman for plumbing, electrical, painting, and general repairs. Quality service guaranteed.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Phone: <a href="tel:+16302596403" className="text-blue-400">630 259 64 03</a></p>
            <p>Email: <a href="mailto:prohandyman92@gmail.com" className="text-blue-400">prohandyman92@gmail.com</a></p>
          
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm">
          © {new Date().getFullYear()} Nate's Handyman Service. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
