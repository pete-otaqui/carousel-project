# Generic Carousel

This project provides a generic carousel react component.

## Installation

With npm:

`npm install @otaqui/generic-carousel`

Or yarn:

`yarn add @otaqui/generic-carousel`

## Usage

### Basic usage, provide a set of data

```tsx
import React from "react";
import { GenericCarousel, GCItem } from "@otaqui/generic-carousel";

export default function MyComponent() {
  const items: GCItem[] = [
    {
      guid: "abcdef",
      src: "./images/one.jpg",
      title: "First image",
      href: "./images/one-full-size.jpg"
    },
    {
      guid: "fedcba",
      src: "./images/two.jpg",
      title: "Second image",
      href: "./images/two-full-size.jpg"
    }
  ];
  return (
    <div>
      <GenericCarousel items={items} />
    </div>
  );
}
```

The project provides also provides typescript definitions, which should provide some guidance while using the component.
