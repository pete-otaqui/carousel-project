/* eslint-disable react/prop-types */
import React, { FC, useState, useRef } from "react";

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
};

export const GenericCarousel: FC<GenericCarouselProps> = ({
  items,
  initialIndex = 0
}) => {
  const [activeItem, setActiveItem] = useState(initialIndex);
  const itemsRef = useRef<HTMLDivElement>(null);
  const showItem = (index: number): void => {
    setActiveItem(index);
    const { current } = itemsRef;
    if (!current) return;
    const a = current.querySelector<HTMLAnchorElement>(
      `.gc-item:nth-child(${index + 1}) a`
    );
    if (!a) return;
    a.focus({ preventScroll: true });
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
        <div className="gc-items" id="abcd-gc-items" ref={itemsRef}>
          {items.map((item, index) => {
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
