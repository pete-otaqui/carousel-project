/* eslint-disable @typescript-eslint/camelcase */
import { runQuery } from "./pixabay-api";

describe("pixabay-api", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFetchMock = (results): any => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fetcher: any = () => {
      return Promise.resolve({
        json: () => Promise.resolve(results)
      });
    };
    return fetcher;
  };

  it("should map results", async () => {
    const fetcher = getFetchMock({
      total: 8756,
      totalHits: 500,
      hits: [
        {
          id: 3077928,
          pageURL:
            "https://pixabay.com/photos/fantasy-beautiful-dawn-sunset-sky-3077928/",
          type: "photo",
          tags: "fantasy, beautiful, dawn",
          previewURL:
            "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_150.jpg",
          previewWidth: 150,
          previewHeight: 84,
          webformatURL:
            "https://pixabay.com/get/55e0d2444350a414f6da8c7dda793e781039dee3564c704c7d2d78d59649c35c_640.jpg",
          webformatWidth: 640,
          webformatHeight: 360,
          largeImageURL:
            "https://pixabay.com/get/55e0d2444350a414f6da8c7dda793e781039dee3564c704c7d2d78d59649c35c_1280.jpg",
          imageWidth: 3840,
          imageHeight: 2160,
          imageSize: 1925809,
          views: 1409328,
          downloads: 688358,
          favorites: 1927,
          likes: 2214,
          comments: 222,
          user_id: 2946451,
          user: "peter_pyw",
          userImageURL:
            "https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg"
        },
        {
          id: 1072828,
          pageURL:
            "https://pixabay.com/photos/green-park-season-nature-outdoor-1072828/",
          type: "photo",
          tags: "green, park, season",
          previewURL:
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_150.jpg",
          previewWidth: 150,
          previewHeight: 84,
          webformatURL:
            "https://pixabay.com/get/57e0d2414250a414f6da8c7dda793e781039dee3564c704c7d2d78d59649c35c_640.jpg",
          webformatWidth: 640,
          webformatHeight: 360,
          largeImageURL:
            "https://pixabay.com/get/57e0d2414250a414f6da8c7dda793e781039dee3564c704c7d2d78d59649c35c_1280.jpg",
          imageWidth: 3456,
          imageHeight: 1944,
          imageSize: 4796428,
          views: 669235,
          downloads: 317137,
          favorites: 1663,
          likes: 1736,
          comments: 209,
          user_id: 1720744,
          user: "Valiphotos",
          userImageURL:
            "https://cdn.pixabay.com/user/2019/03/07/09-34-13-97_250x250.jpg"
        }
      ]
    });
    const results = await runQuery("123", "foo", "photo", fetcher);
    expect(results).toMatchSnapshot();
  });
});
