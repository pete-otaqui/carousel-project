import React, { FC } from "react";

import { GenericCarousel, GCItem } from "@otaqui/generic-carousel";
import "@otaqui/generic-carousel/lib/index.css";

import "./styling.css";

const items: GCItem[] = [
  { guid: "abcd-1", src: "/images/img-1.jpg", title: "Image 1" },
  { guid: "abcd-2", src: "/images/img-2.jpg", title: "Image 2" },
  { guid: "abcd-3", src: "/images/img-3.jpg", title: "Image 3" },
  { guid: "abcd-4", src: "/images/img-4.jpg", title: "Image 4" },
  { guid: "abcd-5", src: "/images/img-5.jpg", title: "Image 5" },
  { guid: "abcd-6", src: "/images/img-6.jpg", title: "Image 6" }
];

export const StylingRoute: FC = () => {
  return (
    <div className="route custom-styling">
      <header>
        <h1>Custom Styling</h1>
      </header>
      <p>
        Note that we can also have custom styling, just with CSS Custom
        Properties (aka "CSS Variables"). Here we have changed some colours,
        lost the shadows, made the scaling factor larger between active and
        inactive, and slowed down the animation.
      </p>
      <div className="custom-styling">
        <GenericCarousel items={items} />
      </div>
      <pre>
        <code>{`
.custom-styling {
  --gc-color-primary: rgb(136, 134, 12);
  --gc-color-secondary: rgb(186, 69, 190);
  --gc-color-black: rgba(0, 0, 0);
  --gc-color-black-faded: rgba(0, 0, 0, 0.5);
  --gc-color-white: rgb(255, 255, 255);
  --gc-color-white-faded: rgba(255, 255, 255, 0.5);
  --gc-color-shadow: none;
  --gc-color-shadow-faded: none;
  --gc-animation-speed: 0.8s;
  --gc-inactive-scale: 0.6;
}
`}</code>
      </pre>
    </div>
  );
};
