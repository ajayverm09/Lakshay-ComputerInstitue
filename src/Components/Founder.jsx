import React, { useState } from 'react';
import { Quote, Linkedin, Twitter, Mail, Calendar, Award, Users, BookOpen, ChevronRight } from 'lucide-react';

const FounderSection = () => {
  const [activeTab, setActiveTab] = useState('vision');
  
  const tabs = [
    { id: 'vision', label: 'Vision', icon: BookOpen },
    { id: 'mission', label: 'Mission', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Users }
  ];
  
  const tabContent = {
    vision: {
      title: 'Empowering Through Education',
      content: 'To make quality technical education accessible to all, bridging the gap between academic knowledge and industry requirements.'
    },
    mission: {
      title: 'Building Future Leaders',
      content: 'To transform students into skilled professionals who are ready to meet the challenges of the digital world.'
    },
    achievements: {
      title: 'A Decade of Excellence',
      content: 'Over 10,000+ students trained, 95% placement rate, and 50+ industry partnerships since 2014.'
    }
  };

  return (
    <section className="relative bg-linear-to-br from-blue-900 to-blue-700 py-8 md:py-16 px-6 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-white" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-12 items-center">
          {/* Left Section: Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-400 rounded-lg transform rotate-3"></div>
              <img 
                src="https://lakshayainstitute.com/wp-content/uploads/2025/10/Neeraj-Sir-scaled.jpg" 
                alt="Neeraj Aggarwal"
                className="relative w-full h-auto rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105" 
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-bold">Since 2014</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Text and Description */}
          <div className="lg:col-span-2">
            <div className="md:mb-6">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">MEET OUR FOUNDER</h2>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">NEERAJ AGGARWAL</h3>
            </div>
            
            <p className="text-lg mb-6 text-blue-100">
              Visionary leader behind Lakshaya Institute, empowering students since 2014. Dedicated to building futures, empowering minds, and transforming careers.
            </p>
            
            <p className="text-lg mb-6 text-blue-100">
              Founded in 2014 by Mr. Neeraj Aggarwal, Lakshaya Institute has been at the forefront of digital education in Delhi NCR for over a decade. With his passion for technology and teaching, he has helped thousands of students master computer education, graphic design, web development, programming, and digital marketing.
            </p>
            
            <p className="text-lg md:mb-8 text-blue-100">
              His mission has always been simple yet powerful — to make quality technical education accessible, practical, and career-focused. Under his leadership, Lakshaya Institute has grown into a trusted hub for learning and innovation.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap border-b border-blue-600 mb-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center text-[13px] md:text-lg ml-2 md:px-4 py-3 font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-yellow-400 border-b-2 border-yellow-400'
                          : 'text-blue-200 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              
              <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-yellow-400 mb-3">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-blue-100">
                  {tabContent[activeTab].content}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 -mt-5 md:mt-0 md:grid-cols-2 gap-4 md:mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-400 text-blue-900 p-2 rounded-full">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Mentorship beyond classrooms</h4>
                  <p className="text-blue-100 text-sm">Guiding students personally</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-400 text-blue-900 p-2 rounded-full">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Focus on practical learning</h4>
                  <p className="text-blue-100 text-sm">Ensuring job-ready skills</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-400 text-blue-900 p-2 rounded-full">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Constantly upgrading courses</h4>
                  <p className="text-blue-100 text-sm">To match industry trends</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-400 text-blue-900 p-2 rounded-full">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Student-first philosophy</h4>
                  <p className="text-blue-100 text-sm">Every learner's success matters</p>
                </div>
              </div>
            </div>

            {/* CTA and Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <a href="/about" className="inline-flex items-center bg-yellow-400 text-blue-800 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors mb-4 sm:mb-0">
                Learn More About Lakshaya
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default FounderSection;