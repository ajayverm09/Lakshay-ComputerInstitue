import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../Components/BlogsData';
import { Calendar, User, Search, Clock, Tag, ArrowRight, TrendingUp, Filter, X, ChevronDown } from 'lucide-react';

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [categorySelected, setCategorySelected] = useState(false);
  const blogsPerPage = 6;
  
  // Extract unique categories from blogsData
  const categories = ['All', ...new Set(blogsData.map(blog => blog.category || 'General'))];
  
  // Filter and sort blogs based on search term, selected category, and sort option
  useEffect(() => {
    let filtered = blogsData.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesCategory = selectedCategory === 'All' || (blog.category || 'General') === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    // Sort blogs
    if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => (b.views || 0) - (a.views || 0));
    }
    
    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, sortBy]);
  
  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  
  // Get featured blogs (top 3 most viewed)
  const featuredBlogs = [...blogsData]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 3);
  
  // Get trending tags
  const allTags = blogsData.flatMap(blog => blog.tags || []);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const trendingTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => tag);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('newest');
    setCategorySelected(false);
  };

  // Check if any filters are active
  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'All' || sortBy !== 'newest';

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCategorySelected(true);
    setShowFilters(false); // Close the filter panel after selection
  };

  // Reset category selection state to show all filters again
  const resetCategorySelection = () => {
    setCategorySelected(false);
    setShowFilters(true); // Open the filter panel when changing category
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative py-16 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#002b5b]/90 to-blue-800/90"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-white" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Lakshaya Institute Blogs</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-white">
            Insights, tutorials, and news from the world of technology and education.
          </p>
        </div>
      </div>

      {/* Featured Blogs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-[#002b5b] mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Featured Blogs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{blog.readTime || '5 min read'}</span>
                </div>
                <h2 className="text-xl font-bold text-[#002b5b] mb-2 group-hover:text-blue-700 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-sm group"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="md:bg-white md:shadow-sm py-4 md:py-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Toggle and Active Filters Indicator */}
          <div className="flex justify-between items-center md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-[#002b5b] text-white rounded-md"
            >
              <Filter className="h-4 w-4" />
              Filters
              {categorySelected && selectedCategory !== 'All' ? (
                <span className="bg-yellow-500 text-[#002b5b] text-xs font-bold px-2 py-0.5 rounded-full">
                  {selectedCategory}
                </span>
              ) : hasActiveFilters ? (
                <span className="bg-yellow-500 text-[#002b5b] text-xs font-bold px-2 py-0.5 rounded-full">
                  Active
                </span>
              ) : null}
            </button>
            
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-blue-700 font-medium"
              >
                Clear All
              </button>
            )}
          </div>
          
          {/* Desktop Search and Sort */}
          <div className="hidden md:flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#002b5b] focus:border-[#002b5b]"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort by:</label>
              <div className="relative w-full lg:w-auto">
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-full lg:w-auto px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#002b5b] focus:border-[#002b5b] bg-white"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters Panel */}
          <div className={`md:hidden ${showFilters ? 'block' : 'hidden'}`}>
            <div className="border-t pt-4 mt-4">
              {/* Mobile Search - Only show if category is not selected */}
              {!categorySelected && (
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#002b5b] focus:border-[#002b5b]"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              )}
              
              {/* Mobile Sort - Only show if category is not selected */}
              {!categorySelected && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort by:</label>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#002b5b] focus:border-[#002b5b] bg-white"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="popular">Most Popular</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Mobile Category Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {categorySelected ? "Selected Category:" : "Categories:"}
                </label>
                
                {/* Show selected category with change button if category is selected */}
                {categorySelected && selectedCategory !== 'All' ? (
                  <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <span className="text-sm font-medium text-blue-700">{selectedCategory}</span>
                    <button
                      onClick={resetCategorySelection}
                      className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Change
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#002b5b] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Clear Filters Button */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
          
          {/* Desktop Category Filter */}
          <div className="hidden md:block mt-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-gray-700">Categories:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#002b5b] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trending Tags */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-700">Trending Tags:</span>
          {trendingTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentBlogs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No blogs found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {blog.category && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                          {blog.category}
                        </span>
                      </div>
                    )}
                    {blog.views && (
                      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {blog.views} views
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{blog.readTime || '5 min read'}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#002b5b] mb-2 group-hover:text-blue-700 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                    
                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {blog.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                      <Link
                        to={`/blog/${blog.id}`}
                        className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-sm group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-1 sm:space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-2 sm:px-3 py-2 cursor-pointer rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-[#002b5b] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-2 sm:px-3 py-2 cursor-pointer rounded-md text-sm sm:text-base ${
                        currentPage === page
                          ? 'bg-[#002b5b] text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-[#002b5b] hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-2 sm:px-3 py-2 cursor-pointer rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-[#002b5b] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-[#002b5b] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 opacity-90">
            Get the latest updates and articles delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              placeholder="Your email address"
            />
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}