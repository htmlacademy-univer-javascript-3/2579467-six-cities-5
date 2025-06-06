import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logoutAction } from '../../store/api-action';

export const Header = () => {
  const userData = useAppSelector((state) => state.auth.userData);

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.auth.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const favoritesOffers = useAppSelector((state) => state.favorites.favoritesOffers);

  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isAuthorized ? (
                  <>
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">{userData?.email}</span>
                        <span className="header__favorite-count">{favoritesOffers.length}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="#" onClick={handleSignOut}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Login}>
                      <span className="header__signout">Sign in</span>
                    </Link>
                  </li>
                )
              }

            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

