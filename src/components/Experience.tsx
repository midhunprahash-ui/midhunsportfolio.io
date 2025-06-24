
import React from 'react';
import { Terminal, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Training Intern",
      company: "Orion Governance",
      period: "Jun - Jul, 2025",
      description: "Developed fuzzy string matching algorithms and implemented Python solutions for data analysis with visualization tools.",
      skills: ["Python", "Fuzzy String Matching", "Data Analysis", "Seaborn"]
    },
    {
      title: "Project Intern",
      company: "AI & Robotics Lab, Excel Group",
      period: "Nov - Dec, 2024",
      description: "Designed humanoid robot integrated with ChatGPT API for real-time human interaction using advanced NLP techniques.",
      skills: ["NLP", "Python", "Raspberry Pi", "OpenCV", "API Integration"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-mono font-bold text-white">
              EXPERIENCE
            </h2>
          </div>
          <div className="w-16 h-px bg-blue-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-8 w-px h-20 bg-gray-900"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-3 top-6 w-2 h-2 bg-blue-500 rounded-full"></div>
              
              {/* Content */}
              <div className="ml-12">
                <div className="bg-black border border-gray-900 p-6 hover:border-blue-500 transition-colors">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-900">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-xs font-mono text-gray-500">INTERNSHIP</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                  </div>

                  {/* Title and Company */}
                  <div className="mb-4">
                    <h3 className="text-lg font-mono font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-500 font-mono text-sm">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-900 text-blue-500 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
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
