import React from "react";
import useNavbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
        </section>
        <section>
          <Projects />
          <Contact />
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
  1;
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
    <section className={"bg-regal-blue min-h-screen"}>
      <section className="text-light-blue">{render}</section>
      <div className="pt-20">
        <RegularScreens hidden={hidden}>
          <section
            className={" max-w-3xl flex flex-col justify-center items-center"}
          >
            <Sections />
          </section>
        </RegularScreens>
        <ExtraLarge />
      </div>
    </section>
  );
}

export default App;
