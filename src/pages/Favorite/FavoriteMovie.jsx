import { Link } from "react-router-dom";

const FavoritePage = () => {
  // const lastPostIndex = selectedPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentMovies = movies?.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home" /> Home
                </Link>
                <Link to="/">Genre</Link>
                {/* <span>{genreName}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="product__page__content">
                <div className="product__page__title">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-6">
                      <div className="section-title">
                        {/* <h4>{genreName}</h4> */}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="product__page__filter">
                        <p>Order by:</p>
                        <select>
                          <option value>A-Z</option>
                          <option value>1-10</option>
                          <option value>10-50</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* {currentMovies?.length > 0 ? (
                    currentMovies?.map((movie) => (
                      <AnimeItem
                        key={movie.id}
                        id={movie.id}
                        name={movie.name}
                        trend_id={movie.trend_id}
                        genres={movie.genres}
                        seasons={movie.seasons}
                        episodeCount={movie.episodeCount}
                      />
                    ))
                  ) : (
                    <h1>Nothing is here</h1>
                  )} */}
                </div>
              </div>
              {/* <Pagination
                totalPosts={movies.length}
                postsPerPage={postsPerPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
            </div>
            {/* <AnimeRight /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavoritePage;
