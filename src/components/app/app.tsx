import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { AppRoute } from '../../const';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';

type AppProps = {
  cardsNumber: number;
}

const App = ({cardsNumber}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage cardsNumber={cardsNumber}/>}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <FavoritesPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferPage/>}
      />
      <Route
        path="*"
        element={<NotFoundPage/>}
      />
    </Routes>

  </BrowserRouter>
);

export { App };
