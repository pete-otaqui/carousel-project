# Pixabay Carousel

This project provides a pixabay carousel react component.

## Installation

With npm:

`npm install @otaqui/pixabay-carousel`

Or yarn:

`yarn add @otaqui/pixabay-carousel`

## Usage

### Basic usage, provide a set of data

```tsx
import React from "react";
import { PixabayCarousel, GCItem } from "@otaqui/pixabay-carousel";

import "@otaqui/generic-carousel/lib/index.css";

const API_KEY = "1234';

export default function MyComponent() {
  return (
    <div>
      <PixabayCarousel apiKey={API_KEY} search="human" />
    </div>
  );
}
```

The project provides also provides typescript definitions, which should provide some guidance while using the component.

Note that you must load the css from `@otaqui/generic-carousel/lib/index.css`.
