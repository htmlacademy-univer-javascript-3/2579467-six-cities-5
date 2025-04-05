import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { AppRoute } from '../../const';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';
import { Offer, Review } from '../../types/types';
import { mockOffers } from '../../mocks/offers';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setOffers } from '../../store/action';

type AppProps = {
  reviews: Review[];
  offersNearby: Offer[];
}

export const App = ({ reviews, offersNearby }: AppProps): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(mockOffers));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage reviews={reviews} offersNearby={offersNearby}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
