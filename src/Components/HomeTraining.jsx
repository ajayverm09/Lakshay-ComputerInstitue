import React, { useState } from 'react';
import { BookOpen, Monitor, Calendar, UserPlus, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const TrainingOptions = () => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const trainingOptions = [
    {
      id: 'classroom',
      title: 'Classroom Training',
      description: '100+ Courses Available',
      icon: BookOpen,
      color: 'blue',
      link: '/blogs',
      details: 'Join our in-person training sessions with expert instructors and hands-on learning.'
    },
    {
      id: 'online',
      title: 'Online Training',
      description: 'Join Live Virtual Trainings',
      icon: Monitor,
      color: 'green',
      link: '/blogs',
      details: 'Learn from anywhere with our interactive online classes and flexible schedules.'
    },
    {
      id: 'demo',
      title: 'Book A Demo',
      description: 'Interact With Our Trainers',
      icon: Calendar,
      color: 'purple',
      link: '/contact',
      details: 'Schedule a free demo session to experience our teaching methodology.'
    },
    {
      id: 'enroll',
      title: 'Enroll Now',
      description: 'Enroll For New Batches',
      icon: UserPlus,
      color: 'orange',
      link: '/contact',
      details: 'Secure your spot in our upcoming batches and start your learning journey.'
    }
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    // Navigate to the option's link
    navigate(option.link);
  };

  const handleLearnMore = (e, option) => {
    e.stopPropagation();
    // Navigate to the option's link
    navigate(option.link);
  };

  // Function to get the appropriate color classes based on the option color
  const getColorClasses = (color, type) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        bgHover: 'bg-blue-200',
        text: 'text-blue-600',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700',
        gradientFrom: 'from-blue-400',
        gradientTo: 'to-blue-600'
      },
      green: {
        bg: 'bg-green-100',
        bgHover: 'bg-green-200',
        text: 'text-green-600',
        buttonBg: 'bg-green-600',
        buttonHover: 'hover:bg-green-700',
        gradientFrom: 'from-green-400',
        gradientTo: 'to-green-600'
      },
      purple: {
        bg: 'bg-purple-100',
        bgHover: 'bg-purple-200',
        text: 'text-purple-600',
        buttonBg: 'bg-purple-600',
        buttonHover: 'hover:bg-purple-700',
        gradientFrom: 'from-purple-400',
        gradientTo: 'to-purple-600'
      },
      orange: {
        bg: 'bg-orange-100',
        bgHover: 'bg-orange-200',
        text: 'text-orange-600',
        buttonBg: 'bg-orange-600',
        buttonHover: 'hover:bg-orange-700',
        gradientFrom: 'from-orange-400',
        gradientTo: 'to-orange-600'
      }
    };
    
    return colorMap[color][type];
  };

  return (
    <div className="md:py-16 py-4 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the training option that best fits your schedule and learning preferences
          </p>
        </div>

        {/* Training Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingOptions.map((option) => {
            const Icon = option.icon;
            const isHovered = hoveredOption === option.id;
            const isSelected = selectedOption === option.id;
            
            return (
              <div
                key={option.id}
                className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
                  isHovered ? 'transform -translate-y-2 shadow-xl' : ''
                } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                onMouseEnter={() => setHoveredOption(option.id)}
                onMouseLeave={() => setHoveredOption(null)}
                onClick={() => handleOptionClick(option)}
              >
                {/* Gradient Background for Hover State */}
                <div 
                  className={`absolute inset-0 bg-linear-to-br ${getColorClasses(option.color, 'gradientFrom')} ${getColorClasses(option.color, 'gradientTo')} opacity-0 transition-opacity duration-300 ${
                    isHovered ? 'opacity-10' : ''
                  }`}
                />
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${getColorClasses(option.color, 'bg')} transition-all duration-300 ${
                    isHovered ? getColorClasses(option.color, 'bgHover') : ''
                  }`}>
                    <Icon className={`w-8 h-8 ${getColorClasses(option.color, 'text')}`} />
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                    {option.title}
                  </h3>
                  <p className="text-gray-500 text-sm text-center mb-4">
                    {option.description}
                  </p>
                  
                  {/* Details (shown on hover) */}
                  <div className={`text-center text-xs text-gray-600 mb-4 transition-all duration-300 overflow-hidden ${
                    isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {option.details}
                  </div>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <button
                      onClick={(e) => handleLearnMore(e, option)}
                      className={`w-full py-2 px-4 rounded-md font-medium text-sm flex items-center justify-center transition-all duration-300 ${
                        isHovered 
                          ? `${getColorClasses(option.color, 'buttonBg')} text-white` 
                          : `${getColorClasses(option.color, 'bg')} ${getColorClasses(option.color, 'text')} ${getColorClasses(option.color, 'buttonHover')}`
                      }`}
                    >
                      {isHovered ? 'Get Started' : 'Learn More'}
                      <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our advisors are here to help you find the perfect training program based on your goals and preferences.
          </p>
          <Link 
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md w-[250px] transition-colors duration-300 flex items-center mx-auto"
          >
            Talk to an Advisor
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingOptions;