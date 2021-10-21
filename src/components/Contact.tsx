import {
  RiGithubFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiMediumFill,
} from "react-icons/ri";

const Contact = () => {
  const socials = [
    { href: "#about", icon: <RiGithubFill /> },
    { href: "#about", icon: <RiTwitterFill /> },
    { href: "#about", icon: <RiLinkedinFill /> },
    { href: "#about", icon: <RiInstagramFill /> },
    { href: "#about", icon: <RiMediumFill /> },
  ];
  return (
    <section id="contact" className="w-full">
      <div className="container mx-auto flex md:px-20 px-7 flex-col items-center pb-10 md:pb-36 xl:pb-20 ">
        <h1 className="text-white xl:self-start mb-10 font-bold text-2xl lg:text-3xl">
          Get In Touch
        </h1>
        <p className="text-light-blue xl:self-start">
          You want to hire me, work together, have any question or just to say
          hi?
        </p>
        <a
          href="mailto:janeuchechukwu@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-light-blue py-4 px-6 border-2 rounded-md border-regal-red mt-6 hover:text-regal-red "
        >
          <p>Say Hello</p>
        </a>
      </div>

      <div className="flex md:hidden py-8 m-auto">
        <ul className=" text-light-blue w-full list-none flex items-center justify-center space-x-8">
          {socials.map(({ href, icon }) => (
            <li>
              <a href={href} className="text-lg">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
