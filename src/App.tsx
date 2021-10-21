import React from "react";
import useNavbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import "./App.css";

type Props = {
  children: React.ReactNode;
  hidden: boolean;
};

function ExtraLarge() {
  return (
    <section className="hidden xl:flex h-5/6 justify-center items-center">
      <section className={"filter max-w-7xl flex justify-between"}>
        <section>
          <Home />
          <About />
          <Contact />
        </section>
        <section>
          <Projects />
        </section>
      </section>
    </section>
  );
}

function RegularScreens({ children, hidden }: Props) {
  return (
    <section
      className={`flex justify-center xl:hidden filter ${
        !hidden ? "blur-sm md:blur-none" : "blur-none"
      }`}
    >
      {children}
    </section>
  );
}

function Sections() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const { render, hidden } = useNavbar();
  return (
    <section className={"bg-regal-blue min-h-screen relative page-container"}>
      <div className="pb-10">
        <section className="text-light-blue">{render}</section>
        <Socials />
        <div className="pt-20 lg:pt-36">
          <RegularScreens hidden={hidden}>
            <section
              className={" max-w-3xl flex flex-col justify-center items-center"}
            >
              <Sections />
            </section>
          </RegularScreens>
          <ExtraLarge />
        </div>
      </div>
      <footer className="text-light-blue bottom-0 absolute w-full h-10">
        <div className="flex justify-center items-center">
          <p className="text-xs">
            Built by Jane Uchechukwu Onwumere{" "}
            <span className="text-regal-red">&copy;2021</span>
          </p>
        </div>
      </footer>
    </section>
  );
}

export default App;
