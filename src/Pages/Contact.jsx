import React, { useState } from "react";
import { MapPin, Mail, Phone, Send, Clock } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend service
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <div 
        className="relative py-16"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#002b5b]/90 to-blue-800/90"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90 text-white">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grow bg-gray-50 py-5 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-[#002b5b] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#002b5b] focus:border-[#002b5b]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#002b5b] focus:border-[#002b5b]"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#002b5b] focus:border-[#002b5b]"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#002b5b] focus:border-[#002b5b]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#002b5b] focus:border-[#002b5b]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#002b5b] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-[#002b5b] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#002b5b] mt-1 w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600 text-sm">
                        RZ-1/2, Sitapuri, Main Pankha Road Janak Puri, Opposite Dabri Mor Metro Station Gate no.3, Delhi, 110045.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#002b5b] w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600 text-sm">+91-9313736198</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#002b5b] w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600 text-sm">info@lakshayainstitute.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-[#002b5b] w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Opening Hours</p>
                      <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="md:mt-12 mt-3">
            <h2 className="text-2xl font-bold text-[#002b5b] mb-6 text-center">Find Us Here</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Lakshaya Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.896432932878!2d77.07761431498165!3d28.629638682421565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04fb5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sLakshaya%20Institute!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}