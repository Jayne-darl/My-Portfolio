import {
  RiGithubFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiMediumFill,
} from "react-icons/ri";
const Socials = () => {
  const socials = [
    { href: "https://github.com/Jayne-darl", icon: <RiGithubFill /> },
    { href: "https://twitter.com/nwaada_uche", icon: <RiTwitterFill /> },
    {
      href: "https://www.linkedin.com/in/jane-onwumere/",
      icon: <RiLinkedinFill />,
    },
    {
      href: "https://www.instagram.com/janieuchechukwu/",
      icon: <RiInstagramFill />,
    },
    { href: "https://medium.com/@janeuchechukwu", icon: <RiMediumFill /> },
  ];
  return (
    <section className="md:fixed bottom-0 w-full">
      <div className="hidden md:flex flex-row justify-between">
        <div className=" pl-4">
          <ul className="socials text-light-blue list-none flex flex-col">
            <div className="items-center space-y-5 py-4">
              {socials.map(({ href, icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-xl"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div>
          <a
            href="mailto:janeuchechukwu@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="socials flex flex-col items-center pr-4"
          >
            <p className="email text-light-blue text-sm py-3">
              janeuchechukwu@gmail.com
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
