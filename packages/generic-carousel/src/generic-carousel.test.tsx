import React from "react";

import { GenericCarousel } from "./generic-carousel";

describe("Generic Carousel", () => {
  it("should render", () => {
    expect(<GenericCarousel />).toMatchSnapshot();
  });
});
