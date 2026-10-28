// Stock photos from Unsplash (free to use). To use your own photos,
// put them in /public/images and change `src` to "/images/your-file.jpg".

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const images = {
  hero: {
    // src: unsplash("1748106347454-f7e312a8b1fd"),
    src: "/images/home-hero-2.jpg",
    alt: "Modern building facade with strong light and shadow",
  },
  towers: {
    // src: unsplash("1760036275140-d32083005255"),
    src: "/images/home-about.png",
    alt: "Contemporary apartment building with horizontal lines",
  },
  windows: {
    src: unsplash("1759455456560-4c523b3f81b6"),
    alt: "Close view of a building with a repeating window pattern",
  },
  night: {
    // src: unsplash("1768758925977-6942e9bfade1"),
    src: "/images/cta.jpeg",
    alt: "Modern building with rows of windows",
  },
  about: {
    src: "/images/about-bg.jpg",
    alt: "Modern building with rows of windows",
  },
  story: {
    src: "/images/about-story.jpg",
    alt: "Modern building with rows of windows",
  },
  services: {
    src: "/images/services-bg.jpg",
    alt: "Modern building with rows of windows",
  },
    contact: {
    src: "/images/contact-bg.jpg",
    alt: "Modern building with rows of windows",
  },
};
