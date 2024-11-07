import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Search from "~/components/Search/Search";
import { authService } from "~/services/authService";
import { genreService } from "~/services/genreService";
import { logout } from "~/store/slices/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo, isLoggedIn } = useSelector((state) => state.user);
  const [genres, setGenres] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchData = () => {
    genreService
      .getAllNameOfGenre()
      .then((res) => {
        setGenres(res);
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());

      navigate("/login");
      setShowDropdown(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".user-info")) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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
            <div className="header__right flex items-center justify-end">
              <Search />
              {isLoggedIn ? (
                <div className="user-info relative flex select-none">
                  <div
                    className="flex cursor-pointer items-center"
                    onClick={() => {
                      setShowDropdown(!showDropdown);
                    }}
                  >
                    <img
                      src={userInfo.image || "/images/user/user-01.png"}
                      alt="User Avatar"
                      className="user-avatar h-[35px] w-[35px]"
                    />
                    <span className="ml-[6px] text-white">{userInfo.name}</span>
                  </div>

                  {showDropdown && (
                    <ul className="absolute right-0 top-[35px] z-10 mt-2 w-max rounded bg-white py-2 shadow-lg">
                      <li>
                        <button
                          onClick={() => navigate("/profile")}
                          className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </button>
                      </li>
                      <li className="">
                        <button
                          onClick={() => navigate("/favorite-movie")}
                          className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        >
                          Favorite Movies
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <span className="icon_profile" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap" />
      </div>
    </header>
  );
};

export default Header;
