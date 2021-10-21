import React, { useState, useEffect } from "react";
import "../App.css";

const useNavbar = () => {
  const [hidden, setHidden] = useState(true);
  const links = [
    { text: "About", link: "#about" },
    { text: "Projects", link: "#projects" },
    { text: "Contact", link: "#contact" },
    {
      text: "Resume",
      link: "https://drive.google.com/file/d/1vinGoQofxkXEvOrh9JxUXlr5VvLrPdb4/view?usp=sharing",
      rel: "noopener noreferrer",
      target: "_blank",
    },
  ];
  const toggleButton = () => {
    setHidden((value) => !value);
  };
  const closeView = (tab: string) => {
    setHidden(true);
    window.location.href = tab;
  };
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    hidden,
    render: (
      <div
        className={`shadow-xl ${
          scrolled ? "hidden" : "block"
        } hide-on-scroll fixed w-full top-0 transition-opacity z-50 px-7 bg-regal-blue`}
      >
        <header className={" pb-5  pt-5 mx-auto flex flex-row justify-between"}>
          <div className="flex space-x-7 xl:pt-1">
            <p className="text-regal-red font-extrabold text-2xl">JO</p>
          </div>
          <a
            href="https://drive.google.com/file/d/1vinGoQofxkXEvOrh9JxUXlr5VvLrPdb4/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
            className="hidden  xl:flex items-center border-2 px-4 py-1 rounded-full border-regal-red hover:text-regal-red transition duration-300"
          >
            Resume
          </a>
          <nav className="hidden md:flex xl:hidden items-center space-x-1">
            <ul className="flex flex-row">
              {links.map(({ text, link, rel, target }) => (
                <li key={link}>
                  <a
                    href={`${!target ? "/" : ""}${link}`}
                    rel={rel}
                    target={target}
                    className="items-center py-4 px-5 hover:text-regal-red transition duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none z-40 transition ease-in-out duration-700 font-extrabold text-xl text-regal-red"
              onClick={() => {
                toggleButton();
              }}
            >
              {hidden ? (
                <svg
                  className="w-6 h-6 text-regal-red"
                  // x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <>X</>
              )}
            </button>
          </div>
        </header>
        {!hidden && (
          <div className=" box-border overflow:hidden">
            <aside className="md:hidden bg-slider-blue fixed right right-0 top-0 z-30 w-8/12 h-12/12 transition duration-300 transform translate-x-0 translate-y-0">
              <nav className="items-center">
                <ul className="px-10 py-16 flex flex-col justify-center items-center h-full list-disc space-y-5">
                  {links.map(({ text, link }, index) => (
                    <li
                      className={`${!index ? "-ml-3" : "m-auto"} nav-link`}
                      key={link}
                    >
                      <span
                        role="button"
                        onClick={() => {
                          closeView(link);
                        }}
                        className="hover:text-regal-red transition duration-300 self-end"
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        )}
      </div>
    ),
  };
};

export default useNavbar;
