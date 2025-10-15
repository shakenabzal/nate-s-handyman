'use client';

import { Phone, ToolCase, CheckCircle, ShieldCheck, Calendar, Users, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-semibold italic text-blue-700">Nate's Handyman Service</h1>
        <a href="tel:+11234567890" className="flex items-center gap-2 text-blue-600 font-medium">
          <Phone className="w-5 h-5" /> (123) 456-7890
        </a>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 bg-[url('/nates-truck.jpg')] bg-cover bg-center text-white bg-blend-overlay bg-black/50">
        <h2 className="text-5xl font-bold mb-4">Reliable Repairs. Honest Service.</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          From plumbing to painting, we fix it all. Trusted by homeowners for quality craftsmanship.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Get a Free Estimate
        </a>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <ToolCase className="mx-auto w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">All-in-One Repairs</h3>
          <p>Plumbing, electrical, drywall, painting, flooring — one call fixes it all.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <ShieldCheck className="mx-auto w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
          <p>Your home deserves care. We’re fully insured and quality-driven.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <CheckCircle className="mx-auto w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
          <p>No shortcuts. No surprises. Just honest work and clean results.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-700 text-white py-16 text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">Request Your Free Quote</h3>
        <p className="mb-8">Tell us what you need done — we’ll get back to you within 24 hours.</p>
        <form
          className="max-w-xl mx-auto bg-white rounded-2xl p-6 text-gray-800 space-y-4 shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted! (Hook up Formspree or EmailJS later)');
          }}
        >
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" required />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" required />
          <textarea
            placeholder="How can we help you?"
            rows={4}
            className="w-full border p-3 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold transition"
          >
            Send Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Nate's Handyman Service · All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <MapPin className="w-4 h-4" /> Roselle, Illinois
        </div>
      </footer>
    </main>
  );
}

