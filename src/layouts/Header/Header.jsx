import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "~/components/Search/Search";
import { genreService } from "~/services/genreService";

const Header = () => {
  const [genres, setGenres] = useState([]);

  const fetchData = () => {
    genreService
      .getAllNameOfGenre()
      .then((res) => {
        setGenres(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link to={"/"}>
                <img src="/img/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/">Homepage</Link>
                  </li>
                  <li>
                    <Link to="/genre/1">
                      Genres <span className="arrow_carrot-down" />
                    </Link>
                    <ul className="dropdown grid min-w-max grid-cols-4 gap-2">
                      {genres.map((genre, index) => (
                        <li key={index}>
                          <Link
                            to={"/genre/" + genre.id + "?genre=" + genre.name}
                          >
                            {genre.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <a href="/blog">Our Blog</a>
                  </li>
                  <li>
                    <a href="/">Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <Search />
              <Link to="/login">
                <span className="icon_profile" />
              </Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap" />
      </div>
    </header>
  );
};

export default Header;
