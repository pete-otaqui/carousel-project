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
  const { items } = props;
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
          {items.map((item, index) => {
            const alt = item.alt || item.title;
            const href = item.href || item.src;
            return (
              <div
                key={item.guid}
                className="gc-item"
                aria-label={`Item ${index + 1} of ${items.length}`}
                aria-roledescription="slide"
                role="group"
              >
                <div className="gc-image">
                  <a className="gc-a" href={href}>
                    <img className="gc-img" src={item.src} alt={alt} />
                  </a>
                </div>
                <div className="gc-item-number"></div>
                <h3 className="gc-item-title">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
