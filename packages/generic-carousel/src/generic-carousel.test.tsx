import React from "react";
import { shallow } from "enzyme";

import { GenericCarousel } from "./generic-carousel";

describe("Generic Carousel", () => {
  it("should render", () => {
    expect(shallow(<GenericCarousel />)).toMatchSnapshot();
  });
});
