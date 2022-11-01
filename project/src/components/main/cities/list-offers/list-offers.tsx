import offersMock from '../../../../mocks/offers';
import Offer from './offer/offer';

function ListOffers() {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersMock.map((item, index) => (
        <Offer
          title={item.title}
          image={item.image}
          imageExtension={item.imageExtension}
          type={item.type}
          price={item.price}
          currency={item.currency}
          rating={item.rating}
          isPremium={item.isPremium}
          key={index}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default ListOffers;


