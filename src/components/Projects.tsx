
import React from 'react';
import { Code, Github, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Username Matcher",
      description: "Fuzzy string matching system for employee-username correlation using advanced NLP techniques and RF-Classifier.",
      tech: ["Python", "Fuzzy Logic", "NLP", "RF-Classifier"],
      link: "https://username-matcher.onrender.com",
      github: "https://github.com/midhunprahash-ui/Username_matcher.git",
      status: "LIVE"
    },
    {
      title: "StudentAi - RAG & LLM",
      description: "AI-powered educational assistant using Retrieval-Augmented Generation with FAISS vector database and LangChain.",
      tech: ["FAISS", "LangChain", "Vector DB", "OpenAI API"],
      github: "https://github.com/midhunprahash-ui/Student.Ai.git",
      status: "DEV"
    },
    {
      title: "AI Smart Mirror",
      description: "Computer vision-powered smart mirror using YOLOv8 for real-time hair density tracking and wellness insights.",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
      github: "https://github.com/midhunprahash-ui/Hair_volume_analyzer.git",
      status: "DEV"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-amber-100 mr-3" />
            <h2 className="text-2xl font-mono font-bold text-white">
              PROJECTS
            </h2>
          </div>
          <div className="w-16 h-px bg-amber-100 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/80 backdrop-blur-sm border border-gray-900 hover:border-amber-100 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-900">
                <span className="text-xs font-mono text-gray-500">{project.title}</span>
                <span className={`text-xs font-mono ${project.status === 'LIVE' ? 'text-amber-100' : 'text-gray-500'}`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-mono font-bold text-white mb-3 group-hover:text-amber-100 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-900 text-amber-100 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center text-amber-100 hover:text-amber-200 text-xs font-mono"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Monitor className="w-3 h-3 mr-1" />
                      DEMO
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-white text-xs font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    CODE
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
