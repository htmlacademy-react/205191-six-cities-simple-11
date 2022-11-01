import offersMock from '../../../../mocks/offers';
import Offer from './offer/offer';

function ListOffers() {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersMock.map((item) => (
        <div key={item.id}>
          <Offer
            id={item.id}
            title={item.title}
            image={item.image}
            imageExtension={item.imageExtension}
            type={item.type}
            price={item.price}
            currency={item.currency}
            rating={item.rating}
            isPremium={item.isPremium}
          />
        </div>
      ))}
    </div>
  );
}

export default ListOffers;


