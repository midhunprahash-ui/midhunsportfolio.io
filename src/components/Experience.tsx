
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Training Intern",
      company: "Orion Governance",
      period: "Jun - Jul, 2025",
      location: "Remote",
      description: "Developed fuzzy string matching algorithms and implemented Python solutions for data analysis with visualization tools.",
      skills: ["Python", "Fuzzy String Matching", "Data Analysis", "Seaborn"]
    },
    {
      title: "Project Intern",
      company: "AI & Robotics Lab, Excel Group",
      period: "Nov - Dec, 2024",
      location: "On-site",
      description: "Designed humanoid robot integrated with ChatGPT API for real-time human interaction using advanced NLP techniques.",
      skills: ["NLP", "Python", "Raspberry Pi", "OpenCV", "API Integration"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">My professional journey and internships</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-px h-20 bg-gray-200"></div>
              )}

              <div className="flex items-start">
                <div className="w-3 h-3 bg-gray-900 rounded-full mt-6 mr-8 flex-shrink-0"></div>
                
                <div className="flex-grow">
                  <div className="bg-gray-50 p-8 border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1 bg-white border border-gray-200 text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
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
