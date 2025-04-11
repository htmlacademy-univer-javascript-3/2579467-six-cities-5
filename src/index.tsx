import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.tsx';
import { MockReviews } from './mocks/reviews.ts';
import { mockOffersNearby } from './mocks/offers-nearby.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { fetchOfferAction } from './store/api-action.ts';
import { ErrorMessage } from './components/error-message/error-message';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App
        reviews={MockReviews}
        offersNearby={mockOffersNearby}
      />
    </Provider>
  </React.StrictMode>
);


