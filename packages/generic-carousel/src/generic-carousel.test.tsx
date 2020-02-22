import React from "react";
import { shallow } from "enzyme";

import { GenericCarousel, GCItem } from "./generic-carousel";

const allItems: GCItem[] = [
  { guid: "1", src: "src-1.jpg", title: "title 1" },
  { guid: "2", src: "src-2.jpg", title: "title 2" },
  { guid: "3", src: "src-3.jpg", title: "title 3" },
  { guid: "4", src: "src-4.jpg", title: "title 4" },
  { guid: "5", src: "src-5.jpg", title: "title 5" },
  { guid: "6", src: "src-6.jpg", title: "title 6" },
  { guid: "7", src: "src-7.jpg", title: "title 7" }
];

describe("Generic Carousel", () => {
  describe("Rendering", () => {
    it("should render a basic item", () => {
      const items = allItems.slice(0, 2);
      expect(shallow(<GenericCarousel items={items} />)).toMatchSnapshot();
    });

    it("should show a notification if loading", () => {
      const items = [];
      const wrapper = shallow(<GenericCarousel items={items} loading={true} />);
      expect(wrapper).toMatchSnapshot();
    });

    it("should show a message if there are no images", () => {
      const items = [];
      const wrapper = shallow(<GenericCarousel items={items} />);
      expect(wrapper).toMatchSnapshot();
    });

    it("should use the alt attribute if provided", () => {
      const items = [{ ...allItems[0], alt: "alt text" }];
      const wrapper = shallow(<GenericCarousel items={items} />);
      expect(wrapper.find(".gc-img").prop("alt")).toEqual("alt text");
    });

    it("should fall back to title if there is no alt", () => {
      const items = [{ ...allItems[0] }];
      const wrapper = shallow(<GenericCarousel items={items} />);
      expect(wrapper.find(".gc-img").prop("alt")).toEqual("title 1");
    });

    it("should use the href attribute if provided", () => {
      const items = [{ ...allItems[0], href: "href.jpg" }];
      const wrapper = shallow(<GenericCarousel items={items} />);
      expect(wrapper.find(".gc-a").prop("href")).toEqual("href.jpg");
    });

    it("should fall back to src if there is no href", () => {
      const items = [{ ...allItems[0] }];
      const wrapper = shallow(<GenericCarousel items={items} />);
      expect(wrapper.find(".gc-a").prop("href")).toEqual("src-1.jpg");
    });
  });

  describe("Navigation controls", () => {
    const active = "gc-item--active";
    it("should activate the next item when clicking next", () => {
      const wrapper = shallow(<GenericCarousel items={allItems} />);
      const nextButton = wrapper.find(".gc-control-next");
      nextButton.simulate("click");
      const secondItem = wrapper.find(".gc-item").at(1);
      expect(secondItem.hasClass(active)).toBeTruthy();
    });
    it("should activate the previous item when clicking prev", () => {
      const wrapper = shallow(
        <GenericCarousel items={allItems} initialIndex={1} />
      );
      const prevButton = wrapper.find(".gc-control-prev");
      prevButton.simulate("click");
      const item = wrapper.find(".gc-item").at(0);
      expect(item.hasClass(active)).toBeTruthy();
    });
    it("should activate the first item when clicking next at the end", () => {
      const wrapper = shallow(
        <GenericCarousel items={allItems} initialIndex={6} />
      );
      const nextButton = wrapper.find(".gc-control-next");
      nextButton.simulate("click");
      const secondItem = wrapper.find(".gc-item").at(0);
      expect(secondItem.hasClass(active)).toBeTruthy();
    });
    it("should activate the last item when clicking prev at the start", () => {
      const wrapper = shallow(<GenericCarousel items={allItems} />);
      const prevButton = wrapper.find(".gc-control-prev");
      prevButton.simulate("click");
      const item = wrapper.find(".gc-item").at(6);
      expect(item.hasClass(active)).toBeTruthy();
    });
    it("should activate the item when tab-focusing", () => {
      const wrapper = shallow(<GenericCarousel items={allItems} />);
      wrapper
        .find(`a.gc-a`)
        .at(2)
        .simulate("focus");
      const item = wrapper.find(".gc-item").at(2);
      expect(item.hasClass(active)).toBeTruthy();
    });
  });
});
