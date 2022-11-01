import Sorting from './sorting/sorting';
import Map from './map/map';
import ListOffers from './list-offer/list-offers';

function Cities({offers}) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2><b className="places__found">{offers} places to stay in Amsterdam</b>
          <Sorting/>
          <div className="cities__places-list places__list tabs__content">
            <ListOffers/>
          </div>
        </section>
        <div className="cities__right-section">
          <Map/>
        </div>
      </div>
    </div>

  );
}

export default Cities;


