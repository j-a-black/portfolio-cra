import React from "react";

import Hero from "../hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero title="Jason Black" content="Front End Web Developer" />
      <About />
      <hr
        style={{
          width: "100%",
          backgroundColor: "#ccc",
          height: "1px",
          border: "none",
        }}
      />
      <Projects />
    </div>
  );
};

export default Home;
