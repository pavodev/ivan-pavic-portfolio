import React from 'react';

const projectData = [
  {
    title: 'Project Alpha',
    description: 'A revolutionary app that changes the way we think about widgets. Built with a focus on performance and user experience.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#', // Replace with your live project URL
    repoUrl: '#', // Replace with your GitHub repo URL
  },
  {
    title: 'Project Beta',
    description: 'A data visualization tool that provides deep insights into market trends. Features a dynamic and interactive dashboard.',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const Projects = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <div key={index} className="bg-[#333333] rounded-lg shadow-lg p-6 flex flex-col">
              <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white flex-grow mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">
                  Live Demo
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;