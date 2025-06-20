
const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of multiple React applications, mentored junior developers, and implemented modern CI/CD practices. Improved application performance by 40% and reduced load times significantly.",
      skills: ["React", "TypeScript", "Next.js", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations LLC",
      period: "2020 - 2022",
      description: "Developed and maintained full-stack web applications using modern technologies. Collaborated with design teams to create user-friendly interfaces and optimize user experience.",
      skills: ["Vue.js", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built responsive web applications from scratch, implemented responsive design principles, and worked closely with UX/UI designers to deliver pixel-perfect implementations.",
      skills: ["JavaScript", "React", "CSS3", "HTML5"]
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      period: "2018 - 2019",
      description: "Started my professional journey by working on various client projects, learning best practices, and contributing to team projects while developing my technical skills.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career in web development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-8">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-blue-600">{exp.company}</h4>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
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
