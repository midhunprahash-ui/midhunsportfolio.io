
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Username Matcher",
      description: "Fuzzy string matching system for employee-username correlation using advanced NLP techniques and RF-Classifier.",
      tech: ["Python", "Fuzzy Logic", "NLP", "RF-Classifier"],
      link: "https://username-matcher.onrender.com",
      github: "https://github.com/midhunprahash-ui/Username_matcher.git",
      status: "Live"
    },
    {
      title: "StudentAi - RAG & LLM",
      description: "AI-powered educational assistant using Retrieval-Augmented Generation with FAISS vector database and LangChain.",
      tech: ["FAISS", "LangChain", "Vector DB", "OpenAI API"],
      github: "https://github.com/midhunprahash-ui/Student.Ai.git",
      status: "Development"
    },
    {
      title: "AI Smart Mirror",
      description: "Computer vision-powered smart mirror using YOLOv8 for real-time hair density tracking and wellness insights.",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
      github: "https://github.com/midhunprahash-ui/Hair_volume_analyzer.git",
      status: "Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Selected Projects</h2>
          <p className="text-lg text-gray-600">A showcase of my recent work and experiments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center text-gray-900 hover:text-gray-600 text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
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
