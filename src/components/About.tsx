const About = () => {
  const tools = [
    "Javascript",
    "Typescript",
    "React",
    "React Native",
    "NodeJS",
    "Python",
    "SQL",
    "Firebase",
  ];
  return (
    <section id="about">
      <div className="container mx-auto flex md:px-20 px-7 pb-20 flex-col items-center">
        <h1 className="text-white self-start mb-12 font-bold text-2xl lg:text-3xl">
          About Me
        </h1>
        <p className="text-light-blue">
          I am a software engineer interested in Artificial Intelligence and
          utilizing data to create innovative and transformational solutions. I
          have a bachelor's degree in Mathmatics and have worked with
          technologies for data science, mobile and web development. When I am
          not coding, you can catch me reading a book, sleeping or binging some
          TV shows on Netflix.
        </p>
        <h5 className="text-light-blue my-4 self-start">
          Here are my skills and technologies I have worked with
        </h5>
        <ul className="text-light-blue grid gap-x-14 grid-cols-2 list-disc justify-between items-baseline self-start pr-5">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default About;
