import screen1 from "../images/app-screen1.jpg";
import screen2 from "../images/app-screen2.jpg";
import screen3 from "../images/app-screen3.jpg";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="container mx-auto flex md:px-20 px-7 pb-20 flex-col items-center">
        <h1 className="text-white self-start mb-12 font-bold text-2xl lg:text-3xl">
          Projects
        </h1>
        <div className="border-2 p-4 text-light-blue">
          <div className="grid grid-cols-3 gap-3">
            <img src={screen1} alt="app" width="300" height="300" />
            <img src={screen2} alt="app" width="300" height="300" />
            <img src={screen3} alt="app" width="300" height="300" />
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.african_founders.Wakanda&hl=en&gl=US"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-regal-red"
          >
            <h4 className="py-3">Wakanda </h4>
          </a>
          <p className="text-xs">
            A lifestyle app, where people can connect, create communities,
            share, oraganise , exchange information, and do business with one
            another. Included in the app is a telemedicine platform
          </p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
