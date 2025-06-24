
import React from 'react';
import { Terminal, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Training Intern",
      company: "Orion Governance",
      period: "Jun - Jul, 2025",
      description: "Developed fuzzy string matching algorithms and implemented Python solutions for data analysis. Worked extensively with data visualization tools.",
      skills: ["Python", "Fuzzy String Matching", "Data Analysis", "Seaborn"],
      type: "internship"
    },
    {
      title: "Project Intern",
      company: "AI & Robotics Lab, Excel Group of Schools",
      period: "Nov - Dec, 2024",
      description: "Designed and demonstrated a humanoid robot integrated with ChatGPT API, enabling real-time human interaction and dynamic query resolution using advanced NLP techniques.",
      skills: ["NLP", "Python", "Raspberry Pi", "OpenCV", "API Integration"],
      type: "project"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Terminal className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              Experience
            </h2>
          </div>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Professional journey in AI and development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-green-500 opacity-30"></div>
              )}
              
              {/* Timeline node */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-black shadow-lg"></div>
              
              <div className="ml-16">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center mb-4 pb-3 border-b border-gray-800">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Briefcase className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-500 font-mono text-sm">
                      {exp.type}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Job title and company */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-green-500 font-mono">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {exp.period}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </div>

                    {/* Skills */}
                    <div>
                      <p className="text-gray-500 text-sm mb-2">Technologies used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-900 text-green-500 text-xs rounded font-mono border border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
