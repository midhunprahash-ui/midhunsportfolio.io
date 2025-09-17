
import React from 'react';
import { Terminal, Github, Mail, MapPin, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-google-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss opportunities in machine learning and AI development.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg shadow-google-md overflow-hidden">

            {/* Content */}
            <div className="p-8 space-y-8">

              {/* Email */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <p className="text-lg text-foreground font-medium">
                    midhuntech2023@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                  <p className="text-lg text-foreground font-medium">
                    Chennai, India
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                  <p className="text-lg text-foreground font-medium">
                    Available for opportunities
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground mb-6">Connect with me</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/midhun-prahash-14ab24292/"
                    className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/midhunprahash-ui"
                    className="flex items-center px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Midhun Prahash. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
