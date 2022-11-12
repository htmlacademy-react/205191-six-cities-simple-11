import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OffersPage from '../../pages/offers-page/offers-page';
import PageNotPage from '../../pages/not-found/not-found';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {ReviewsType} from '../../types/types-reviews';
import {OffersType} from '../../types/types-offers';
import {CitiesType} from '../../types/types-cities';

type AppProps = {
  offers: OffersType;
  reviews: ReviewsType;
  cities: CitiesType;
}

function App({offers, reviews, cities}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage offers={offers} cities={cities}/>}/>
          <Route path={AppRoute.Login} element={<LoginPage/>}/>
          <Route path={`${AppRoute.Room}/:id`} element={<OffersPage offers={offers} reviews={reviews}/>}/>
          <Route path={'*'} element={<PageNotPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
