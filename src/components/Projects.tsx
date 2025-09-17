
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
      title: "Hidden suicide intention detection using BiLSTM + DistilBERT + Psycholinguistic feature infusion",
      description: "Computer vision-powered smart mirror using YOLOv8 for real-time hair density tracking and wellness insights.",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
      github: "https://github.com/midhunprahash-ui/Hair_volume_analyzer.git",
      status: "DEV"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing machine learning, AI research, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg hover:shadow-google-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  project.status === 'LIVE' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium"
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
                      className="flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Monitor className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="flex items-center text-muted-foreground hover:text-foreground text-sm font-medium"
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
