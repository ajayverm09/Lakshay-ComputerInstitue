import React, { useState } from 'react';
import { Clock, Calendar, Users, Star, ChevronRight, Filter, Search, BookOpen, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course, onReadMore, onBookDemo }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-auto">
        <img 
          src={course.image} 
          alt={course.name} 
          className="w-full h-48 object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {course.popular && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{course.name}</h3>
        
        <div className="flex items-center mb-4 text-sm text-gray-500">
          <Users className="w-4 h-4 mr-1" />
          <span>{course.students || Math.floor(Math.random() * 500) + 100} students</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < (course.rating || 4) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
            <span className="ml-1">{course.rating || 4.5}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          {course.durations.map((duration, index) => (
            <div key={index} className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span className="font-medium text-gray-700">{duration.type}:</span>
              <span className="ml-1 text-gray-600">{duration.time}</span>
            </div>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={() => onReadMore(course)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Read More
          </button>
          <button 
            onClick={() => onBookDemo(course)}
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      image: "https://lakshayainstitute.com/wp-content/uploads/2025/01/CTPcertificate-in-tally-prime.jpg",
      name: "Certificate in Tally Prime",
      category: "Accounting",
      durations: [
        { type: "Regular", time: "2 Months" },
        { type: "Fastrack", time: "1 Month" },
        { type: "Crash", time: "1 Month" }
      ],
      popular: true,
      rating: 4.8,
      students: 320
    },
    {
      id: 2,
      image: "https://lakshayainstitute.com/wp-content/uploads/2025/01/CIDM-CERTIFICATE-IN-DIGITAL-MARKETING.png",
      name: "Diploma in Digital Marketing",
      category: "Marketing",
      durations: [
        { type: "Regular", time: "6 Months" },
        { type: "Fastrack", time: "3 Months" },
        { type: "Crash", time: "2 Months" }
      ],
      popular: true,
      rating: 4.7,
      students: 450
    },
    {
      id: 3,
      image: "https://lakshayainstitute.com/wp-content/uploads/2025/01/DEA-Diploma-in-E-Accountinng-taxation.png",
      name: "Diploma in E-Accounting",
      category: "Accounting",
      durations: [
        { type: "Regular", time: "12 Months" },
        { type: "Fastrack", time: "6 Months" },
        { type: "Crash", time: "3 Months" }
      ],
      rating: 4.6,
      students: 280
    },
    {
      id: 4,
      image: "https://lakshayainstitute.com/wp-content/uploads/2024/12/CICP-CERTIFICATE-IN-C-PROGRAMMING.png",
      name: "Certificate in C++ Programming",
      category: "Programming",
      durations: [
        { type: "Regular", time: "3 Months" },
        { type: "Fastrack", time: "45 Days" },
        { type: "Crash", time: "20 Days" }
      ],
      rating: 4.5,
      students: 380
    },
    {
      id: 5,
      image: "https://lakshayainstitute.com/wp-content/uploads/2025/01/PDGD-Professional-diploma-in-graphic-designing.png",
      name: "Diploma in Graphic Design",
      category: "Design",
      durations: [
        { type: "Regular", time: "6 Months" },
        { type: "Fastrack", time: "3 Months" },
        { type: "Crash", time: "1.5 Months" }
      ],
      popular: true,
      rating: 4.9,
      students: 520
    },
    {
      id: 6,
      image: "https://lakshayainstitute.com/wp-content/uploads/2025/01/CMGE-Certificate-in-motin-graphic.png",
      name: "Certificate in Motion Graphic Expert",
      category: "Design",
      durations: [
        { type: "Regular", time: "6 Months" },
        { type: "Fastrack", time: "3 Months" },
        { type: "Crash", time: "45 Days" }
      ],
      rating: 4.4,
      students: 220
    },
    {
      id: 7,
      image: "https://lakshayainstitute.com/wp-content/uploads/2025/01/ADCA-Advance-diploma-in-computer-application.png",
      name: "Diploma in Computer Application (DCA)",
      category: "Computer",
      durations: [
        { type: "Regular", time: "12 Months" },
        { type: "Fastrack", time: "6 Months" },
        { type: "Crash", time: "3 Months" }
      ],
      rating: 4.6,
      students: 410
    },
    {
      id: 8,
      image: "https://lakshayainstitute.com/wp-content/uploads/2024/12/CICP-CERTIFICATE-IN-C-PROGRAMMING.png",
      name: "Certificate in C Programming",
      category: "Programming",
      durations: [
        { type: "Regular", time: "3 Months" },
        { type: "Fastrack", time: "1.5 Months" },
        { type: "Crash", time: "20 Days" }
      ],
      rating: 4.5,
      students: 350
    }
  ];
  
  // Extract unique categories
  const categories = ['All', ...new Set(courses.map(course => course.category))];
  
  // Filter courses based on search term and selected category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  
  const handleReadMore = (course) => {
    console.log(`Read more about: ${course.name}`);
    // Navigate to the blogs page
    navigate('/blogs');
  };
  
  const handleBookDemo = (course) => {
    console.log(`Book demo for: ${course.name}`);
    // Navigate to the contact page
    navigate('/contact');
  };
  
  return (
    <section className="md:py-16 py-4 px-6 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 md:mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Most Popular Courses</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most sought-after courses, designed to provide in-depth knowledge and practical skills that align with industry demands...
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Course Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">50+</div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">10,000+</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">4.7</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">10+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {currentCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onReadMore={handleReadMore}
              onBookDemo={handleBookDemo}
            />
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="md:mt-16 mt-5 text-center bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We're constantly adding new courses to our catalog. Let us know what you're interested in and we'll notify you when it becomes available.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
          >
            Request a Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;