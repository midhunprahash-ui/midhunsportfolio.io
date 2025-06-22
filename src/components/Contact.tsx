
import React from 'react';
import { Terminal, Github, Settings } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor"/>
              <circle cx="18" cy="18" r="1" fill="currentColor"/>
              <path d="M2,2 L18,2 M18,2 L18,18 M18,18 L2,18" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Terminal className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-green-400">./</span>connect<span className="text-green-400">.sh</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-blue-400"># </span>Let's collaborate on innovative projects
          </p>
        </div>

        {/* Terminal-style contact form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black border border-gray-700 rounded-lg shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-gray-400 text-sm font-mono">
                contact_info.json
              </div>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="text-gray-500 mb-2">$ cat contact_details.json</div>
              <div className="text-green-400">
                <div className="mb-4">
                  <span className="text-blue-400">{`{`}</span>
                </div>
                
                <div className="ml-4 space-y-6">
                  {/* Email */}
                  <div className="flex items-center">
                    <span className="text-yellow-400">"email":</span>
                    <div className="ml-4 flex items-center">
                      <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-green-400">"midhuntech2023@gmail.com"</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center">
                    <span className="text-yellow-400">"location":</span>
                    <div className="ml-4 flex items-center">
                      <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-green-400">"Chennai, India"</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center">
                    <span className="text-yellow-400">"status":</span>
                    <div className="ml-4 flex items-center">
                      <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mr-4">
                        <Settings className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-green-400">"Available for opportunities"</span>
                    </div>
                  </div>

                  {/* Social links */}
                  <div>
                    <span className="text-yellow-400">"social_links":</span> <span className="text-blue-400">{`{`}</span>
                    <div className="ml-4 mt-4 space-y-3">
                      <div className="flex items-center">
                        <span className="text-purple-400">"linkedin":</span>
                        <a 
                          href="https://www.linkedin.com/in/midhun-prahash-14ab24292/" 
                          className="ml-4 flex items-center text-green-400 hover:text-green-300 transition-colors"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <div className="w-8 h-8 bg-gray-800 border border-gray-600 rounded flex items-center justify-center mr-2 hover:bg-green-400 hover:text-black transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </div>
                          "profile_url"
                        </a>
                      </div>

                      <div className="flex items-center">
                        <span className="text-purple-400">"github":</span>
                        <a 
                          href="https://github.com/midhunprahash-ui" 
                          className="ml-4 flex items-center text-green-400 hover:text-green-300 transition-colors"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <div className="w-8 h-8 bg-gray-800 border border-gray-600 rounded flex items-center justify-center mr-2 hover:bg-green-400 hover:text-black transition-colors">
                            <Github className="w-4 h-4" />
                          </div>
                          "repositories"
                        </a>
                      </div>
                    </div>
                    <div className="ml-4 mt-2 text-blue-400">{`}`}</div>
                  </div>
                </div>

                <div className="mt-4 text-blue-400">{`}`}</div>
              </div>

              <div className="mt-6 text-gray-500">
                $ echo "Ready to collaborate!"
              </div>
              <div className="text-green-400 animate-pulse">
                Ready to collaborate!
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 font-mono">
            <span className="text-green-400">©</span> 2024 Midhun Prahash. 
            <span className="text-blue-400"> // </span>
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
