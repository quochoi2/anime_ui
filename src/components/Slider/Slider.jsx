const SlideShow = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__slider">
          <div
            className="hero__items set-bg"
            style={{ backgroundImage: 'url("/img/hero/hero-1.jpg")' }}
            data-setbg="/img/hero/hero-1.jpg"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="z-10 text-white">
                  <div className="label mb-[30px] w-max bg-white px-2 py-1 text-red-600">
                    Adventure
                  </div>
                  <h2 className="text-[40px] font-bold">
                    Fate / Stay Night: Unlimited Blade Works
                  </h2>
                  <p className="mb-2 py-[15px] text-white">
                    After 30 days of travel across the world...
                  </p>
                  <button className="">
                    <span className="rounded-md bg-red-600 px-3 py-2 uppercase text-white">
                      Watch Now
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
