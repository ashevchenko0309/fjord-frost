import MobilePresentation from './components/MobilePresentation';

const Reviews = () => {
  return (
    <section className="py-16 lg:py-32 xl:pl-24 xl:py-40">
      <h2 className="mb-8 text-center font-header text-4xl font-semibold leading-10 md:mb-12 md:text-5xl md:leading-tight lg:mb-16">
        Men about <br className="lg:hidden" /> Frost & Fjord skin care
      </h2>
      <div className="pl-4 lg:pl-20 xl:pl-0">
          <MobilePresentation />
      </div>
    </section>
  );
};

export default Reviews;
