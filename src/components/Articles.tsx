
import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

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
    <section id="articles" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-mono font-bold text-white">
              ARTICLES
            </h2>
          </div>
          <div className="w-16 h-px bg-blue-500 mx-auto"></div>
        </div>

        {/* Articles */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              className="block group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-black border border-gray-900 hover:border-blue-500 transition-all duration-300 p-6">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-900">
                  <div className="flex items-center text-xs font-mono text-gray-500">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span className="text-xs font-mono text-blue-500">PUBLISHED</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-900 text-blue-500 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <div className="flex items-center text-blue-500 text-xs font-mono group-hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  <span>READ_ARTICLE</span>
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
