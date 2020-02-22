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

## Pixabay Carousel

As well as a low-level carousel, this repository also provides a `PixabayCarousel` component, which automatically searches Pixabay for a given query and displays the results. An example is given in the "documentation" project.

## Thoughts on this projects

There are many areas for improvement, so here are some bullet pointa for discussion:

- Error handling. There isn't any in the PixabayCarousel.
  - Network errors
  - Data errors
  - Should use error boundary usage in case of a runtime exception / etc.
- In fact there should be a properly abstracted "pixabay api" handler, probably based on a generic "data loading" handler so that you could add more APIs in the future.
- Security. OMG, I've got an API key hard coded into this thing. I don't do any filtering of the user's input.
- Documentation. Ideally this would use Storybook or similar to create a much more pleasant documentation experience.
  - Also the "documentation" package could be auto-deployed to "Github Pages"
  - There should be proper code snippets with each of the examples.
  - The READMEs in the carousel packages themselves should be comprehensive enough to not necessarily need anything, full API docs & basic example.
- Styling
  - I wanted to see what I could do with "pure css", and not using any runtime loader
  - This is quite nice, and I think that the example demonstrates that with some thought it's possible to create a reasonably configurable component with css variables
  - Obviously in the real world, this tends to be a lot easier and more scalable with Sass / Styled components
- Testing
  - There are some untested features, especially of the pixabay carousel
  - Although coverage generation is supported, I haven't actually made it happen as part of the build
- CI / CD
  - For a small project these days, I would probably use GitHub Actions for auto-running the linting, testing, building, and _possibly_ even publishing for something this straightforward.
- Better Carousel Component API
  - The API is pretty dumbed down, and could definitely do with a rethink
  - In classic React style, you could in fact provide the option to "use your own components", for example for the contents of each Slide. The project would probably do well to have a sensible "batteries included" default for that, but it would be really nice to be able to get more in the way of data from something like Pixabay and then decide how you want each slide laid out.

```jsx
<PixabayCarousel slide={MyCustomSlide} search="goose" apiKey={API_KEY} />
```

- An alternative would be to break up the rendering more, so that you are required to provide your own render func, and then recompose parts as you see fit - you can see this style in things like Downshift:

```jsx
<PixabayCarousel apiKey={API_KEY} search="goose">{
  ({ items, activeIndex, isLoading, itemsContainerProps, controlsProps }) => (
    <>
      <PixabayControls {...controlsProps} />
      <PixabayCarouselItems {...itemsContainerProps}>
        {items.map(item => (<MySlide item={item} />) )}
      </PixabayCarouselItems>
    <>
  )}
```
