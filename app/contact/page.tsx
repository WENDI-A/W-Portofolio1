
"use client"; // Required for client interactivity

import React, { useState } from "react";
import IconBadge from '../../components/IconBadge';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      value: "wendiabera660@gmail.com",
      linkText: "Send me an email →",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      href: "mailto:wendiabera660@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone",
      value: "(+251) 979 062 454",
      linkText: "Give me a call →",
      gradient: "bg-green-500",
      href: "tel:+251979062454",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      linkText: "Available for remote work →",
      gradient: "bg-gradient-to-r from-purple-500 to-blue-500",
      href: "https://www.google.com/maps/search/Addis+Ababa,+Ethiopia",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent text-gray-900 dark:text-white px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto motion-safe:animate-pulse">
          <IconBadge size="xl" bgClass="bg-gradient-to-r from-indigo-500 to-purple-500">💬</IconBadge>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4 sm:mt-6">Get In Touch</h1>
        <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          I'm always interested in hearing about new opportunities and projects. Let's connect and discuss how we can collaborate.
        </p>
      </div>

      {/* Contact & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20">
        {/* Contact Info Left */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4">📮 Let's Connect</h2>

          {contactItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${item.title}: ${item.value}`}
              className="group block bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 rounded-2xl p-4 sm:p-6 flex gap-3 sm:gap-4 items-start transform hover:-translate-y-1"
            >
              <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${item.gradient} transform transition-transform duration-300 group-hover:translate-y-[-4px] shadow-lg`}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{item.title}</h4>
                <p className="text-gray-900 dark:text-white text-sm sm:text-base mt-1 font-medium">{item.value}</p>
                <span className="text-indigo-400 text-xs sm:text-sm hover:underline inline-block mt-2">{item.linkText}</span>
              </div>
            </a>
          ))}

          {/* Socials */}
          <div className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-purple-500 p-4 sm:p-6 transition-all duration-300">
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Follow Me</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 bg-[#21262d] hover:bg-[#30363d] rounded-lg font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                href="https://github.com/WENDI-A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <FaGithub className="text-lg sm:text-xl" />
                <span>GitHub</span>
              </a>
              <a
                className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                href="https://www.linkedin.com/in/wendimagegn-abera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Right */}
        <div className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md shadow-black/20 transform hover:scale-102">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-8">📨 Send Me a Message</h2>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="name" className="text-xs sm:text-sm font-medium">Full Name *</label>
                <input
                  id="name"
                  name="from_name"
                  required
                  disabled={isSubmitting}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs sm:text-sm font-medium">Email Address *</label>
                <input
                  id="email"
                  name="from_email"
                  required
                  disabled={isSubmitting}
                  className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-xs sm:text-sm font-medium">Subject *</label>
              <input
                id="subject"
                name="subject"
                required
                disabled={isSubmitting}
                className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs sm:text-sm font-medium">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                disabled={isSubmitting}
                className="w-full mt-1 sm:mt-2 px-3 sm:px-4 py-2 sm:py-3 h-24 sm:h-32 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 sm:py-3 mt-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-sm sm:text-base lg:text-lg text-white hover:opacity-95 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0d1117] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg flex items-center gap-3">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700 dark:text-red-300 font-medium">
                  Failed to send message. Please try again or email me directly.
                </p>
              </div>
            )}
          </form>

          <p className="text-gray-500 text-xs sm:text-sm text-center mt-3 sm:mt-4">
            * I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
