
import React from 'react';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Fetching Files from Google Drive using Google Drive API",
      excerpt: "Comprehensive tutorial on implementing Google Drive API integration for file management with authentication and best practices.",
      date: "2025-06-20",
      readTime: "5 min",
      tags: ["Python", "API", "Google Drive", "Authentication"],
      url: "https://medium.com/@midhuntech2023/tutorial-to-fetch-files-from-google-drive-using-google-drive-api-38765a55981d"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Articles</h2>
          <p className="text-lg text-gray-600">Thoughts and tutorials on technology</p>
        </div>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              className="block group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    Published
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gray-900 group-hover:text-gray-600 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="text-sm">Read Article</span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
