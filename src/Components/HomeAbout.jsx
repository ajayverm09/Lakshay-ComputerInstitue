import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Users, 
  Clock, 
  CheckCircle, 
  Mail, 
  Phone, 
  User, 
  Send,
  Calendar,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

const AboutInstitute = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Diploma in Computer Application (DCA)'
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'Diploma in Computer Application (DCA)'
      });
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 1500);
  };

  const features = [
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'Registered under MSME, Government of India'
    },
    {
      icon: BookOpen,
      title: '150+ Courses',
      description: 'Comprehensive IT education programs'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Experienced IT professionals as trainers'
    },
    {
      icon: Clock,
      title: '8+ Years',
      description: 'Trusted name in IT education'
    }
  ];

  const highlights = [
    'Real-time project training',
    'World-class IT technologies',
    'Digital Practice Lab access',
    'Career counseling services',
    'Interview preparation',
    'Job placement assistance'
  ];

  return (
    <div className="bg-linear-to-b from-gray-50 to-white md:py-16 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Lakshaya Computer Institute
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* About Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                At Lakshaya Computer Institute, our mission is to equip our trainees with cutting-edge technology skills and training. As the world transitions into a technology-driven era, we are dedicated to preparing our students for this future.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-700 mb-4">
                Our institute is powered by a team of expert IT professionals, experienced faculty, and efficient management staff. Our dedicated content development team continuously monitors industry trends and creates course materials that align with the latest IT industry requirements.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Makes Us Unique</h3>
              <p className="text-gray-700 mb-6">
                What makes Lakshaya Computer Institute unique is our holistic approach to learning. These distinctive elements empower our students with the knowledge and confidence to excel in their chosen fields.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Booking Form Section */}
          <div className=" bg-linear-to-b from-gray-100 to-[#386c9d] p-8 shadow-xl rounded-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Unlock Your Learning Journey</h3>
              <p className="text-gray-600">Book a Demo Class</p>
            </div>

            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-medium">Thank you for your interest!</p>
                <p className="text-sm">We'll contact you soon to schedule your demo class.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 ">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Your Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  required 
                />
              </div>
              
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
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-8 h-8 text-blue-600 mr-2" />
              <div className="text-3xl font-bold text-gray-900">10,000+</div>
            </div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-green-600 mr-2" />
              <div className="text-3xl font-bold text-gray-900">95%</div>
            </div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-8 h-8 text-purple-600 mr-2" />
              <div className="text-3xl font-bold text-gray-900">8+</div>
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-8 h-8 text-orange-600 mr-2" />
              <div className="text-3xl font-bold text-gray-900">ISO</div>
            </div>
            <div className="text-gray-600">Certified</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;