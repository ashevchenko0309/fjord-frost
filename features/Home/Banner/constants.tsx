import { BannerItemProps } from './interfaces';

import OnlyMenImage from '../../../assets/main-slider/men-only.png';
import AntiAgeComplexImage from '../../../assets/main-slider/anti-age-complex.png';
import HydradingFormulaImage from '../../../assets/main-slider/hydrading-formula.png';
import MoistureBoostImage from '../../../assets/main-slider/moisture-boost.png';

import OilFreeHydrationgFaceGelImage from '../../../assets/main-slider/oil-free-hydrationg-face-gel.png';
import ManInAForestLookingInCameraImage from '../../../assets/main-slider/man-in-a-forest-looking-in-camera.png';
import OilFreeHydrationgFaceGelOnGrassImage from '../../../assets/main-slider/oil-free-hydrationg-face-gel-on-grass.png';
import OilFreeHydrationgFaceGelOnTreeImage from '../../../assets/main-slider/oil-free-hydrationg-face-gel-on-tree.png';

import AntiAgeFaceDayCreamImage from '../../../assets/main-slider/anti-age-face-day-cream.png';
import ManWithEaringLookingInCameraImage from '../../../assets/main-slider/man-with-earing-looking-in-camera.png';
import AntiAgeFaceDayCreamOnTreeImage from '../../../assets/main-slider/anti-age-face-day-cream-on-tree.png';
import AntiAgeFaceDayCreamOnGrassImage from '../../../assets/main-slider/anti-age-face-day-cream-on-grass.png';

import AntioxidantFaceGelBoosterImage from '../../../assets/main-slider/antioxidant-face-gel-booster.png';
import ManLookingInASkyImage from '../../../assets/main-slider/man-looking-in-a-sky.png';
import AntioxidantFaceGelBoosterOnGrassImage from '../../../assets/main-slider/antioxidant-face-gel-booster-on-grass.png';
import AntioxidantFaceGelBoosterOnTreeImage from '../../../assets/main-slider/antioxidant-face-gel-booster-on-tree.png';

import FacialCleanerImage from '../../../assets/main-slider/facial-cleaner.png';
import WetManLookingInCameraImage from '../../../assets/main-slider/wet-man-looking-in-camera.png';
import FacialCleanerOnTreeImage from '../../../assets/main-slider/facial-cleaner-on-tree.png';
import FacialCleanerOnGrassImage from '../../../assets/main-slider/facial-cleaner-on-grass.png';

export const MAIN_SLIDES = [
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
    button: 'Try daily care set'
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
    button: 'Discover'
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
    button: 'Discover'
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
    button: 'Discover'
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
    button: 'Discover'
  }
];

export const SECONDARY_SLIDES: BannerItemProps[][] = [
  [
    {
      src: OnlyMenImage,
      alt: 'only men banner image',
      priority: true,
      title: 'Men only'
    },
    {
      src: AntiAgeComplexImage,
      alt: 'anti age complex image',
      priority: true,
      title: 'Anti-age complex'
    },
    {
      src: MoistureBoostImage,
      alt: 'moisture boost image',
      priority: true,
      title: 'Moisture boost'
    },
    {
      src: HydradingFormulaImage,
      alt: 'hydrating formula image',
      priority: true,
      title: 'Hydrating formula '
    }
  ],
  [
    {
      src: OilFreeHydrationgFaceGelImage,
      alt: 'oil free hydration face gel image',
      priority: true,
    },
    {
      src: ManInAForestLookingInCameraImage,
      alt: 'main in a forest looking in camera',
      priority: true,
    },
    {
      src: OilFreeHydrationgFaceGelOnGrassImage,
      alt: 'oil free hydration face gel on grass',
      priority: true,
    },
    {
      src: OilFreeHydrationgFaceGelOnTreeImage,
      alt: 'oil free hydration face gel on tree',
      priority: true,
    }
  ],
    [
      {
        src: AntiAgeFaceDayCreamImage,
        alt: 'anti age face day cream product',
        priority: true,
      },
      {
        src: ManWithEaringLookingInCameraImage,
        alt: 'man with earring looking in camera',
        priority: true,
      },
      {
        src: AntiAgeFaceDayCreamOnTreeImage,
        alt: 'anti age face day cream on tree product',
        priority: true,
      },
      {
        src: AntiAgeFaceDayCreamOnGrassImage,
        alt: 'anti age face day cream on grass product',
        priority: true,
      }
    ],
  [
    {
      src: AntioxidantFaceGelBoosterImage,
      alt: 'antioxidant face gel booster product',
      priority: true,
    },
    {
      src: ManLookingInASkyImage,
      alt: 'man looking in a sky',
      priority: true,
    },
    {
      src: AntioxidantFaceGelBoosterOnGrassImage,
      alt: 'antioxidant face gel booster on grass product',
      priority: true,
    },
    {
      src: AntioxidantFaceGelBoosterOnTreeImage,
      alt: 'antioxidant face gel booster on tree product',
      priority: true,
    }
  ],
  [
    {
      src: FacialCleanerImage,
      alt: 'facial cleaner product',
      priority: true,
    },
    {
      src: WetManLookingInCameraImage,
      alt: 'wet man looking in camera',
      priority: true,
    },
    {
      src: FacialCleanerOnTreeImage,
      alt: 'facial cleaner on tree product',
      priority: true,
    },
    {
      src: FacialCleanerOnGrassImage,
      alt: 'facial cleaner on grass product',
      priority: true,
    }
  ]
];

export const SLIDER_DESCRIPTIONS = [
  'Softer and fresh skin with 100 % natural origin ingredients',
  'Protects skin against pollution and radicals',
  'Protects skin against pollution and radicals',
  "It's designed to effortlessly clean your face and keep your skin hydrated"
];
