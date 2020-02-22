/* eslint-disable react/prop-types */
import React, { FC } from "react";

export type GCItem = {
  guid: string;
  src: string;
  title: string;
  alt?: string;
  href?: string;
};
export type GenericCarouselProps = {
  items: GCItem[];
};

export const GenericCarousel: FC<GenericCarouselProps> = props => {
  return (
    <section
      aria-label="Generic Carousel"
      aria-roledescription="carousel"
      className="gc-carousel"
    >
      <div className="gc-inner">
        <fieldset className="gc-controls" aria-label="Carousel controls">
          <legend className="gc-legend">Carousel controls</legend>
          <button
            className="gc-control gc-control-prev"
            aria-label="Previous"
            aria-controls="abcd-gc-items"
          >
            Prev
          </button>
          <button
            className="gc-control gc-control-next"
            aria-label="Next"
            aria-controls="abcd-gc-items"
          >
            Next
          </button>
        </fieldset>
        <div className="gc-items" id="abcd-gc-items">
          {props.items.map(item => (
            <div
              key={item.guid}
              className="gc-item"
              aria-label="Item {N} of {N} by {user} tagged {tags}"
              aria-roledescription="slide"
              role="group"
            >
              <div className="gc-image">
                <a
                  className="gc-a"
                  href="images/52e3dd474950b108f5d084609621317b133fd8e04e507441772e79d0964dc3_640.jpg"
                >
                  <img
                    className="gc-img"
                    src={item.src}
                    alt="Photo by {user} tagged {tags}"
                  />
                </a>
              </div>
              <div className="gc-item-number"></div>
              <h3 className="gc-item-title">Item title</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
