import { OffersList } from '../../components/offers-list/offers-list';
import { CitiesList } from '../../components/cities-list/cities-list';
import { Offer } from '../../types/types';
import { Map } from '../../components/map/map';
import { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeCity } from '../../store/action';
import { SortForm } from '../../components/sort-form/sort-form';
import { SortName } from '../../const';
import { Header } from '../../components/header/header';


export const MainPage = (): JSX.Element => {
  const [selectedPoint, setSelectedPoint] = useState<Offer|null>(null);
  const [selectedSort, setSelectedSort] = useState<SortName>(SortName.Popular);

  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const dispatch = useAppDispatch();

  const currentOffers = useMemo(() => offers.filter((offer) => offer.city.name === currentCity.name), [offers, currentCity]);

  const handleItemHover = (id: string) => {
    const currentPoint = offers.find((offer) => offer.id === id) || null;
    setSelectedPoint(currentPoint);
  };

  const handleSortChange = (variant: SortName) => {
    setSelectedSort(variant);
  };


  const sortedOffers = useMemo(() => {
    switch (selectedSort) {
      case SortName.Low_to_high:
        return currentOffers.toSorted((a, b) => a.price - b.price);
      case SortName.High_to_low:
        return currentOffers.toSorted((a, b) => b.price - a.price);
      case SortName.Top_rated:
        return currentOffers.toSorted((a, b) => b.rating - a.rating);
        break;
      default:
        return currentOffers;
    }
  }, [currentOffers, selectedSort]);

  return (
    <div className="page page--gray page--main">
      <Header/>
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
              <SortForm currentSort={selectedSort} onSortChange={handleSortChange}/>
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
