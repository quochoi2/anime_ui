import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Comment from "~/components/Comment/Comment";
import { animeDetailService } from "~/services/animeDetailService";

const AnimeDetailPage = () => {
  const { animeId, seasonId } = useParams();

  const [animeDetail, setAnimeDetail] = useState();

  const fetchData = useCallback(() => {
    animeDetailService
      .getAnimeById(animeId, seasonId)
      .then((res) => {
        setAnimeDetail(res);
      })
      .catch((err) => console.log(err));
  }, [animeId, seasonId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="./index.html">
                  <i className="fa fa-home" /> Home
                </a>
                <a href="./categories.html">Anime</a>
                <span>{animeDetail?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="anime-details spad">
        <div className="container">
          <div className="anime__details__content">
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="anime__details__pic set-bg"
                  data-setbg={`${
                    animeDetail?.seasons?.length > 0 &&
                    animeDetail.selectedSeason?.image
                      ? animeDetail.selectedSeason.image
                      : "/img/anime/details-pic.jpg"
                  }`}
                  style={{
                    backgroundImage: `url("${
                      animeDetail?.seasons?.length > 0 &&
                      animeDetail.selectedSeason?.image
                        ? animeDetail.selectedSeason.image
                        : "/img/anime/details-pic.jpg"
                    }")`,
                  }}
                >
                  <div className="comment">
                    <i className="fa fa-comments" /> 11
                  </div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__text">
                  <div className="anime__details__title">
                    {animeDetail?.name ? (
                      <h3 className="text-[28px]">{animeDetail.name}</h3>
                    ) : (
                      <h3 className="text-[28px]">
                        Fate Stay Night: Unlimited Blade
                      </h3>
                    )}
                    <span>フェイト／ステイナイト, Feito／sutei naito</span>
                  </div>
                  <div className="anime__details__rating">
                    <div className="rating">
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o" />
                      </a>
                    </div>
                    <span>1.029 Votes</span>
                  </div>
                  {animeDetail?.descripton != null ? (
                    <p>{animeDetail.descripton}</p>
                  ) : (
                    <p>
                      Every human inhabiting the world of Alcia is branded by a
                      “Count” or a number written on their body. For Hina’s
                      mother, her total drops to 0 and she’s pulled into the
                      Abyss, never to be seen again. But her mother’s last words
                      send Hina on a quest to find a legendary hero from the
                      Waste War - the fabled Ace!
                    </p>
                  )}
                  <div className="anime__details__widget mt-3">
                    <div className="flex flex-wrap">
                      <div className="md:w-1/2 lg:w-1/2">
                        <ul className="mb-4">
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Type:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="text-base text-white"
                            >
                              TV Series
                            </span>
                          </li>
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Studios:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="text-base text-white"
                            >
                              Lerche
                            </span>
                          </li>
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Release date:
                            </span>
                            {animeDetail?.releaseDate ? (
                              <span
                                style={{ width: "70%" }}
                                className="inline-block text-base text-white"
                              >
                                {new Date(
                                  animeDetail.releaseDate,
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            ) : (
                              <span
                                style={{ width: "70%" }}
                                className="text-base text-white"
                              >
                                22th September
                              </span>
                            )}
                          </li>
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Status:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="text-base text-white"
                            >
                              {animeDetail?.isLocked == "unactive"
                                ? "Unlocked"
                                : "Locked"}
                            </span>
                          </li>
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Genres:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="inline-block text-base text-white"
                            >
                              {animeDetail?.genres &&
                              animeDetail.genres.length > 0
                                ? animeDetail.genres.join(", ")
                                : "No genres available"}{" "}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="md:w-1/2 lg:w-1/2">
                        <ul className="mb-4">
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Rating:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="text-base text-white"
                            >
                              8.5 / 161 times
                            </span>
                          </li>
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Duration:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="text-base text-white"
                            >
                              24 min/ep
                            </span>
                          </li>
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Quality:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="text-base text-white"
                            >
                              HD
                            </span>
                          </li>
                          <li className="relative list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Views:
                            </span>
                            <span
                              style={{ width: "70%" }}
                              className="text-base text-white"
                            >
                              131,541
                            </span>
                          </li>
                          <li className="relative flex list-none pl-5 text-sm leading-7 text-white">
                            <span className="inline-block w-28 text-gray-400">
                              Seasons:
                            </span>
                            <span style={{ width: "70%" }}>
                              {animeDetail?.seasons &&
                              animeDetail.seasons.length > 0
                                ? animeDetail.seasons.map((season, index) => (
                                    <Link
                                      to={
                                        "/animeDetail/" +
                                        animeDetail?.trend_id +
                                        "/" +
                                        animeDetail?.id +
                                        "/" +
                                        season.id
                                      }
                                      className="text-base text-white"
                                      key={season.id}
                                    >
                                      {season.name}
                                      {index < animeDetail.seasons.length - 1 &&
                                        ", "}
                                    </Link>
                                  ))
                                : "No seasons available"}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="anime__details__btn">
                    <a href="#" className="follow-btn">
                      <i className="fa fa-heart-o" /> Follow
                    </a>
                    <Link
                      to={
                        "/animeWatch/" +
                        animeDetail?.id +
                        "/" +
                        animeDetail?.selectedSeason?.id +
                        "/" +
                        animeDetail?.selectedSeason?.firstEpisodeId
                      }
                      className="watch-btn"
                    >
                      <span>Watch Now</span> <i className="fa fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Comment />
            <div className="col-lg-4 col-md-4">
              <div className="anime__details__sidebar">
                <div className="section-title">
                  <h5>you might like...</h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg"
                  data-setbg="/img/sidebar/tv-1.jpg"
                  style={{ backgroundImage: 'url("/img/sidebar/tv-1.jpg")' }}
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">Boruto: Naruto next generations</a>
                  </h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg"
                  data-setbg="/img/sidebar/tv-2.jpg"
                  style={{ backgroundImage: 'url("/img/sidebar/tv-2.jpg")' }}
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                  </h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg"
                  data-setbg="/img/sidebar/tv-3.jpg"
                  style={{ backgroundImage: 'url("/img/sidebar/tv-3.jpg")' }}
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">
                      Sword art online alicization war of underworld
                    </a>
                  </h5>
                </div>
                <div
                  className="product__sidebar__view__item set-bg"
                  data-setbg="/img/sidebar/tv-4.jpg"
                  style={{ backgroundImage: 'url("/img/sidebar/tv-4.jpg")' }}
                >
                  <div className="ep">18 / ?</div>
                  <div className="view">
                    <i className="fa fa-eye" /> 9141
                  </div>
                  <h5>
                    <a href="#">
                      Fate/stay night: Heavens Feel I. presage flower
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimeDetailPage;
