
const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for structuring React applications that can grow with your team and requirements. From component organization to state management strategies.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Best Practices"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "Modern CSS Grid Techniques",
      excerpt: "Explore advanced CSS Grid layouts and how they can revolutionize your web design workflow. Practical examples and real-world use cases included.",
      date: "February 28, 2024",
      readTime: "6 min read",
      tags: ["CSS", "Grid", "Layout"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      title: "TypeScript for JavaScript Developers",
      excerpt: "A comprehensive guide to adopting TypeScript in your JavaScript projects. Learn how to migrate existing code and leverage TypeScript's powerful type system.",
      date: "February 10, 2024",
      readTime: "12 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Optimizing Web Performance",
      excerpt: "Discover techniques to improve your website's loading speed and overall performance. From image optimization to code splitting strategies.",
      date: "January 22, 2024",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "Web Development"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    }
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
            <article
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
            >
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
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
