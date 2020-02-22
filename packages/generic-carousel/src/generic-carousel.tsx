/* eslint-disable react/prop-types */
import React, { FC, useState } from "react";

export type GCItem = {
  guid: string;
  src: string;
  title: string;
  alt?: string;
  href?: string;
};
export type GenericCarouselProps = {
  items: GCItem[];
  initialIndex?: number;
  loading?: boolean;
};

export const GenericCarousel: FC<GenericCarouselProps> = ({
  items,
  initialIndex = 0,
  loading = false
}) => {
  const [activeItem, setActiveItem] = useState(initialIndex);
  const showItem = (index: number): void => {
    setActiveItem(index);
  };
  const nextItem = (): void => {
    let next = activeItem + 1;
    if (next >= items.length) next = 0;
    showItem(next);
  };
  const prevItem = (): void => {
    let prev = activeItem - 1;
    if (prev < 0) prev = items.length - 1;
    showItem(prev);
  };
  return (
    <section
      aria-label="Generic Carousel"
      aria-roledescription="carousel"
      className="gc-carousel"
      data-active={activeItem}
    >
      <div className="gc-inner">
        <fieldset className="gc-controls" aria-label="Carousel controls">
          <legend className="gc-legend">Carousel controls</legend>
          <button
            className="gc-control gc-control-prev"
            aria-label="Previous"
            aria-controls="abcd-gc-items"
            onClick={prevItem}
          >
            Prev
          </button>
          <button
            className="gc-control gc-control-next"
            aria-label="Next"
            aria-controls="abcd-gc-items"
            onClick={nextItem}
          >
            Next
          </button>
        </fieldset>
        <div className="gc-items" id="abcd-gc-items">
          {loading && <div className="gc-loading">Loading</div>}
          {!loading && !items.length && (
            <div className="gc-empty">No images to show</div>
          )}
          {!loading &&
            !!items.length &&
            items.map((item, index) => {
              const alt = item.alt || item.title;
              const href = item.href || item.src;
              return (
                <div
                  key={item.guid}
                  className={`gc-item ${
                    index === activeItem ? "gc-item--active" : ""
                  }`}
                  aria-label={`Item ${index + 1} of ${items.length}`}
                  aria-roledescription="slide"
                  role="group"
                >
                  <div className="gc-image">
                    <a
                      className="gc-a"
                      href={href}
                      onFocus={(): void => showItem(index)}
                    >
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
