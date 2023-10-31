import Image from 'next/image';
import ForestMobileImage from '../../../assets/about/forest-mobile.png';
import PlantMobileImage from '../../../assets/about/plant-mobile.png';
import ManWithCapMobileImage from '../../../assets/about/man-with-cap-mobile.png';
import ForestImage from '../../../assets/about/forest.png';
import PlantImage from '../../../assets/about/plant.png';
import ManWithCapImage from '../../../assets/about/man-with-cap.png';
import { WhiteLogo } from '../../../components/icons/logo';

const About = () => {
  return (
    <section className="py-16 lg:px-20 lg:py-32 xl:px-44 xl:py-40">
      <div className="mb-11 md:mb-16 md:grid md:grid-cols-2 md:gap-4 lg:mb-28 lg:gap-12 xl:mb-40 xl:gap-20">
        <div className="mb-10 grid grid-cols-12 gap-3 px-4 md:order-1 md:mb-0 md:pr-6 lg:px-0">
          <div className="col-span-1 flex flex-col items-center gap-4">
            <p className="-rotate-90 pr-2 font-header text-lg font-light text-neutral-40 xl:text-xl">
              OUR
            </p>
            <div className="h-full w-px bg-neutral-40"></div>
          </div>
          <div className="md col-span-11">
            <h2 className="mb-4 font-header text-4xl font-semibold leading-10 xl:mb-6 xl:text-5xl">
              Story
            </h2>
            <div className="text-sm leading-5 text-neutral-80 xl:text-base xl:leading-6">
              <p className="mb-4">
                Frost & Fjord, a Nordic skin care brand for men based in Copenhagen. Our brand
                values reflect our commitment to natural, sustainable and effective skin care
                inspired by the beauty and heritage of the Nordic region.
              </p>
              <p>
                At Frost & Fjord, we value simplicity and elegance in both our product design and
                packaging, reflecting the minimalist and stylish Nordic aesthetic. We believe in
                transparency and honesty, ensuring that our customers know exactly what they are
                putting on their skin
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:h-full xl:h-full">
          <WhiteLogo className="absolute left-1/2 top-1/2 z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2" />
          <Image
            className="hidden h-full w-full object-cover lg:block"
            src={ForestImage}
            height={500}
            alt="forest background"
          />
          <Image
            className="h-full w-full object-cover md:h-full md:object-[0%_65%] lg:hidden"
            src={ForestMobileImage}
            height={500}
            alt="forest background"
          />
        </div>
      </div>
      <div className="mb-11 md:mb-16 md:grid md:grid-cols-2 md:gap-4 lg:mb-28 lg:gap-12 xl:mb-40 xl:gap-20">
        <div className="mb-10 grid grid-cols-12 gap-3 px-4 md:mb-0 md:pl-6 lg:px-0">
          <div className="col-span-1 flex flex-col items-center gap-4">
            <p className="-rotate-90 pr-2 font-header text-lg font-light text-neutral-40 xl:text-xl">
              OUR
            </p>
            <div className="h-full w-px bg-neutral-40"></div>
          </div>
          <div className="col-span-11">
            <h2 className="xs:mb-6 mb-4 font-header text-4xl font-semibold leading-10 xl:text-5xl">
              Made To Order
            </h2>
            <div className="text-sm leading-5 text-neutral-80 xl:text-base xl:leading-6">
              <p className="mb-4">
                At Frost & Fjord, sustainability is at the core of our brand's ethos. We understand
                the importance of preserving the environment for generations to come. That's why
                we've taken a unique approach to skincare by embracing the "Made To Order"
                philosophy. By crafting our products only when you order them, we reduce waste and
                minimize our carbon footprint.
              </p>
              <p>
                This commitment to sustainability extends beyond our production process, as we
                carefully select eco-friendly ingredients and packaging materials. We believe that
                taking care of your skin shouldn't come at the expense of our planet, and we're
                proud to offer you a skincare experience that's as green as the Nordic landscapes
                that inspire us. Join us on a journey towards a more sustainable and radiant future
                for your skin and the planet.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="hidden h-full w-full object-cover lg:block"
            src={PlantImage}
            height={500}
            alt="plant background"
          />
          <Image
            className="w-full object-cover md:h-full md:object-[80%_0%] lg:hidden"
            src={PlantMobileImage}
            height={500}
            alt="plant background"
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4 lg:gap-12 xl:gap-20">
        <div className="mb-10 grid grid-cols-12 gap-3 px-4 md:order-1 md:mb-0 md:pr-6 lg:px-0">
          <div className="col-span-1 flex flex-col items-center gap-4">
            <p className="-rotate-90 pr-2 font-header text-lg font-light text-neutral-40 xl:text-xl">
              OUR
            </p>
            <div className="h-full w-px bg-neutral-40"></div>
          </div>
          <div className="col-span-11">
            <h2 className="mb-4 font-header text-4xl font-semibold leading-10 xl:mb-6 xl:text-5xl">
              Values
            </h2>
            <div className="text-sm leading-5 text-neutral-80 xl:text-base xl:leading-6">
              <p className="mb-4">
                We believe in using the highest quality natural and organic ingredients to deliver
                long-lasting results for men's skin, while minimizing our environmental impact. Our
                products incorporate traditional Nordic ingredients known for their skin benefits
                and our packaging is 100 % recycling.
              </p>
              <p>
                Explore our products to discover our range of natural, sustainable, and effective
                skin care products designed specifically for men. We are committed to providing the
                highest quality products and excellent customer service, so with us you can trust
                that your skin is in good hands
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="hidden w-full h-full object-cover lg:block"
            src={ManWithCapImage}
            height={500}
            alt="man with a cap"
          />
          <Image
            className="w-full object-cover object-[0%_55%] md:h-full md:object-[50%_55%] lg:hidden"
            src={ManWithCapMobileImage}
            height={500}
            alt="man with a cap"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
