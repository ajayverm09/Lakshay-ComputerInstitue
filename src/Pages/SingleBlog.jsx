import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../Components/BlogsData';
import { Calendar, User, ArrowLeft, Share2, Bookmark, Clock, Eye, MessageCircle, ThumbsUp } from 'lucide-react';

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Find the blog post
  useEffect(() => {
    const foundBlog = blogsData.find(b => b.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
      setLikes(foundBlog.likes || Math.floor(Math.random() * 100) + 10);
      
      // Find related blogs (same category or tags)
      const related = blogsData
        .filter(b => b.id !== parseInt(id) && (
          b.category === foundBlog.category || 
          (b.tags && foundBlog.tags && b.tags.some(tag => foundBlog.tags.includes(tag)))
        ))
        .slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [id]);

  // Scroll to section when activeSection changes
  useEffect(() => {
    if (activeSection) {
      const element = document.getElementById(activeSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  // Extract headings for table of contents
  const extractHeadings = (content) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const headings = Array.from(tempDiv.querySelectorAll('h2, h3'));
    return headings.map(heading => ({
      id: heading.textContent.toLowerCase().replace(/\s+/g, '-'),
      text: heading.textContent,
      level: heading.tagName.toLowerCase()
    }));
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, you would save this to a database or local storage
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this blog: ${blog.title}`;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
    }
    
    window.open(shareUrl, '_blank');
    setShowShareMenu(false);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const headings = extractHeadings(blog.content);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Back Button */}
            <Link to="/blogs" className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog List
            </Link>

            {/* Blog Content */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Blog Image */}
              <div className="relative">
                <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
                {blog.category && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded">
                      {blog.category}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-8 lg:p-12">
                {/* Blog Meta */}
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blog.readTime || '5 min read'}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{blog.views || Math.floor(Math.random() * 1000) + 100} views</span>
                  </div>
                </div>
                
                {/* Blog Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-[#002b5b] mb-6">{blog.title}</h1>
                
                {/* Blog Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map(tag => (
                      <span key={tag} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Blog Actions */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      hasLiked ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{likes}</span>
                  </button>
                  
                  <button
                    onClick={handleBookmark}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      isBookmarked ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>
                  
                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                    
                    {showShareMenu && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg p-2 z-10">
                        <button
                          onClick={() => handleShare('twitter')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare('facebook')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    <span>{blog.comments || Math.floor(Math.random() * 50)} Comments</span>
                  </div>
                </div>
                
                {/* Blog Content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                
                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">About {blog.author}</h3>
                      <p className="text-gray-600 mt-1">
                        {blog.authorBio || `${blog.author} is a passionate educator and industry expert with years of experience in the field. They love sharing knowledge and helping others learn and grow.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments</h2>
              
              {/* Comment Form */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Leave a Comment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <textarea
                    placeholder="Your Comment"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
              
              {/* Comments List */}
              <div className="space-y-6">
                {[1, 2].map(i => (
                  <div key={i} className="border-b pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                        U{i}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-800">User {i}</h4>
                          <span className="text-sm text-gray-500">
                            {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          This is a great article! I really enjoyed reading it and learned a lot. Looking forward to more content like this.
                        </p>
                        <button className="text-sm text-blue-700 hover:text-blue-800 mt-2">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {headings.map(heading => (
                    <li key={heading.id} className={heading.level === 'h3' ? 'ml-4' : ''}>
                      <button
                        onClick={() => setActiveSection(heading.id)}
                        className="text-sm text-gray-600 hover:text-blue-700 transition-colors text-left"
                      >
                        {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Related Blogs */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Blogs</h3>
                <div className="space-y-4">
                  {relatedBlogs.map(relatedBlog => (
                    <div key={relatedBlog.id} className="flex gap-3">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/blog/${relatedBlog.id}`}
                          className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors line-clamp-2"
                        >
                          {relatedBlog.title}
                        </Link>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(relatedBlog.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}