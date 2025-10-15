import { Phone, CheckCircle, ShieldCheck, Calendar, Users, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091012181-9e4f1e1e8b0b)' }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Reliable Handyman Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <img src="https://images.pexels.com/photos/3760795/pexels-photo-3760795.jpeg" alt="General Handyman Services" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">General Handyman</h3>
              <p>From small repairs to large projects, we've got you covered.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <img src="https://images.pexels.com/photos/3760795/pexels-photo-3760795.jpeg" alt="Electrical Services" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Electrical Services</h3>
              <p>Safe and efficient electrical solutions for your home.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
              <img src="https://images.pexels.com/photos/3760795/pexels-photo-3760795.jpeg" alt="Plumbing Services" className="w-full h-48 object-cover mb-4 rounded-lg" />
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
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src="https://images.unsplash.com/photo-1581091012181-9e4f1e1e8b0b" alt="Client" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic">“Nate fixed everything quickly and professionally!”</p>
              <p className="mt-2 font-semibold">– John D.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src="https://images.unsplash.com/photo-1581091012181-9e4f1e1e8b0b" alt="Client" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic">“Great service and very reliable!”</p>
              <p className="mt-2 font-semibold">– Sarah W.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img src="https://images.unsplash.com/photo-1581091012181-9e4f1e1e8b0b" alt="Client" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic">“Highly recommend for any home repairs.”</p>
              <p className="mt-2 font-semibold">– Michael T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">Contact Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

