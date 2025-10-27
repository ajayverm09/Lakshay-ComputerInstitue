import React, { useState } from "react";
import { BookOpen } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Diploma in Computer Application (DCA)"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend service
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "Diploma in Computer Application (DCA)"
    });
  };

  return (
    <section className="flex flex-col md:flex-row w-full h-auto">
      {/* Left Side - Only Image */}
      <div className="w-full md:w-[1200px]">
        <img
          src="https://lakshayainstitute.com/wp-content/uploads/2025/02/1.webp"
          alt="Lakshaya Institute"
          className="w-full md:h-[70vh] object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-[400px] md:h-[70vh] bg-linear-to-b from-gray-100 to-[#386c9d] flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 bg-transparent">
          <h2 className="text-xl font-semibold text-center text-gray-800">
            Unlock Your Learning Journey
            <br />
            <span className="font-normal">Book a Demo</span>
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mb-6">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="inline w-4 h-4 mr-1" />
              Select Course
            </label>
            <select 
              id="course" 
              name="course" 
              value={formData.course}
              onChange={handleChange}
              className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Diploma in Computer Application (DCA)">Diploma in Computer Application (DCA)</option>
              <option value="Certificate in Tally Prime">Certificate in Tally Prime</option>
              <option value="Diploma in Digital Marketing">Diploma in Digital Marketing</option>
              <option value="Diploma in Graphic Design">Diploma in Graphic Design</option>
              <option value="Certificate in C++ Programming">Certificate in C++ Programming</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded-md transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;