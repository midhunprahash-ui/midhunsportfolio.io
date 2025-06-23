
import React from 'react';
import { Code, Github, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Username Matcher",
      description: "A fuzzy string matching system that demonstrates advanced NLP techniques for employee-username correlation. Built with traditional algorithms achieving high accuracy results.",
      tech: ["Python", "Fuzzy Logic", "NLP", "RF-Classifier"],
      image: "https://images.unsplash.com/vector-1750424980051-6adaf73023fc?q=80&w=2654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://username-matcher.onrender.com",
      github: "https://github.com/midhunprahash-ui/Username_matcher.git",
      status: "live"
    },
    {
      title: "StudentAi - RAG & LLM",
      description: "AI-powered educational assistant using Retrieval-Augmented Generation. Features FAISS vector database, LangChain framework, and OpenAI GPT APIs for personalized learning.",
      tech: ["FAISS", "LangChain", "Vector DB", "OpenAI API", "Streamlit"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/midhunprahash-ui/Student.Ai.git",
      status: "development"
    },
    {
      title: "AI Smart Mirror",
      description: "Computer vision-powered smart mirror using YOLOv8 for real-time hair density tracking. Provides monthly wellness insights with optimized performance.",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/midhunprahash-ui/Hair_volume_analyzer.git",
      status: "development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'beta': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Code className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Projects
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of AI/ML projects showcasing innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black border border-gray-700 rounded-xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-gray-400 text-xs font-mono">
                  {project.title}
                </div>
                <div className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded border border-gray-600 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center text-green-400 hover:text-green-300 text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Monitor className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-white text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
