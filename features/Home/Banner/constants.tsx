import { BannerItemProps } from './interfaces';
import {MainSliderItemProps} from "./components/MainBannerItem";
import AddSetToCart from "./components/AddSetToCart";

export const MAIN_SLIDES: Omit<MainSliderItemProps, "index" | "products" | "activeSlide">[] = [
  {
    entry: 'Based in Copenhagen',
    title: (
      <>
        Frost & Fjord <br />
        Nordic skin care <br />
        for men{' '}
      </>
    ),
    description: <>Only traditional Nordic ingredients</>,
    button: 'Try daily care set deal',
    addToCartAction: (products) => {
      return <AddSetToCart products={products} text="Try daily care set deal" />
    }
  },
  {
    entry: 'Perfect for the man on the go',
    title: (
      <>
        Frost & Fjord <br />
        Oil-Free Hydrating <br />
        Face Gel{' '}
      </>
    ),
    description: <>Long lasting hydration solution</>,
    button: 'Discover',
    link: '/product/oil-free-hydrating-face-gel'
  },
  {
    entry: '100 % natural origin ingredients',
    title: (
      <>
        Frost & Fjord <br />
        Anti-Age face <br />
        Day Cream{' '}
      </>
    ),
    description: <>Fine lines appear diminished</>,
    button: 'Discover',
    link: '/product/anti-age-face-day-cream'
  },
  {
    entry: 'Hydrating and fresh',
    title: (
      <>
        Frost & Fjord <br />
        Antioxidant
        <br />
        Face Gel Booster
      </>
    ),
    description: <>Nordic glow and 99 % natural origin ingredients</>,
    button: 'Discover',
    link: '/product/antioxidant-face-gel-booster'
  },
  {
    entry: 'Cleans without clogging pores',
    title: (
      <>
        Frost & Fjord <br />
        Facial
        <br />
        Cleanser
      </>
    ),
    description: <>Mousse texture Removes excess oil</>,
    button: 'Discover',
    link: '/product/facial-cleanser'
  }
];

export const SECONDARY_SLIDES: BannerItemProps[][] = [
  [
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/men-only_png.webp?v=1699093897",
      alt: 'only men banner image',
      priority: true,
      title: 'Men only',
      link: '/product/anti-age-day-cream'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-complex_png.webp?v=1699093898",
      alt: 'anti age complex image',
      priority: true,
      title: 'Anti-age complex',
      link: '/product/anti-age-day-cream'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/hydrading-formula_png.webp?v=1699093898",
      alt: 'hydrating formula image',
      priority: false,
      title: 'Hydrating formula',
      link: '/product/antioxidant-ginkgo-gel-booster'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/STUDIO_WHITE_png.webp?v=1699094174",
      alt: 'moisture boost image',
      priority: true,
      title: 'Moisture boost',
      link: '/product/antioxidant-ginkgo-gel-booster'
    }
  ],
  [
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/oil-free-hydrationg-face-gel_png.webp?v=1699093897",
      alt: 'oil free hydration face gel image',
      priority: true,
      link: '/product/oil-free-hydrating-gel'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/man-in-a-forest-looking-in-camera_png.webp?v=1699093897",
      alt: 'main in a forest looking in camera',
      priority: true,
      link: '/product/oil-free-hydrating-gel'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/oil-free-hydrationg-face-gel-on-grass_png.webp?v=1699093898",
      alt: 'oil free hydration face gel on grass',
      priority: true,
      link: '/product/oil-free-hydrating-gel'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/oil-free-hydrationg-face-gel-on-tree_png.webp?v=1699093897",
      alt: 'oil free hydration face gel on tree',
      priority: true,
      link: '/product/oil-free-hydrating-gel'
    }
  ],
    [
      {
        src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face-day-cream_png.webp?v=1699093898",
        alt: 'anti age face day cream product',
        priority: true,
        link: '/product/anti-age-day-cream'
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/man-with-earing-looking-in-camera_png.webp?v=1699093897",
        alt: 'man with earring looking in camera',
        priority: true,
        link: '/product/anti-age-day-cream'
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face-day-cream-on-tree_png.webp?v=1699093897",
        alt: 'anti age face day cream on tree product',
        priority: true,
        link: '/product/anti-age-day-cream'
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/anti-age-face-day-cream-on-grass_png.webp?v=1699093898",
        alt: 'anti age face day cream on grass product',
        priority: true,
        link: '/product/anti-age-day-cream'
      }
    ],
  [
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/antioxidant-face-gel-booster_png.webp?v=1699093898",
      alt: 'antioxidant face gel booster product',
      priority: true,
      link: '/product/antioxidant-ginkgo-gel-booster'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/man-looking-in-a-sky_png.webp?v=1699093898",
      alt: 'man looking in a sky',
      priority: true,
      link: '/product/antioxidant-ginkgo-gel-booster'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/antioxidant-face-gel-booster-on-grass_png.webp?v=1699093897",
      alt: 'antioxidant face gel booster on grass product',
      priority: true,
      link: '/product/antioxidant-ginkgo-gel-booster'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/antioxidant-face-gel-booster-on-tree_png.webp?v=1699093898",
      alt: 'antioxidant face gel booster on tree product',
      priority: true,
      link: '/product/antioxidant-ginkgo-gel-booster'
    }
  ],
  [
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/facial-cleaner_png.webp?v=1699093898",
      alt: 'facial cleaner product',
      priority: true,
      link: '/product/purifying-mousse'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/wet-man-looking-in-camera_png.webp?v=1699093898",
      alt: 'wet man looking in camera',
      priority: true,
      link: '/product/purifying-mousse'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/facial-cleaner-on-tree_png.webp?v=1699093898",
      alt: 'facial cleaner on tree product',
      priority: true,
      link: '/product/purifying-mousse'
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0755/1906/6456/files/facial-cleaner-on-grass_png.webp?v=1699093898",
      alt: 'facial cleaner on grass product',
      priority: true,
      link: '/product/purifying-mousse'
    }
  ]
];

export const SLIDER_DESCRIPTIONS = [
  'Softer and fresh skin with 100 % natural origin ingredients',
  'Protects skin against pollution and radicals',
  'Protects skin against pollution and radicals',
  "It's designed to effortlessly clean your face and keep your skin hydrated"
];
