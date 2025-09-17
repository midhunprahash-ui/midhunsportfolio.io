
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
    <section id="experience" className="py-24 bg-google-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional journey and key contributions in AI and machine learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">

              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-16 bg-border"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-5 top-8 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>

              {/* Content */}
              <div className="ml-16">
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-google-md transition-all duration-300">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-primary mr-3" />
                      <span className="text-sm font-medium text-muted-foreground">Internship</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                  </div>

                  {/* Title and Company */}
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
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
