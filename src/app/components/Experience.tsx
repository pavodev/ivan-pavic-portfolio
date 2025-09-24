const jobs = [
  {
    title: 'Web software developer',
    company: 'eLab - USI',
    period: 'Nov 2019 - Present',
    description: 'Design and development of web and mobile based applications through the use of new technologies.'
  },
  {
    title: 'Research Assistant',
    company: 'SUPSI',
    period: 'Jun 2018 - Dec 2018',
    description: ''
  },
  {
    title: 'Football Player',
    company: 'FC Lugano',
    period: 'Jul 2015 - Sep 2016',
    description: ''
  }
];

const Experience = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded"></div>

          {jobs.map((job, index) => (
            <div key={index} className="mb-10">
              <div className="absolute left-0 -ml-2 w-5 h-5 bg-blue-500 rounded-full"></div>

              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-lg font-semibold text-blue-600">{job.company}</p>
              <p className="text-sm text-gray-500 mb-2">{job.period}</p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;