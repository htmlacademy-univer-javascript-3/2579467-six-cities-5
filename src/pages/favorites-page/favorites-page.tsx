import { Link } from 'react-router-dom';
import { OffersList } from '../../components/offers-list/offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Header } from '../../components/header/header';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-action';
import { getFavoritesByCity } from '../../helpers';

export const FavoritesPage = (): JSX.Element => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const favorites = useAppSelector((state) => state.favorites.favoritesOffers);

  const favoritesByCity = getFavoritesByCity(favorites);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(([city, offer]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="/">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <OffersList offers={offer} variant="favorites" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};
