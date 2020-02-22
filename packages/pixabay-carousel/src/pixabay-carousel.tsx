/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect } from "react";

import { GenericCarousel, GCItem } from "@otaqui/generic-carousel";
import { runQuery } from "./pixabay-api";

export type PixabayCarouselProps = {
  apiKey: string;
  search?: string;
  imageType?: string;
};

export const PixabayCarousel: FC<PixabayCarouselProps> = ({
  apiKey,
  search,
  imageType
}) => {
  const [loading, setIsLoading] = useState(true);
  const [results, setResults] = useState<GCItem[]>([]);
  useEffect(() => {
    const f = async (): Promise<void> => {
      if (search === "") {
        return;
      }
      setIsLoading(true);
      const items = await runQuery(apiKey, search, imageType);
      setResults(items);
      setIsLoading(false);
    };
    f();
  }, [search]);
  return <GenericCarousel items={results} loading={loading} />;
};
