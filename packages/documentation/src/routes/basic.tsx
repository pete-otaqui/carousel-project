import React, { FC } from "react";

import { GenericCarousel, GCItem } from "@otaqui/generic-carousel";
import "@otaqui/generic-carousel/lib/index.css";

const items: GCItem[] = [
  { guid: "abcd-1", src: "/images/img-1.jpg", title: "Image 1" },
  { guid: "abcd-2", src: "/images/img-2.jpg", title: "Image 2" },
  { guid: "abcd-3", src: "/images/img-3.jpg", title: "Image 3" },
  { guid: "abcd-4", src: "/images/img-4.jpg", title: "Image 4" },
  { guid: "abcd-5", src: "/images/img-5.jpg", title: "Image 5" },
  { guid: "abcd-6", src: "/images/img-6.jpg", title: "Image 6" }
];

export const BasicRoute: FC = () => {
  return (
    <div className="route">
      <header>
        <h1>Basic</h1>
      </header>
      <p>
        Note that we can also have custom styling, just with CSS Custom
        Properties (aka "CSS Variables"). Here we have changed some colours,
        lost the shadows, made the scaling factor larger between active and
        inactive, and slowed down the animation.
      </p>
      <div>
        <GenericCarousel items={items} />
      </div>
    </div>
  );
};
