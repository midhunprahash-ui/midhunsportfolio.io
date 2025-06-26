
import Navigation from '../components/Navigation';
import AtomVisualization from '../components/AtomVisualization';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Briefcase, Calendar, MapPin, Award, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Training Intern",
      company: "Orion Governance",
      location: "Remote",
      period: "June - July 2025",
      duration: "2 months",
      type: "Internship",
      description: "Specialized in developing advanced fuzzy string matching algorithms and implementing comprehensive Python solutions for complex data analysis challenges with sophisticated visualization techniques.",
      responsibilities: [
        "Developed and optimized fuzzy string matching algorithms for large-scale data processing",
        "Implemented Python-based data analysis pipelines using pandas and numpy",
        "Created comprehensive data visualizations using Seaborn and Matplotlib",
        "Collaborated with senior developers on algorithm optimization strategies",
        "Documented technical processes and created user guides for implemented solutions"
      ],
      achievements: [
        "Improved matching accuracy by 40% through algorithm optimization",
        "Processed over 100,000 records with 95% accuracy rate",
        "Reduced processing time by 60% through code optimization",
        "Created reusable visualization templates for future projects"
      ],
      skills: ["Python", "Fuzzy String Matching", "Data Analysis", "Seaborn", "Pandas", "NumPy", "Algorithm Optimization"],
      technologies: ["Python 3.9+", "Jupyter Notebooks", "Git", "VS Code", "Linux"],
      learnings: "Gained deep expertise in fuzzy logic algorithms, advanced data manipulation techniques, and performance optimization for large-scale data processing."
    },
    {
      title: "Project Intern",
      company: "AI & Robotics Lab, Excel Group",
      location: "Hybrid",
      period: "November - December 2024",
      duration: "2 months",
      type: "Internship",
      description: "Led the design and development of an innovative humanoid robot integrated with ChatGPT API, enabling sophisticated real-time human-robot interaction using cutting-edge Natural Language Processing techniques.",
      responsibilities: [
        "Designed and programmed humanoid robot control systems using Raspberry Pi",
        "Integrated ChatGPT API for natural language processing and conversation handling",
        "Implemented computer vision capabilities using OpenCV for facial recognition",
        "Developed real-time speech-to-text and text-to-speech functionality",
        "Created responsive robot behaviors based on conversation context",
        "Collaborated with hardware team for sensor integration and motor control"
      ],
      achievements: [
        "Successfully created fully functional conversational humanoid robot",
        "Achieved 92% accuracy in speech recognition and response generation",
        "Implemented real-time facial tracking with 30 FPS performance",
        "Presented project to industry experts and received outstanding feedback"
      ],
      skills: ["NLP", "Python", "Raspberry Pi", "OpenCV", "API Integration", "Robotics", "Speech Processing"],
      technologies: ["Raspberry Pi 4", "OpenCV 4.5", "Python Speech Recognition", "ChatGPT API", "Hardware Integration"],
      learnings: "Mastered integration of AI APIs with hardware systems, advanced computer vision techniques, and real-time system optimization for robotics applications."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                My journey through various internships and projects, showcasing hands-on experience 
                in AI, machine learning, robotics, and software development.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-amber-100 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <Briefcase className="w-6 h-6 text-amber-100" />
                        <div>
                          <CardTitle className="text-2xl">{exp.title}</CardTitle>
                          <p className="text-amber-100 font-mono text-lg">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <span className="px-3 py-1 bg-gray-800 text-amber-100 text-xs font-mono">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="font-semibold text-amber-100 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-amber-100 mr-3 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="font-semibold text-amber-100 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-amber-100 mr-3 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills & Technologies */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-amber-100 mb-3">Skills Developed</h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gray-800 text-amber-100 text-xs font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-100 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Learnings */}
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="font-semibold text-amber-100 mb-2">Key Learnings</h3>
                      <p className="text-gray-300 text-sm">{exp.learnings}</p>
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

export default Experience;
