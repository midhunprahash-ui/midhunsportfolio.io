
import React from 'react';
import { Terminal, Code } from 'lucide-react';

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
      {/* Matrix background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Terminal className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
              <span className="text-blue-400">class</span>{' '}
              <span className="text-yellow-400">Experience</span>:
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-green-400"># </span>Professional journey in AI and development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-green-400 opacity-30"></div>
              )}
              
              {/* Terminal node */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-green-400 rounded-full border-4 border-black shadow-lg"></div>
              
              <div className="ml-16">
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-all duration-300">
                  {/* Terminal header */}
                  <div className="flex items-center mb-4 pb-3 border-b border-gray-700">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Code className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300 font-mono text-sm">
                      {exp.type}_{index + 1}.py
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Experience details as code */}
                    <div className="font-mono text-sm">
                      <span className="text-purple-400">class</span>{' '}
                      <span className="text-yellow-400">{exp.title.replace(/\s+/g, '')}</span>:
                    </div>
                    
                    <div className="ml-4 font-mono text-sm space-y-1">
                      <div>
                        <span className="text-gray-400">company =</span>{' '}
                        <span className="text-green-400">"{exp.company}"</span>
                      </div>
                      <div>
                        <span className="text-gray-400">period =</span>{' '}
                        <span className="text-green-400">"{exp.period}"</span>
                      </div>
                    </div>

                    <div className="ml-4 font-mono text-sm mt-4">
                      <span className="text-purple-400">def</span>{' '}
                      <span className="text-blue-400">get_description</span>():
                    </div>
                    <div className="ml-8 text-gray-300 text-sm leading-relaxed">
                      <span className="text-orange-400">return</span>{' '}
                      <span className="text-yellow-400">"""</span>
                      <div className="text-gray-300 mt-2 mb-2">{exp.description}</div>
                      <span className="text-yellow-400">"""</span>
                    </div>

                    <div className="ml-4 font-mono text-sm mt-4">
                      <span className="text-gray-400">skills =</span> [
                    </div>
                    <div className="ml-8 flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800 text-green-400 text-xs rounded font-mono border border-gray-600"
                        >
                          "{skill}"
                        </span>
                      ))}
                    </div>
                    <div className="ml-4 font-mono text-sm text-gray-400">]</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 font-mono">
            <span className="text-green-400"># </span>
            More experiences loading...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
