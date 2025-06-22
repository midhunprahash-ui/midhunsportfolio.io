
import React from 'react';
import { Terminal, Github, Mail, MapPin, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Terminal className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              Contact
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on innovative projects
          </p>
        </div>

        {/* Contact information */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black border border-gray-700 rounded-lg shadow-2xl">
            {/* Header */}
            <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-gray-400 text-sm font-mono">
                contact_info
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-green-400 font-mono">
                      midhuntech2023@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-green-400 font-mono">
                      Chennai, India
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mr-4">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Status</p>
                    <p className="text-green-400 font-mono">
                      Available for opportunities
                    </p>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-4">Connect with me:</p>
                  <div className="space-y-3">
                    <a
                      href="https://www.linkedin.com/in/midhun-prahash-14ab24292/"
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 h-8 bg-gray-800 border border-gray-600 rounded flex items-center justify-center mr-3 hover:bg-green-400 hover:text-black transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      LinkedIn Profile
                    </a>

                    <a
                      href="https://github.com/midhunprahash-ui"
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 h-8 bg-gray-800 border border-gray-600 rounded flex items-center justify-center mr-3 hover:bg-green-400 hover:text-black transition-colors">
                        <Github className="w-4 h-4" />
                      </div>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2025 Midhun Prahash. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
