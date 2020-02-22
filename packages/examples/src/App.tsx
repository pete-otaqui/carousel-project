import React from "react";

import { GenericCarousel } from "@otaqui/generic-carousel";

import "./App.css";
import "@otaqui/generic-carousel/lib/index.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Generic Carousel Examples</h1>
        <p>
          Note that this project doesn't really do very much right now. It
          exists to deminstrate how one can use the "monorepo" pattern to create
          a minimal shareable component project, along with deployable instances
          of examples, documentation, storybook outout, etc. alongside.
        </p>
      </header>
      <main>
        <GenericCarousel />
      </main>
    </div>
  );
}

export default App;
