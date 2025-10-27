import React, { useState, useRef, useEffect } from 'react';
import { Cog, Laptop, Cloud, Rocket, Users, Award, Clock, CheckCircle, ArrowRight, Play, X } from 'lucide-react';

const TrainingFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const expandedSectionRef = useRef(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const features = [
    {
      id: 0,
      icon: Users,
      title: 'Expert Trainers',
      description: 'Our trainers are industry professionals with years of practical experience, ensuring high-quality learning and real-world insights.',
      color: 'blue',
      details: [
        'Industry-certified professionals',
        'Regular guest lectures from experts',
        'One-on-one mentorship sessions',
        'Continuous professional development'
      ],
      videoUrl: 'https://www.youtube.com/embed/vep2WtQcfL0?si=Wh8E7qTCKlwRwq7z' // Sample video URL
    },
    {
      id: 1,
      icon: Laptop,
      title: 'Practical Learning',
      description: 'Students gain hands-on experience through real-world projects, ensuring they are job-ready and skilled in current industry practices.',
      color: 'green',
      details: [
        'Live project experience',
        'Industry-standard tools and software',
        'Case studies and simulations',
        'Portfolio development'
      ],
      videoUrl: 'https://www.youtube.com/embed/30Knz9ZPYng?si=CEy8KPqRG6RKpceH' // Sample video URL
    },
    {
      id: 2,
      icon: Cloud,
      title: 'Up-to-Date Curriculum',
      description: 'We offer a continuously updated curriculum that aligns with the latest industry trends, ensuring that students stay ahead of the curve.',
      color: 'purple',
      details: [
        'Regular curriculum reviews',
        'Industry feedback integration',
        'Emerging technology inclusion',
        'Certification preparation'
      ],
      videoUrl: 'https://www.youtube.com/embed/ta996w5V-ao?si=6KumEI7VYg3mQc7u' // Sample video URL
    },
    {
      id: 3,
      icon: Rocket,
      title: 'Flexible Learning Options',
      description: 'With options like regular, fast-track, and crash courses, we offer flexible schedules that fit the needs of every student.',
      color: 'orange',
      details: [
        'Weekday and weekend batches',
        'Online and classroom options',
        'Self-paced learning modules',
        'Customized corporate training'
      ],
      videoUrl: 'https://www.youtube.com/embed/JFfuZFEYbXk?si=we8Z4o9PNy1BglRs' // Sample video URL
    }
  ];

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
    // Reset video playing state when switching features
    setIsPlaying(false);
    
    // Only scroll to expanded section on mobile screens
    if (isMobile && expandedSectionRef.current) {
      setTimeout(() => {
        expandedSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100); // Small delay to ensure the active feature is updated first
    }
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Auto-play the video when the player is shown
    if (videoRef.current) {
      // Note: Autoplay might be blocked by browsers, user interaction is required
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    // Pause the video when closing
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Function to get the appropriate color classes based on the option color
  const getColorClasses = (color, type) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        bgHover: 'bg-blue-200',
        text: 'text-blue-600',
        border: 'bg-blue-500',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-100',
        bgHover: 'bg-green-200',
        text: 'text-green-600',
        border: 'bg-green-500',
        buttonBg: 'bg-green-600',
        buttonHover: 'hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-100',
        bgHover: 'bg-purple-200',
        text: 'text-purple-600',
        border: 'bg-purple-500',
        buttonBg: 'bg-purple-600',
        buttonHover: 'hover:bg-purple-700'
      },
      orange: {
        bg: 'bg-orange-100',
        bgHover: 'bg-orange-200',
        text: 'text-orange-600',
        border: 'bg-orange-500',
        buttonBg: 'bg-orange-600',
        buttonHover: 'hover:bg-orange-700'
      }
    };
    
    return colorMap[color][type];
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-white md:py-16 py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features of Our Training
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our training programs are designed to equip students with the knowledge and skills they need to excel in today's competitive job market. With expert trainers, practical learning, and flexible learning options, we ensure that our students are not only prepared for success but also gain a competitive edge in their careers.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            
            return (
              <div
                key={feature.id}
                className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive ? 'transform -translate-y-2 shadow-xl ring-2 ring-blue-500' : 'hover:shadow-lg hover:-translate-y-1'
                }`}
                onClick={() => handleFeatureClick(index)}
              >
                {/* Accent Border */}
                <div className={`absolute top-0 left-0 w-full h-1 ${getColorClasses(feature.color, 'border')}`} />
                
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${getColorClasses(feature.color, 'bg')} transition-all duration-300 ${
                    isActive ? getColorClasses(feature.color, 'bgHover') : ''
                  }`}>
                    <Icon className={`w-8 h-8 ${getColorClasses(feature.color, 'text')}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {feature.description}
                  </p>
    
                  {/* Expand Indicator */}
                  <div className="flex justify-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      <ArrowRight className={`w-3 h-3 transition-transform duration-300 ${
                        isActive ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Feature Details */}
        <div ref={expandedSectionRef} className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                {(() => {
                  const Icon = features[activeFeature].icon;
                  return <Icon className={`w-8 h-8 ${getColorClasses(features[activeFeature].color, 'text')} mr-3`} />;
                })()}
                <h3 className="text-2xl font-bold text-gray-900">
                  {features[activeFeature].title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {features[activeFeature].description}
              </p>
              
              <ul className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`mt-6 ${getColorClasses(features[activeFeature].color, 'buttonBg')} ${getColorClasses(features[activeFeature].color, 'buttonHover')} text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center`}>
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                {isPlaying ? (
                  <div className="relative w-full h-full">
                    <iframe
                      ref={videoRef}
                      src={features[activeFeature].videoUrl}
                      title="Feature Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <button
                      onClick={handleCloseVideo}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                      {(() => {
                        const Icon = features[activeFeature].icon;
                        return <Icon className="w-10 h-10 text-blue-600" />;
                      })()}
                    </div>
                    <p className="text-gray-600 mb-4">Feature Overview</p>
                    <button
                      onClick={handlePlayVideo}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
                    >
                      <Play className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingFeatures;