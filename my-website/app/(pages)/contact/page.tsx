'use client';

import React, { useState } from 'react';
import Footer from '@/components/ui/footer';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contactapi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('Failed to send. Try again.');
    }
  };

  return (
    <>
      <div className="flex flex-col mx-6 md:mx-40 min-h-[calc(100vh-148px)] justify-center">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl bg-black/50 p-4 md:p-6 text-center font-bold text-foreground text-shadow-xl rounded-2xl mb-10">
          Get in touch
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/50 text-foreground rounded-2xl p-6 md:p-10 shadow-lg space-y-6 w-full"
        >
          <div>
            <label className="block text-lg md:text-xl font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
          </div>
          <div>
            <label className="block text-lg md:text-xl font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
          </div>
          <div>
            <label className="block text-lg md:text-xl font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/60"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary/80 hover:bg-muted transition text-white py-2 px-8 rounded-xl font-semibold text-lg cursor-pointer"
            >
              Send Message
            </button>
          </div>
          {status && (
            <p className="text-center text-base mt-4 text-foreground rounded-lg p-2">
              {status}
            </p>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
