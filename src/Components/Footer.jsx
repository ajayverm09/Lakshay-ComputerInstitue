import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Target,
  MessageCircle,
  CircleDollarSign,
  Headphones,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  // State to manage which sections are open on mobile
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    diplomaCourses: false,
    certificateCourses: false,
    contactInfo: false,
  });

  // Toggle function for dropdown sections
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-[#002b5b] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About Us",
                "Blogs",
                "Contact Us",
                "Gallery",
                "Industrial Training",
                "Privacy Policy",
              ].map((item) => (
                <li key={item} className="hover:text-yellow-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Diploma Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white inline-block">
              Our Diploma Courses
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Computer Application (DCA)",
                "Graphic Designing (DGD)",
                "E-Accounting (DEA)",
                "Web Developing (DWD)",
                "Full Stack Developing",
                "Video Editing",
                "Data Analyst",
              ].map((item) => (
                <li key={item} className="hover:text-yellow-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white inline-block">
              Our Certificate Courses
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Financial Accounting",
                "C Programming",
                "C++ Programming",
                "Core Java",
                "Tally",
                "Advance Excel",
                "Python",
              ].map((item) => (
                <li key={item} className="hover:text-yellow-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white inline-block">
              Contact Address
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="text-yellow-400 mt-1 w-4 h-4" />
                RZ-1/2, Sitapuri, Main Pankha Road Janak Puri, Opposite Dabri Mor
                Metro Station Gate no.3, Delhi, 110045.
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-yellow-400 w-4 h-4" /> info@lakshayainstitute.com
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-yellow-400 w-4 h-4" /> support@lakshayainstitute.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-yellow-400 w-4 h-4" /> +91-9313736198
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-xl">
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-yellow-400 cursor-pointer transition-colors w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden space-y-4">
          {/* Quick Links Accordion */}
          <div className="border-b border-white/20 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("quickLinks")}
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              {openSections.quickLinks ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            {openSections.quickLinks && (
              <ul className="space-y-2 text-sm mt-4">
                {[
                  "Home",
                  "Founder Message",
                  "Career",
                  "Blog",
                  "Gallery",
                  "Industrial Training",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Diploma Courses Accordion */}
          <div className="border-b border-white/20 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("diplomaCourses")}
            >
              <h3 className="text-lg font-semibold">Our Diploma Courses</h3>
              {openSections.diplomaCourses ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            {openSections.diplomaCourses && (
              <ul className="space-y-2 text-sm mt-4">
                {[
                  "Computer Application (DCA)",
                  "Graphic Designing (DGD)",
                  "E-Accounting (DEA)",
                  "Web Developing (DWD)",
                  "Full Stack Developing",
                  "Video Editing",
                  "Data Analyst",
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Certificate Courses Accordion */}
          <div className="border-b border-white/20 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("certificateCourses")}
            >
              <h3 className="text-lg font-semibold">Our Certificate Courses</h3>
              {openSections.certificateCourses ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            {openSections.certificateCourses && (
              <ul className="space-y-2 text-sm mt-4">
                {[
                  "Financial Accounting",
                  "C Programming",
                  "C++ Programming",
                  "Core Java",
                  "Tally",
                  "Advance Excel",
                  "Python",
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact Info Accordion */}
          <div className="border-b border-white/20 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("contactInfo")}
            >
              <h3 className="text-lg font-semibold">Contact Address</h3>
              {openSections.contactInfo ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            {openSections.contactInfo && (
              <div className="space-y-3 text-sm mt-4">
                <p className="flex items-start gap-2">
                  <MapPin className="text-yellow-400 mt-1 w-12 h-12" />
                  RZ-1/2, Sitapuri, Main Pankha Road Janak Puri, Opposite Dabri Mor
                  Metro Station Gate no.3, Delhi, 110045.
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="text-yellow-400 w-4 h-4" /> info@lakshayainstitute.com
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="text-yellow-400 w-4 h-4" /> support@lakshayainstitute.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-yellow-400 w-4 h-4" /> +91-9313736198
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4 text-xl">
                  {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
                    <Icon
                      key={i}
                      className="hover:text-yellow-400 cursor-pointer transition-colors w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto px-6 text-sm">
        <div className="flex items-center gap-2">
          <Target className="bg-white text-[#002b5b] rounded p-1 w-10 h-10" />
          <div>
            <span className="font-semibold">JOB-ORIENTED COURSES</span>
            <p className="text-xs">Build in-demand technical skills</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MessageCircle className="bg-white text-[#002b5b] rounded-full p-1 w-10 h-10" />
          <div>
            <span className="font-semibold">FREE COUNSELING</span>
            <p className="text-xs">Get expert career advice today</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CircleDollarSign className="bg-white text-[#002b5b] rounded-full p-1 w-10 h-10" />
          <div>
            <span className="font-semibold">AFFORDABLE FEES</span>
            <p className="text-xs">Quality education within budget</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Headphones className="bg-white text-[#002b5b] rounded-full p-1 w-10 h-10" />
          <div>
            <span className="font-semibold">STUDENT SUPPORT</span>
            <p className="text-xs">Guidance throughout your journey</p>
          </div>
        </div>
      </div>
    </footer>
  );
}