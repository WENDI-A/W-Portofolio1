
"use client"; // Required for client interactivity

import React from "react";
import IconBadge from '../../components/IconBadge';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
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

  // const faqList = [
  //   {
  //     q: "What types of projects do you work on?",
  //     a: "I focus on full-stack web development, modern UI builds, API development, and cloud-based systems.",
  //   },
  //   {
  //     q: "How quickly do you respond?",
  //     a: "I typically respond within 24 hours. For urgent matters, phone calls are faster.",
  //   },
  //   {
  //     q: "Do you work remotely?",
  //     a: "Yes, I am fully remote-ready and experienced working with global teams.",
  //   },
  //   {
  //     q: "What's your typical project timeline?",
  //     a: "Timeline depends on complexity: small (2–4 weeks), medium (1–3 months), large (3–6 months).",
  //   },
  // ];

  return (
    <div className="bg-transparent text-gray-900 dark:text-white px-6 md:px-20 py-20 transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="w-20 h-20 mx-auto motion-safe:animate-pulse">
          <IconBadge size="xl" bgClass="bg-gradient-to-r from-indigo-500 to-purple-500">💬</IconBadge>
        </div>
        <h1 className="text-4xl font-extrabold mt-6">Get In Touch</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and projects. Let's connect and discuss how we can collaborate.
        </p>
      </div>

      {/* Contact & Form */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {/* Contact Info Left */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold mb-4">📮 Let's Connect</h2>

          {contactItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${item.title}: ${item.value}`}
              className="group block bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 rounded-2xl p-6 flex gap-4 items-start transform hover:-translate-y-1"
            >
              <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${item.gradient} transform transition-transform duration-300 group-hover:translate-y-[-4px] shadow-lg`}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{item.title}</h4>
                <p className="text-gray-900 dark:text-white text-base mt-1 font-medium">{item.value}</p>
                <span className="text-indigo-400 text-sm hover:underline inline-block mt-2">{item.linkText}</span>
              </div>
            </a>
          ))}

          {/* Socials */}
          <div className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-purple-500 p-6 transition-all duration-300">
            <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
            <div className="space-y-3">
              <a
                className="w-full flex items-center justify-center gap-3 py-3 bg-[#21262d] hover:bg-[#30363d] rounded-lg font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                href="https://github.com/WENDI-A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                className="w-full flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                href="https://www.linkedin.com/in/wendimagegn-abera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Right */}
        <div className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all rounded-2xl p-10 shadow-md shadow-black/20 transform hover:scale-102">
          <h2 className="text-2xl font-extrabold mb-8">📨 Send Me a Message</h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData);
              console.log('Form submitted:', data);
              alert('Thank you for your message! I will get back to you soon.');
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 px-4 py-3 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 px-4 py-3 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full mt-2 px-4 py-3 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full mt-2 px-4 py-3 h-32 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none text-gray-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-lg text-white hover:opacity-95 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0d1117]"
            >
              Send Message
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center mt-4">
            * I typically respond within 24 hours.
          </p>
        </div>
      </div>

      {/* FAQ */}
      {/* <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions</h2> */}
      {/* <div className="grid md:grid-cols-2 gap-6 mb-20">
        {faqList.map((item, i) => (
          <details
            key={i}
            className="group bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 hover:border-indigo-500 rounded-xl p-6 transition-all duration-200 open:shadow-2xl"
          >
            <summary className="font-semibold mb-2 text-lg list-none cursor-pointer select-none">
              ⚡ {item.q}
            </summary>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">{item.a}</p>
          </details>
        ))}
      </div> */}
    </div>
  );
}
