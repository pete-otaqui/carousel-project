# Generic Carousel Test

This project is a demonstration of building a Carousel component.

It has been built as a publishable `react` component, and also a documentation
site, in a monorepo using `yarn`, `lerna` and Typescript.

## Developing this project

From the root, run:

```bash
yarn dev
```

That will start up the compilation of the reusable library, and start the
`create-react-app` based documentation project.

## Theoretical usage

Install the carousel as a dependency:

`$ yarn add @otaqui/generic-carousel`

Use it in your react application with Typescript, not forgetting to also get the
CSS:

```ts
import React, { FC } from "react";

import { GenericCarousel, GCItem } from "@otaqui/generic-carousel";

// Assuming babel / webpack "loader" capable of handling CSS:
import "@otaqui/generic-carousel/lib/index.css";

const items: GCItem = [
  { guid: "1234", src: "/images/img-1.jpg", title: "Image 1 title" },
  { guid: "1236", src: "/images/img-2.jpg", title: "Image 2 title" }
];

export const MyComponent: FC = () => {
  return <GenericCarousel items={items} />;
};
```

Or similarly in Javascript:

```js
import React from "react";

import { GenericCarousel } from "@otaqui/generic-carousel";

// Assuming babel / webpack "loader" capable of handling CSS:
import "@otaqui/generic-carousel/lib/index.css";

const items = [
  { guid: "1234", src: "/images/img-1.jpg", title: "Image 1 title" },
  { guid: "1236", src: "/images/img-2.jpg", title: "Image 2 title" }
];

export const MyComponent = () => {
  return <GenericCarousel items={items} />;
};
```

## Customisation

The carousel is styled with pure CSS, and you are free to provide styles with a
higher specificty, or too use CSS Custom Properties (css variables) to control
the styling. See the "documentation" project for morre information and an
example.
