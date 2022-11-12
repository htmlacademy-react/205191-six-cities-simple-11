import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import reviewsMock from './mocks/mocks-reviews';
import offersMock from './mocks/mocks-offers';
import citiesMock from './mocks/mocks-cities';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offers={offersMock}
      reviews={reviewsMock}
      cities={citiesMock}
    />
  </React.StrictMode>,
);
