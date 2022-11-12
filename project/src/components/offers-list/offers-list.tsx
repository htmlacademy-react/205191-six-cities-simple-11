import {useState} from 'react';
import Offer from './offer/offer';
import Map from '../map/map';
import {TypesCities} from '../../types/types-cities';
import {OffersType, TypesOffers} from '../../types/types-offers';

type OffersListProps = {
  offers: OffersType;
  currentCity: TypesCities;
}

function Offers({offers, currentCity}: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TypesOffers | undefined>(undefined);

  const handleActiveCard = (card: TypesOffers):void => {
    setActiveCard(card);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--closed">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer) => (
                <article className="cities__card place-card" key={offer.id} onMouseOver={() => handleActiveCard(offer)}>
                  <Offer offer={offer} cardClass="cities"/>
                </article>))
            }
          </div>
        </section>
        <div className="cities__right-section">
          <Map offers={offers} activeCard={activeCard} city={currentCity} classMap="cities"/>
        </div>
      </div>
    </div>
  );
}

export default Offers;
