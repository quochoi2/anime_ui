import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trendService } from "~/services/trendService";

import AnimeItem from "~/components/AnimeItem/AnimeItem";
import SlideShow from "~/components/Slider/Slider";
import AnimeRight from "~/components/AnimeRight/AnimeRight";

const HomePage = () => {
  const [movieTrend, setMovieTrend] = useState();

  const fetchData = () => {
    trendService
      .getAllMovieAndTrend()
      .then((res) => {
        console.log(res);
        setMovieTrend(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!movieTrend) {
    return <div>Nothing is here</div>;
  }

  return (
    <>
      <SlideShow />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {movieTrend.map((trend) => {
                return (
                  <div key={trend.id} className="trending__product">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                          <h4>{trend.name}</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="btn__all">
                          <Link
                            to={"/trend/" + trend.id}
                            className="primary-btn"
                          >
                            View All <span className="arrow_right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {trend.movies.slice(0, 6).map((movie) => (
                        <AnimeItem
                          key={movie.id}
                          id={movie.id}
                          name={movie.name}
                          trend_id={trend.id}
                          genres={movie.genres}
                          seasons={movie.seasons}
                          episodeCount={movie.episodeCount}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <AnimeRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
