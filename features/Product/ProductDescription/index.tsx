import { SolidButton } from '../../../components/uiKit/Button/Button';
import Accordion from './components/Accordion';
import CallToAction from '../../Home/CallToAction';

const ProductDescription = () => {
  return (
    <section>
      <div className="px-4">
        <h1 className="mb-4 font-header text-4xl font-semibold uppercase leading-10 text-neutral-100">
          Anti-Age face Day Cream
        </h1>
        <p className="mb-4 font-medium leading-6 text-neutral-100">€59.00</p>
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium leading-4">Quantity</p>
          <input type="text" />
        </div>
        <SolidButton text="Add to shopping bag" className="mb-6 w-full justify-center" />
        <div className="mb-6">
          <p className="mb-4 text-sm font-medium leading-5">50 ml 1.7 fl. Oz</p>
          <p className="text-sm leading-5">
            Introducing our premium anti-age face cream, tailored for men who keep it simple and
            effective. Enriched with a breakthrough marine ingredient, this formula works wonders to
            improve skin texture for a smoother look. Customized for anti-aging, it uses special
            hyaluronic acid to deeply moisturize, promoting a youthful and revitalized appearance.
            Watch fine lines fade and your skin becomes firmer with a radiant glow. For best
            results, apply this custom anti-age cream on clean skin and step up your skin confidence
            game
          </p>
          {/* TODO: Only for markup */}
          <p className="mt-4 text-sm leading-5">AROMA: Natural with few floral note</p>
        </div>
        <div className="mb-16">
          <Accordion title="Benefits">
            <ul className="list-disc pl-5 text-sm leading-5">
              <li>Anti age formula for youthful and revitalized appearance</li>
              <li>Skin feels firmer</li>
              <li>Fine lines appear diminished</li>
              <li>100 % natural origin ingredients</li>
            </ul>
          </Accordion>
          <Accordion title="Ingredients" />
          <Accordion title="Certification" />
        </div>
      </div>
      <div className="mb-16">
        <CallToAction />
      </div>
    </section>
  );
};

export default ProductDescription;
