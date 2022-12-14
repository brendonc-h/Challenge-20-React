import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello! My name is Brendon Curry-Hobbs
            <br className="hidden lg:inline-block" />I love building application's and working with new technologies.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a father and a husband. My wife and I have a four year old son and will be welcoming our second son this coming year.
          I've been furthering my education and experiences in web development for aproxamately 5 years to begin my career path in software development. In the meantime, I've expanded my knowledge and growth towards my desired career working in the automotive industry . The strengths I have are leaning and challenging myself on a daily basis in order to expand my limits.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./headshot.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
