
import Navigation from '../components/Navigation';
import AtomVisualization from '../components/AtomVisualization';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, ExternalLink, Calendar, Clock, Tag, Eye } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Fetching Files from Google Drive using Google Drive API",
      subtitle: "A Comprehensive Guide to Google Drive Integration",
      excerpt: "Comprehensive tutorial on implementing Google Drive API integration for file management with authentication and best practices for production applications.",
      fullDescription: "This in-depth tutorial walks through the complete process of integrating Google Drive API into your applications. It covers everything from initial setup and authentication to advanced file operations and error handling. The guide includes practical code examples, security considerations, and optimization techniques for production environments.",
      content: [
        "Setting up Google Cloud Console and enabling Drive API",
        "Implementing OAuth 2.0 authentication flow",
        "Performing CRUD operations on files and folders",
        "Handling file permissions and sharing settings",
        "Error handling and rate limiting strategies",
        "Security best practices and data privacy considerations"
      ],
      date: "2025-06-20",
      readTime: "5 min",
      category: "API Integration",
      tags: ["Python", "API", "Google Drive", "Authentication", "OAuth", "Cloud Storage"],
      url: "https://medium.com/@midhuntech2023/tutorial-to-fetch-files-from-google-drive-using-google-drive-api-38765a55981d",
      platform: "Medium",
      views: "1.2K",
      reactions: "45",
      keyTakeaways: [
        "Understanding Google Drive API authentication mechanisms",
        "Implementing secure file access patterns",
        "Optimizing API calls for better performance",
        "Handling various file formats and metadata"
      ],
      codeSnippets: [
        "Python authentication setup",
        "File listing and filtering",
        "Download and upload operations",
        "Error handling implementation"
      ],
      targetAudience: "Developers working with cloud storage integration, Python developers, API integration specialists",
      difficulty: "Intermediate"
    }
  ];

  const upcomingArticles = [
    {
      title: "Building RAG Systems with FAISS and LangChain",
      description: "A comprehensive guide to building Retrieval-Augmented Generation systems for AI applications",
      expectedDate: "Coming Soon",
      category: "AI/ML"
    },
    {
      title: "Computer Vision with YOLOv8: From Training to Deployment",
      description: "Deep dive into object detection using YOLOv8, including custom dataset training and optimization",
      expectedDate: "Coming Soon", 
      category: "Computer Vision"
    },
    {
      title: "Fuzzy String Matching: Advanced Techniques and Applications",
      description: "Exploring advanced fuzzy matching algorithms and their real-world applications in data processing",
      expectedDate: "Coming Soon",
      category: "Data Science"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AtomVisualization />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-5xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Articles</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                In-depth technical articles and tutorials covering AI, machine learning, 
                software development, and emerging technologies. Sharing knowledge and insights 
                from real-world projects and experiences.
              </p>
            </div>

            {/* Published Articles */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <FileText className="w-6 h-6 text-amber-100 mr-3" />
                Published Articles
              </h2>
              
              <div className="space-y-8">
                {articles.map((article, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-amber-100 transition-colors">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                          <p className="text-amber-100 text-lg mb-3">{article.subtitle}</p>
                          <p className="text-gray-400 leading-relaxed">{article.fullDescription}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 mt-4 md:mt-0 md:ml-6">
                          <span className="px-3 py-1 bg-gray-800 text-amber-100 text-xs font-mono">
                            {article.category}
                          </span>
                          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-mono">
                            {article.platform}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Article Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          {article.views} views
                        </div>
                        <div className="flex items-center">
                          ❤️ {article.reactions} reactions
                        </div>
                        <span className="px-2 py-1 bg-gray-800 text-amber-100 text-xs">
                          {article.difficulty}
                        </span>
                      </div>

                      {/* Content Overview */}
                      <div>
                        <h3 className="font-semibold text-amber-100 mb-3">What You'll Learn</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {article.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                              <span className="text-amber-100 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Takeaways */}
                      <div>
                        <h3 className="font-semibold text-amber-100 mb-3">Key Takeaways</h3>
                        <ul className="space-y-1">
                          {article.keyTakeaways.map((takeaway, takeawayIndex) => (
                            <li key={takeawayIndex} className="text-gray-300 text-sm flex items-start">
                              <span className="text-amber-100 mr-2">✓</span>
                              {takeaway}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div>
                        <h3 className="font-semibold text-amber-100 mb-3 flex items-center">
                          <Tag className="w-4 h-4 mr-2" />
                          Technologies Covered
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-800 text-amber-100 text-xs font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Target Audience */}
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <h3 className="font-semibold text-amber-100 mb-2">Target Audience</h3>
                        <p className="text-gray-300 text-sm">{article.targetAudience}</p>
                      </div>

                      {/* Read Article Link */}
                      <div className="pt-4 border-t border-gray-800">
                        <a
                          href={article.url}
                          className="inline-flex items-center text-amber-100 hover:text-amber-200 font-mono text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          READ FULL ARTICLE
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Clock className="w-6 h-6 text-amber-100 mr-3" />
                Upcoming Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingArticles.map((article, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-gray-800 text-amber-100 text-xs font-mono">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          {article.expectedDate}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">{article.title}</h3>
                      <p className="text-gray-400 text-sm">{article.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
