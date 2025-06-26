
import Navigation from '../components/Navigation';
import AtomVisualization from '../components/AtomVisualization';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Code, Github, Monitor, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Username Matcher",
      description: "A sophisticated fuzzy string matching system designed for employee-username correlation using advanced Natural Language Processing techniques and Random Forest Classifier. The system intelligently matches usernames to employee records with high accuracy, reducing manual verification overhead.",
      longDescription: "This project implements a comprehensive fuzzy string matching algorithm that addresses the common challenge of correlating employee names with their corresponding usernames across different systems. Using advanced NLP techniques including phonetic matching, edit distance calculations, and semantic similarity analysis, the system achieves over 85% accuracy in automatic matching. The Random Forest Classifier is trained on historical data patterns to improve matching confidence scores.",
      tech: ["Python", "Fuzzy Logic", "NLP", "RF-Classifier", "Pandas", "Scikit-learn"],
      features: [
        "Advanced fuzzy string matching algorithms",
        "Machine learning-based confidence scoring",
        "Real-time processing capabilities",
        "Comprehensive matching reports",
        "API endpoints for integration"
      ],
      link: "https://username-matcher.onrender.com",
      github: "https://github.com/midhunprahash-ui/Username_matcher.git",
      status: "LIVE",
      category: "Machine Learning",
      date: "2024",
      challenges: "Handling various name formats, dealing with incomplete data, optimizing for speed while maintaining accuracy",
      learnings: "Deep understanding of fuzzy logic, advanced NLP preprocessing techniques, production deployment optimization"
    },
    {
      title: "StudentAi - RAG & LLM",
      description: "An AI-powered educational assistant leveraging Retrieval-Augmented Generation (RAG) with FAISS vector database and LangChain framework. Provides personalized learning experiences and intelligent tutoring capabilities.",
      longDescription: "StudentAi represents a cutting-edge approach to educational technology, combining the power of Large Language Models with retrieval-augmented generation to provide contextually relevant and accurate educational content. The system uses FAISS for efficient similarity search across educational materials and LangChain for seamless LLM integration.",
      tech: ["FAISS", "LangChain", "Vector DB", "OpenAI API", "Python", "Streamlit"],
      features: [
        "Intelligent question-answering system",
        "Personalized learning recommendations",
        "Context-aware content retrieval",
        "Multi-modal content support",
        "Progress tracking and analytics"
      ],
      github: "https://github.com/midhunprahash-ui/Student.Ai.git",
      status: "DEV",
      category: "AI/Education",
      date: "2024",
      challenges: "Ensuring factual accuracy, handling diverse educational content, optimizing vector search performance",
      learnings: "RAG implementation patterns, vector database optimization, educational content structuring"
    },
    {
      title: "AI Smart Mirror",
      description: "A computer vision-powered smart mirror utilizing YOLOv8 for real-time hair density tracking and wellness insights. Combines IoT capabilities with advanced object detection for health monitoring.",
      longDescription: "The AI Smart Mirror project transforms a traditional mirror into an intelligent health monitoring device. Using computer vision and machine learning, it provides real-time analysis of hair density, skin condition, and overall wellness metrics. The system is built with YOLOv8 for accurate object detection and OpenCV for image processing.",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python", "Raspberry Pi", "IoT"],
      features: [
        "Real-time hair density analysis",
        "Skin condition monitoring",
        "Wellness trend tracking",
        "Voice-controlled interface",
        "Mobile app integration"
      ],
      github: "https://github.com/midhunprahash-ui/Hair_volume_analyzer.git",
      status: "DEV",
      category: "Computer Vision/IoT",
      date: "2024",
      challenges: "Real-time processing on edge devices, accurate hair density detection, user privacy concerns",
      learnings: "Edge computing optimization, YOLO model customization, IoT system architecture"
    }
  ];

  const categories = ["All", "Machine Learning", "AI/Education", "Computer Vision/IoT"];

  return (
    <div className="min-h-screen relative">
      <AtomVisualization />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A collection of projects showcasing my expertise in AI, machine learning, 
                and software development. Each project represents a unique challenge and learning experience.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-amber-100 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <Code className="w-6 h-6 text-amber-100" />
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-xs font-mono ${
                          project.status === 'LIVE' ? 'bg-green-900 text-green-100' : 'bg-yellow-900 text-yellow-100'
                        }`}>
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-mono">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.longDescription}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="font-semibold text-amber-100 mb-3 flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-amber-100 text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold text-amber-100 mb-3">Key Features</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-amber-100 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges & Learnings */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-amber-100 mb-2">Challenges</h3>
                        <p className="text-gray-400 text-sm">{project.challenges}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-100 mb-2">Key Learnings</h3>
                        <p className="text-gray-400 text-sm">{project.learnings}</p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                      {project.link && (
                        <a
                          href={project.link}
                          className="flex items-center text-amber-100 hover:text-amber-200 font-mono text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Monitor className="w-4 h-4 mr-2" />
                          LIVE DEMO
                        </a>
                      )}
                      <a
                        href={project.github}
                        className="flex items-center text-gray-400 hover:text-white font-mono text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        VIEW CODE
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
