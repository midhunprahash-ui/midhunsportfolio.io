
const Projects = () => {
  const projects = [
    {
      title: "Username Matcher",
      description: "This project explores the feasibility of matching usernames to their corresponding employees using traditional fuzzy string matching techniques. While it may not serve a direct practical purpose, it demonstrates how accurate results can be achieved through classic string similarity algorithms.",
      tech: ["Fuzzy", "NLP", "RF-Classifier"],
      image: "https://images.unsplash.com/vector-1750424980051-6adaf73023fc?q=80&w=2654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://username-matcher.onrender.com",
      github: "https://github.com/midhunprahash-ui/Username_matcher.git"
    },
    {
      title: "StudentAi - (RAG & LLM)",
      description: "Developed an AI-powered educational assistant using Retrieval-Augmented Generation (RAG) to extract key concept from school textbooks and generate Why? What? How? explanations for easier student learning. Implemented FAISS vector database for efficient document chunk storage and similarity search, enabling fast and accurate content retrieval.Integrated LangChain framework to orchestrate the RAG pipeline and used OpenAI GPT APIs for generating natural language explanations, improving student engagement and comprehension. Built the web interface using Streamlit, delivering an interactive app that personalizes answers based on student queries. ",
      tech: ["FAISS", "NLP", "Vector DB", "OpenAI API"],
      image: "",
      github: "https://github.com/midhunprahash-ui/Student.Ai.git"
    },
    {
      title: "Ai Integrated Smart Mirror- (COMPUTER VISION)",
      description: "Designed and developed an AI-powered smart mirror using YOLO v8 object detection to track real-time hair density Leveraged computer vision techniques to provide monthly hair density insights , enhancing user engagement in wellness. Applied Python, OpenCV, and YOLO v8, achieving high accuracy in real-time detection with optimized performance. ",
      tech: ["OpenCV", "CNN", "YOLOV8", "Detectron", "Semantic Segmentation"],
      image: "https://images.unsplash.com/vector-1750424980051-6adaf73023fc?q=80&w=2654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/midhunprahash-ui/Hair_volume_analyzer.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">MyProjects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  >
                    GitHub →
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
