import React, { useState } from "react";

import Route from "./components/Route/Route";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/Pages/Home";
import ProjectPage from "./components/Pages/ProjectPage";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import { projects } from "./data";

const App = () => {
  const [selected, setSelected] = useState(projects[0].title);
  const [active] = useState(true);

  const onSelectedChange = (event) => {
    event.preventDefault();
    setSelected(event.target.innerText);
  };

  return (
    <div>
      <Navigation />
      <div className="buffer" />
      <div style={{ minHeight: "100vh" }}>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <ProjectPage
            selected={selected}
            onSelectedChange={onSelectedChange}
            projects={projects}
            active={active}
          />
        </Route>
      </div>
      <Footer />
    </div>
  );
};

export default App;
