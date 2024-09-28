import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AnimeItem = ({ id, name, trend_id, genres, seasons, episodeCount }) => {
  const firstSeasonImage = seasons.find((season) => season.image !== null);
  const image = firstSeasonImage
    ? firstSeasonImage.image
    : "/img/trending/trend-1.jpg";

  const firstSeasonId = seasons.find((season) => season.id !== null);
  const seasonId = firstSeasonId ? firstSeasonId.id : 1;

  return (
    <Link
      to={`/animeDetail/${trend_id}/${id}/${seasonId}`}
      className="col-lg-4 col-md-6 col-sm-6"
    >
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          data-setbg={image}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        >
          <div className="ep">
            {episodeCount} / {episodeCount}
          </div>
          <div className="comment">
            <i className="fa fa-comments" /> 11
          </div>
          <div className="view">
            <i className="fa fa-eye" /> 9141
          </div>
        </div>
        <div className="product__item__text">
          <ul>
            {genres.map((genre, index) => (
              <li key={index} className="mr-1">
                {genre}
              </li>
            ))}
          </ul>
          <h5>
            <a>{name}</a>
          </h5>
        </div>
      </div>
    </Link>
  );
};

AnimeItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  trend_id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
  ).isRequired,
  episodeCount: PropTypes.number.isRequired,
};

export default AnimeItem;
