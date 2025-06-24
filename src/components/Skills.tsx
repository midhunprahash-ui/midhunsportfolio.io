
import React from 'react';
import { Code2, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["React", "Node.js", "FastAPI", "LangChain", "Streamlit", "Flask"]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "FAISS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="w-6 h-6 text-amber-100 mr-3" />
            <h2 className="text-2xl font-mono font-bold text-white">
              SKILLS
            </h2>
          </div>
          <div className="w-16 h-px bg-amber-100 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black border border-gray-900 hover:border-amber-100 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center px-4 py-3 border-b border-gray-900">
                <category.icon className="w-4 h-4 text-amber-100 mr-3" />
                <span className="text-sm font-mono text-white group-hover:text-amber-100 transition-colors">
                  {category.title}
                </span>
              </div>

              {/* Skills */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-900 px-3 py-2 text-center hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-xs font-mono text-amber-100">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
