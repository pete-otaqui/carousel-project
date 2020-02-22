import React, { FC, useState } from "react";

import { PixabayCarousel } from "@otaqui/pixabay-carousel";
import "@otaqui/generic-carousel/lib/index.css";

const API_KEY = "9656065-a4094594c34f9ac14c7fc4c39";

export const PixabayRoute: FC = () => {
  const [searchValue, setSearchValue] = useState("search");
  const [query, setQuery] = useState("search");

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
        <PixabayCarousel apiKey={API_KEY} search={query} />
      </main>
    </div>
  );
};
