const Comment = () => {
  return (
    <div className="col-lg-8 col-md-8">
      <div className="anime__details__review">
        <div className="section-title">
          <h5>Reviews</h5>
        </div>
        <div className="anime__review__item">
          <div className="anime__review__item__pic">
            <img
              src="/img/anime/review-1.jpg"
              alt
              style={{
                backgroundImage: 'url("/img/anime/review-1.jpg")',
              }}
            />
          </div>
          <div className="anime__review__item__text">
            <h6>
              Chris Curry - <span>1 Hour ago</span>
            </h6>
            <p>
              whachikan Just noticed that someone categorized this as belonging
              to the genre demons LOL
            </p>
          </div>
        </div>
        <div className="anime__review__item">
          <div className="anime__review__item__pic">
            <img
              src="/img/anime/review-2.jpg"
              alt
              style={{
                backgroundImage: 'url("/img/anime/review-2.jpg")',
              }}
            />
          </div>
          <div className="anime__review__item__text">
            <h6>
              Lewis Mann - <span>5 Hour ago</span>
            </h6>
            <p>Finally it came out ages ago</p>
          </div>
        </div>
        <div className="anime__review__item">
          <div className="anime__review__item__pic">
            <img
              src="/img/anime/review-3.jpg"
              alt
              style={{
                backgroundImage: 'url("/img/anime/review-3.jpg")',
              }}
            />
          </div>
          <div className="anime__review__item__text">
            <h6>
              Louis Tyler - <span>20 Hour ago</span>
            </h6>
            <p>Where is the episode 15 ? Slow update! Tch</p>
          </div>
        </div>
        <div className="anime__review__item">
          <div className="anime__review__item__pic">
            <img
              src="/img/anime/review-4.jpg"
              alt
              style={{
                backgroundImage: 'url("/img/anime/review-4.jpg")',
              }}
            />
          </div>
          <div className="anime__review__item__text">
            <h6>
              Chris Curry - <span>1 Hour ago</span>
            </h6>
            <p>
              whachikan Just noticed that someone categorized this as belonging
              to the genre demons LOL
            </p>
          </div>
        </div>
        <div className="anime__review__item">
          <div className="anime__review__item__pic">
            <img
              src="/img/anime/review-5.jpg"
              alt
              style={{
                backgroundImage: 'url("/img/anime/review-5.jpg")',
              }}
            />
          </div>
          <div className="anime__review__item__text">
            <h6>
              Lewis Mann - <span>5 Hour ago</span>
            </h6>
            <p>Finally it came out ages ago</p>
          </div>
        </div>
        <div className="anime__review__item">
          <div className="anime__review__item__pic">
            <img
              src="/img/anime/review-6.jpg"
              alt
              style={{
                backgroundImage: 'url("/img/anime/review-6.jpg")',
              }}
            />
          </div>
          <div className="anime__review__item__text">
            <h6>
              Louis Tyler - <span>20 Hour ago</span>
            </h6>
            <p>Where is the episode 15 ? Slow update! Tch</p>
          </div>
        </div>
      </div>
      <div className="anime__details__form">
        <div className="section-title">
          <h5>Your Comment</h5>
        </div>
        <form action="#">
          <textarea placeholder="Your Comment" defaultValue={""} />
          <button type="submit">
            <i className="fa fa-location-arrow" /> Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
