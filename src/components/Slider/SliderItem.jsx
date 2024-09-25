const SliderItem = () => {
  return (
    // check later
    <div
      className="hero__items set-bg"
      style={{ backgroundImage: 'url("/img/hero/hero-1.jpg")' }}
      data-setbg="/img/hero/hero-1.jpg"
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="hero__text">
            <div className="label">Adventure</div>
            <h2>Fate / Stay Night: Unlimited Blade Works</h2>
            <p>After 30 days of travel across the world...</p>
            <a href="#">
              <span>Watch Now</span> <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;