import { GCItem } from ".";

// k = 9656065-a4094594c34f9ac14c7fc4c39
export const getQueryUrl = (
  k: string,
  q: string,
  imageType = "photo"
): string => {
  return `https://pixabay.com/api/?key=${k}&image_type=${imageType}&q=${q}`;
};

export const runQuery = async (
  apiKey: string,
  query: string,
  imageType: string,
  fetcher = fetch
): Promise<GCItem[]> => {
  const url = getQueryUrl(apiKey, query, imageType);
  const response = await fetcher(url);
  const results = await response.json();
  const items: GCItem[] = results.hits.slice(0, 6).map((result: any) => {
    return {
      guid: `${result.id}`,
      src: result.webformatURL,
      title: `By ${result.user}, ${result.likes} likes`
    };
  });
  return items;
};
