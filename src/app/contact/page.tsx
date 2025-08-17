'use client';
import { useState } from 'react';
import Link from 'next/link';
import { cookie } from '../styles/font/page';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setSuccess(false);

    const { name, email, message } = form;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Your message has been sent successfully!');
        setSuccess(true);
      } else {
        setStatus(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setForm({ name: '', email: '', message: '' });
    setStatus('');
    setSuccess(false);
  };

  return (
    <main>
      {/* Header Image Section */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden">
        <img
          src="/images/aboutMassage.jpg"
          alt="Massage Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/30 px-4">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${cookie.className} text-center`}>
            Contact Us
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className={`px-4 ${cookie.className} mt-2 text-center text-2xl mx-auto sm:text-3xl`}>
        Fill in the form below to send us an email.
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-6">
          <div className="w-10 h-10 border-4 border-[#405d3f] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Success Message with Reset Option */}
      {!loading && success && (
        <div className="flex flex-col justify-center items-center mt-6 space-y-4">
          <p className="text-center text-green-700 font-semibold">{status}</p>
          <button
            onClick={handleResetForm}
            className="bg-[#405d3f] text-white font-semibold px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#2e4c2d] transition"
          >
            Send Another Message
          </button>
        </div>
      )}

      {/* Contact Form */}
      {!loading && !success && (
        <form onSubmit={handleSubmit} className="mt-2 space-y-4 max-w-xl mx-auto px-4 sm:px-0">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="Name"
            className="w-full py-2 px-4 bg-[#a5d1ac] text-black rounded-full 
              transition-all duration-500 ease-in-out 
              focus:outline-none focus:ring-2 focus:ring-[#2c3e50] hover:focus:ring-[#e7d882]"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
            className="w-full py-2 px-4 bg-[#a5d1ac] text-black rounded-full 
              transition-all duration-500 ease-in-out 
              focus:outline-none focus:ring-2 focus:ring-[#2c3e50] hover:focus:ring-[#e7d882]"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full py-4 px-4 bg-[#a5d1ac] text-black rounded-3xl h-32 
              resize-none transition-all duration-500 ease-in-out 
              focus:outline-none focus:ring-2 focus:ring-[#2c3e50] hover:focus:ring-[#e7d882]"
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#405d3f] text-white font-semibold px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#2e4c2d] w-full max-w-xs sm:max-w-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
          {status && <p className="text-center text-sm text-red-700">{status}</p>}
        </form>
      )}

      {/* Contact Alternatives */}
      <div className="flex justify-center items-center mb-2 mt-4 px-4">
        <div className={`${cookie.className} text-center text-xl sm:text-2xl md:text-xl max-w-3xl lg:text-3xl`}>
          If you do not have an email or can not use the form, please contact us on{' '}
          <Link
            className="hover:underline text-[#1676f2] hover:decoration-[#1676f2]"
            href="https://www.facebook.com/SherayahMBM"
          >
            Facebook,
          </Link>{' '}
          <Link
            href="https://www.whatsapp.com/"
            className="text-[#3dc14c] hover:underline hover:decoration-[#3dc14c]"
          >
            WhatsApp
          </Link>{' '}
          or call us at{' '}
          <Link
            href="tel:7215862966"
            className="text-[#405d3f] hover:underline hover:decoration-[#405d3f]"
          >
            721 586 2966
          </Link>
        </div>
      </div>
    </main>
  );
}
