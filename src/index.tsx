import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.tsx';
import { MockReviews } from './mocks/reviews.ts';
import { mockOffersNearby } from './mocks/offers-nearby.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={MockReviews}
        offersNearby={mockOffersNearby}
      />
    </Provider>
  </React.StrictMode>
);


