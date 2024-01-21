import { NextRouter } from "next/router";
export const tracks = {
  data: [
    {
      id: 2484345151,
      title: "Me Leva Pra Casa / Escrito Nas Estrelas / Saudade (Ao Vivo)",
      title_short: "Me Leva Pra Casa / Escrito Nas Estrelas / Saudade",
      title_version: "(Ao Vivo)",
      link: "https://www.deezer.com/track/2484345151",
      duration: 265,
      rank: 984813,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        "https://cdns-preview-f.dzcdn.net/stream/c-fc8d0603ab14606a0800d0a9b28da773-1.mp3",
      md5_image: "8a5969c54ce508b7704cd87d72e364ab",
      position: 1,
      artist: {
        id: 11242224,
        name: "Lauana Prado",
        link: "https://www.deezer.com/artist/11242224",
        picture: "https://api.deezer.com/artist/11242224/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/31d3a65c9261ffb80fe87d86bb8030a4/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/31d3a65c9261ffb80fe87d86bb8030a4/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/31d3a65c9261ffb80fe87d86bb8030a4/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/31d3a65c9261ffb80fe87d86bb8030a4/1000x1000-000000-80-0-0.jpg",
        radio: true,
        tracklist: "https://api.deezer.com/artist/11242224/top?limit=50",
        type: "artist",
      },
      album: {
        id: 496289661,
        title: "Raiz Goiânia (Ao Vivo)",
        cover: "https://api.deezer.com/album/496289661/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/8a5969c54ce508b7704cd87d72e364ab/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/8a5969c54ce508b7704cd87d72e364ab/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/8a5969c54ce508b7704cd87d72e364ab/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/8a5969c54ce508b7704cd87d72e364ab/1000x1000-000000-80-0-0.jpg",
        md5_image: "8a5969c54ce508b7704cd87d72e364ab",
        tracklist: "https://api.deezer.com/album/496289661/tracks",
        type: "album",
      },
      type: "track",
    },
  ],
  total: 1,
};

export const createMockRouter = (router: Partial<NextRouter>) => {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
};
