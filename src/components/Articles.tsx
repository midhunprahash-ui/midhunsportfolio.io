
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
    <section id="articles" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Articles
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical writing and insights on machine learning, APIs, and development.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              className="block group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-card border border-border rounded-lg hover:shadow-google-lg transition-all duration-300 p-6">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    Published
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>Read Article</span>
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
