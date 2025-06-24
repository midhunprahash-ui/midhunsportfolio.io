
import React from 'react';
import { Terminal, Github, Mail, MapPin, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="w-6 h-6 text-amber-100 mr-3" />
            <h2 className="text-2xl font-mono font-bold text-white">
              CONNECT
            </h2>
          </div>
          <div className="w-16 h-px bg-amber-100 mx-auto"></div>
        </div>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black border border-gray-900">

            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-gray-900">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-mono text-gray-500">contact_info</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">

              {/* Email */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-100 flex items-center justify-center mr-4">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-1">EMAIL</p>
                  <p className="text-sm font-mono text-amber-100">
                    midhuntech2023@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-100 flex items-center justify-center mr-4">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-1">LOCATION</p>
                  <p className="text-sm font-mono text-amber-100">
                    Chennai, India
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-100 flex items-center justify-center mr-4">
                  <User className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-1">STATUS</p>
                  <p className="text-sm font-mono text-amber-100">
                    Available for opportunities
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-900">
                <p className="text-xs font-mono text-gray-500 mb-4">CONNECT</p>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/midhun-prahash-14ab24292/"
                    className="flex items-center text-amber-100 hover:text-amber-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-6 h-6 bg-gray-900 border border-gray-700 flex items-center justify-center mr-3 hover:bg-amber-100 hover:text-black transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/midhunprahash-ui"
                    className="flex items-center text-amber-100 hover:text-amber-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-6 h-6 bg-gray-900 border border-gray-700 flex items-center justify-center mr-3 hover:bg-amber-100 hover:text-black transition-colors">
                      <Github className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-mono">Github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-900">
          <p className="text-xs font-mono text-gray-500">
            © 2025 Midhun Prahash. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
