import React, { useState, useEffect } from "react";

import { GenericCarousel, GCItem } from "@otaqui/generic-carousel";

import "./App.css";
import "@otaqui/generic-carousel/lib/index.css";

const getQueryUrl = (q: string): string => {
  return `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&image_type=photo&q=${q}`;
};

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GCItem[]>([]);
  useEffect(() => {
    const f = async () => {
      if (query === "") {
        return;
      }
      const response = await fetch(getQueryUrl(query));
      const results = await response.json();
      const items: GCItem[] = results.hits.slice(0, 6).map((result: any) => {
        return {
          guid: `${result.id}`,
          src: result.webformatURL,
          title: `By ${result.user}, ${result.likes} likes`
        };
      });
      setResults(items);
    };
    f();
  }, [query]);

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
        <form
          onSubmit={e => {
            e.preventDefault();
            setQuery(searchValue);
          }}
        >
          <fieldset>
            <legend>Search</legend>
            <input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </fieldset>
        </form>
        <GenericCarousel items={results} />
      </main>
    </div>
  );
}

export default App;
