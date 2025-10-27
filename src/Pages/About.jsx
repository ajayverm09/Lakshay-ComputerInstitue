import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, BookOpen, Users, Award, Target, Lightbulb, CheckCircle, Star, Quote, Calendar, MapPin, Phone, Mail, ChevronUp, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // Hero content for multiple slides with different background images
  const heroSlides = [
    {
      title: "Empowering Minds. Shaping Futures.",
      description: "At Lakshaya Institute, we are committed to providing high-quality education and personalized learning experiences to unlock the full potential of every student.",
      buttonText: "Join Us Today",
      buttonLink: "#join-us",
      backgroundImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Learn from Industry Experts",
      description: "Our experienced faculty members bring real-world knowledge to the classroom, ensuring you gain practical skills that employers value.",
      buttonText: "Explore Courses",
      buttonLink: "#courses",
      backgroundImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Build Your Career Path",
      description: "With our comprehensive career guidance and placement support, we help you navigate your professional journey with confidence.",
      buttonText: "Career Support",
      buttonLink: "#careers",
      backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Director & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "20+ years of experience in education and technology"
    },
    {
      name: "Priya Sharma",
      position: "Head of Academics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Specialized in curriculum development and student mentoring"
    },
    {
      name: "Amit Singh",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Expert in programming languages and software development"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Anjali Verma",
      course: "Diploma in Digital Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial: "Lakshaya Institute transformed my career. The practical approach and expert guidance helped me secure a great job in digital marketing."
    },
    {
      name: "Rohit Gupta",
      course: "Certificate in C++ Programming",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      testimonial: "The programming course was comprehensive and the faculty was extremely supportive. I'm now working as a software developer."
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What courses does Lakshaya Institute offer?",
      answer: "Lakshaya Institute offers a wide range of courses including Diploma in Computer Application (DCA), Certificate in Tally Prime, Diploma in Digital Marketing, Diploma in Graphic Design, Certificate in C++ Programming, and many more specialized programs tailored to industry needs."
    },
    {
      question: "What is the admission process?",
      answer: "Our admission process is simple and straightforward. You can visit our institute, fill out the application form, provide necessary documents, and complete the fee payment. Our counselors will guide you through the entire process and help you select the right course based on your interests and career goals."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide comprehensive placement assistance to all our students. We have tie-ups with various companies and conduct regular placement drives. Our placement cell offers resume building workshops, interview preparation sessions, and connects students with job opportunities in their respective fields."
    },
    {
      question: "Are the courses certified?",
      answer: "Yes, all our courses are certified and recognized by industry bodies. Upon successful completion of a course, students receive a certificate that adds value to their resume and enhances their job prospects."
    },
    {
      question: "What is the class schedule?",
      answer: "We offer flexible class schedules to accommodate students with different needs. We have regular weekday batches, weekend batches, and fast-track courses. The specific timings vary for each course, and you can choose the schedule that best fits your routine."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials including textbooks, reference guides, and online resources. All study materials are regularly updated to reflect the latest industry trends and practices."
    }
  ];

  // Our offerings data
  const offerings = [
    { 
      title: 'Web Designing', 
      icon: 'https://lakshayainstitute.com/wp-content/uploads/2025/01/website-design.png',
      description: 'Learn to create stunning websites with HTML, CSS, JavaScript, and modern design tools.',
    },
    { 
      title: 'Web Development', 
      icon: 'https://lakshayainstitute.com/wp-content/uploads/2025/01/web-development.png',
      description: 'Master server-side programming, databases, and frameworks to build dynamic web applications.',
    },
    { 
      title: 'Programming Courses', 
      icon: 'https://lakshayainstitute.com/wp-content/uploads/2025/01/programming.png',
      description: 'Develop strong programming skills in languages like C++, Java, Python, and more.',
    },
    { 
      title: 'Graphic Design', 
      icon: 'https://lakshayainstitute.com/wp-content/uploads/2025/01/graphic-design.png',
      description: 'Create visual concepts using industry-standard software like Photoshop, Illustrator, and InDesign.',
    },
    { 
      title: 'Digital Marketing', 
      icon: 'https://lakshayainstitute.com/wp-content/uploads/2025/01/digital-marketing.png',
      description: 'Learn SEO, social media marketing, content strategy, and analytics to grow businesses online.',
    },
    { 
      title: 'E Accounting', 
      icon: 'https://lakshayainstitute.com/wp-content/uploads/2025/01/accounting.png',
      description: 'Master accounting software and financial management tools for modern businesses.',
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);
  
  // Trigger animation when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Toggle FAQ expansion
  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        {/* Background Images with Overlay */}
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              backgroundImage: `url('${slide.backgroundImage}')` 
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 to-blue-700/60"></div>
          </div>
        ))}
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-white" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
          <div className={`px-6 md:px-12 max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Title */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {heroSlides[currentSlide].description}
            </p>
            
            {/* Additional Info Icons */}
            <div className="flex flex-wrap justify-center md:gap-8 gap-1 mt-12">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mb-2">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-sm">Expert Faculty</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <span className="text-sm">Small Batch Size</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mb-2">
                  <Award className="h-6 w-6" />
                </div>
                <span className="text-sm">Certification</span>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* About Us Section */}
      <section className="md:py-16 py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Lakshaya Institute</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established with a vision to bridge the gap between education and industry requirements, Lakshaya Institute has been a beacon of quality education since its inception. We believe in nurturing talent and providing comprehensive learning experiences that prepare students for successful careers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art facilities, experienced faculty, and industry-relevant curriculum ensure that our students receive the best possible education. We take pride in our student-centric approach and commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Industry-Ready Curriculum</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Expert Faculty</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">100% Placement Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Practical Training</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://lakshayainstitute.com/wp-content/uploads/2025/01/sampleimage.jpg" 
                alt="About Lakshaya Institute" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="md:py-16 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Our Offerings</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              At Lakshaya Computer Institute, we provide a wide range of courses tailored to meet the diverse needs of students and professionals. Whether you're a beginner or looking to enhance your expertise, our carefully curated programs ensure you gain the knowledge and skills required to excel in the ever-evolving IT industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <Link 
                key={index} 
                to='/blogs'
                className="group flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">{item.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="md:py-16 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by our core values, we strive to make quality education accessible to all
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white p-2 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To empower students with practical knowledge and skills that make them industry-ready. We are committed to providing quality education that transforms lives and creates opportunities for growth and success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be a leading educational institution recognized for excellence in teaching, innovation, and student success. We aim to create a learning environment that fosters creativity, critical thinking, and lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="md:py-16 py-5 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Courses Offered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="md:py-16 py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure and resources to support your learning journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://lakshayainstitute.com/wp-content/uploads/2025/01/about1.jpg" 
                alt="Our Facilities" 
                className="rounded-lg shadow-xl w-full h-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Infrastructure</h3>
              <p className="text-gray-600">
                Our institute is equipped with modern classrooms, computer labs, and learning resources to provide the best educational environment for our students.
              </p>
            </div>
            <div>
              <img 
                src="https://lakshayainstitute.com/wp-content/uploads/2025/01/about2.jpg" 
                alt="Learning Environment" 
                className="rounded-lg shadow-xl w-full h-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Learning</h3>
              <p className="text-gray-600">
                We foster an interactive learning environment where students can engage with faculty, collaborate on projects, and develop practical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="md:py-16 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="md:py-16 py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our students about their transformative journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-16 py-5 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students who have transformed their careers with Lakshaya Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="md:py-16 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">We're here to help you achieve your goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                RZ-1/2, Sitapuri, Main Pankha Road<br />
                Janak Puri, Delhi, 110045
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                +91-9313736198<br />
                Mon - Sat: 9:00 AM - 7:00 PM
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                info@lakshayainstitute.com<br />
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="md:py-16 py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our courses and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FAQ Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1554469384-e58e17b7be32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="FAQ" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            {/* FAQ Items */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg overflow-hidden transition-all duration-300 ${
                      expandedFAQ === index ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-gray-50'
                    }`}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className={`text-lg font-medium ${
                        expandedFAQ === index ? 'text-blue-700' : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </h3>
                      <div className={`transform transition-transform duration-300 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}>
                        {expandedFAQ === index ? (
                          <ChevronUp className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ${
                      expandedFAQ === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;