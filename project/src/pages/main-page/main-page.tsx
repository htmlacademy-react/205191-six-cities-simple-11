import { Helmet } from 'react-helmet-async';
import Logo from '../../components/header/logo';
import User from '../../components/header/user';
import Tabs from '../../components/main/tabs';
import OffersList from '../../components/offers-list/offers-list';
import {OffersType} from '../../types/types-offers';
import {CitiesType} from '../../types/types-cities';
type MainPageProps = {
  offers: OffersType;
  cities: CitiesType;
};

function MainPage({offers, cities}: MainPageProps): JSX.Element {
  const currentCity = cities[0];
  return (
    <>
      <Helmet>
        <title>6 cities | Home</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <User/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <OffersList offers={offers} currentCity={currentCity}/>
      </main>
    </>
  );
}

export default MainPage;
