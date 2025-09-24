const diplomas = [
  {
    title: 'Bachelor of Science, Computer Science',
    school: 'Scuola universitaria professionale della Svizzera italiana (SUPSI)',
    period: '2016 - 2019',
    description: ''
  },
  {
    title: 'Professional Technical High School Diploma, Electronic AFC',
    school: 'Scuola Arti e Mestieri Bellinzona',
    period: '2012 - 2016',
    description: ''
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded"></div>

          {diplomas.map((diploma, index) => (
            <div key={index} className="mb-10">
              <div className="absolute left-0 -ml-2 w-5 h-5 bg-blue-500 rounded-full"></div>

              <h3 className="text-xl font-bold">{diploma.title}</h3>
              <p className="text-lg font-semibold text-blue-600">{diploma.school}</p>
              <p className="text-sm text-gray-500 mb-2">{diploma.period}</p>
              <p className="text-gray-700">{diploma.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;