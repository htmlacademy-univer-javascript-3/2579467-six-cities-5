import { OffersList } from '../../components/offers-list/offers-list';
import { CitiesList } from '../../components/cities-list/cities-list';
import { Offer } from '../../types/types';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { Map } from '../../components/map/map';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeCity } from '../../store/action';
import { SortForm } from '../../components/sort-form/sort-form';
import { Sort } from '../../types/types';
import { SortName } from '../../const';


export const MainPage = (): JSX.Element => {
  const [selectedPoint, setSelectedPoint] = useState<Offer|null>(null);
  const [selectedSort, setSelectedSort] = useState<Sort>(SortName.Popular);
  const [sortedOffers, setSortedOffers] = useState<Offer[]>([]);

  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const dispatch = useAppDispatch();

  const currentOffers = useMemo(() => offers.filter((offer) => offer.city.name === currentCity.name), [offers, currentCity]);

  const handleItemHover = (id: string) => {
    const currentPoint = offers.find((offer) => offer.id === id) || null;
    setSelectedPoint(currentPoint);
  };

  const handleSortChange = (variant: Sort) => {
    setSelectedSort(variant);
  };

  useEffect(() => {
    switch (selectedSort) {
      case SortName.Low_to_high:
        setSortedOffers(currentOffers.toSorted((a, b) => a.price - b.price));
        break;
      case SortName.High_to_low:
        setSortedOffers(currentOffers.toSorted((a, b) => b.price - a.price));
        break;
      case SortName.Top_rated:
        setSortedOffers(currentOffers.toSorted((a, b) => b.rating - a.rating));
        break;
      default:
        setSortedOffers(currentOffers);
    }
  }, [currentOffers, selectedSort]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onClick={(city) => {
              dispatch(changeCity(city));
            }}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <SortForm currentSort={selectedSort} onClick={handleSortChange}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={sortedOffers}
                  onMouseEnter={handleItemHover}
                  onMouseLeave={() => setSelectedPoint(null)}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={currentCity}
                  points={currentOffers}
                  selectedPoint={selectedPoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
