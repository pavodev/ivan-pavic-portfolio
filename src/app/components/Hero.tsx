import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-white p-4">
      <div className="w-40 h-40 mb-6 relative rounded-full overflow-hidden shadow-lg">
        <div className="w-full h-full bg-gray-200"></div>
        <Image
          src="/cv-photo-1.PNG" // Put your photo in the 'public' folder
          alt="A photo of Your Name"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-5xl font-bold text-gray-800">
        Ivan Pavic
      </h1>
      <p className="mt-3 text-xl text-gray-500">
        Web Software Engineer
      </p>
    </section>
  );
};

export default Hero;