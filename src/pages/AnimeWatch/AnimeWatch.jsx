import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comment from "~/components/Comment/Comment";
import VideoPlayer from "~/components/VideoPlay/VideoPlay";
import { animeWatchService } from "~/services/animeWatchService";

const AnimeWatchPage = () => {
  const { episodeId, seasonId } = useParams();

  const [animeWatch, setAnimeWatch] = useState();
  const [animeList, setAnimeList] = useState();

  const fetchData = useCallback(() => {
    animeWatchService
      .getAnimeById(episodeId)
      .then((res) => {
        setAnimeWatch(res.episode);
      })
      .catch((err) => console.log(err));
  }, [episodeId]);

  const fetchListData = useCallback(() => {
    animeWatchService.getAllEpisodeBySeason(seasonId).then((res) => {
      setAnimeList(res);
    });
  }, [seasonId]);

  useEffect(() => {
    fetchData();
    fetchListData();
  }, [fetchData, fetchListData]);

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
                <a href="#">Anime Watch</a>
                <span>
                  {animeWatch?.name || "Fate Stay Night: Unlimited Blade"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section style={{ paddingTop: "40px" }} className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                style={{ marginBottom: "50px" }}
                className="anime__video__player"
              >
                <VideoPlayer
                  id="demo"
                  publicId="videos/waterfall"
                  posterUrl={animeWatch?.video}
                />
              </div>

              <div className="anime__details__episodes">
                <div className="section-title">
                  <h5>List Name</h5>
                </div>
                {animeList?.length > 0 ? (
                  animeList.map((obj) => (
                    <Link
                      key={obj.id}
                      to={
                        "/animeWatch/" +
                        obj.movie_id +
                        "/" +
                        obj.season_id +
                        "/" +
                        obj.id
                      }
                    >
                      {obj.name}
                    </Link>
                  ))
                ) : (
                  <div>anime episodes list not avalible</div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <Comment />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimeWatchPage;
