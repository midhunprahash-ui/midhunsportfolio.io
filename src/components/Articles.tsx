
import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Fetching Files from Google Drive using Google Drive API",
      excerpt: "A comprehensive tutorial on implementing Google Drive API integration for file management. Learn authentication, API setup, and best practices for efficient file operations.",
      date: "2025-06-20",
      readTime: "5 min",
      tags: ["Python", "API", "Google Drive", "Authentication"],
      image: "https://images.unsplash.com/vector-1750426137612-ec4bc0950c5a?q=80&w=3254&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://medium.com/@midhuntech2023/tutorial-to-fetch-files-from-google-drive-using-google-drive-api-38765a55981d",
      status: "published"
    },
  ];

  return (
    <section id="articles" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Code className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Articles
            </h2>
          </div>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Technical insights and tutorials from my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-gray-950 border border-gray-800 rounded-xl hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                {/* Header */}
                <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-gray-500 text-xs font-mono">
                    article.md
                  </div>
                  <div className="px-2 py-1 rounded text-xs font-mono bg-green-500/20 text-green-500 border border-green-500/30">
                    {article.status}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Image section */}
                  <div className="lg:col-span-1">
                    <div className="relative overflow-hidden h-48 lg:h-full">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="lg:col-span-2 p-6">
                    {/* Date and read time */}
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>Published: {article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime} read</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors duration-200">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <div className="text-gray-400 mb-4 leading-relaxed">
                      {article.excerpt}
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-900 text-green-500 text-xs rounded font-mono border border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read more */}
                    <div className="flex items-center text-green-500 text-sm group-hover:text-green-400 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>Read Full Article</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            More articles coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Articles;
