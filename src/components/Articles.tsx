import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: "Fetching Files from Google Drive using Google Drive API",
      excerpt: "Learn the best practices for structuring React applications that can grow with your team and requirements. From component organization to state management strategies.",
      date: "June 20, 2025",
      readTime: "3 min read",
      tags: ["Python", "APIs", "Clients", "Google Drive API"],
      image: "https://images.unsplash.com/vector-1750426137612-ec4bc0950c5a?q=80&w=3254&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // Add a unique URL for this article
      url: "https://medium.com/@midhuntech2023/tutorial-to-fetch-files-from-google-drive-using-google-drive-api-38765a55981d"
    },

  ];

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights about web development, technology trends, and best practices from my experience in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url} // Use the article's URL here
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer block" // Added 'block' for full link area
            >
              <article> {/* Moved article tag inside the anchor */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                    Read More →
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">

        </div>
      </div>
    </section>
  );
};

export default Articles;