import React, { FC, useState, useEffect } from "react";

import { GenericCarousel, GCItem } from "@otaqui/generic-carousel";
import "@otaqui/generic-carousel/lib/index.css";

const getQueryUrl = (q: string): string => {
  return `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&image_type=photo&q=${q}`;
};

export const PixabayRoute: FC = () => {
  const [searchValue, setSearchValue] = useState("search");
  const [query, setQuery] = useState("search");
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
        <h1>Pixabay</h1>
        <p>
          Use the form to search Pixabay, the results will be loaded into the
          carousel.
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
};
