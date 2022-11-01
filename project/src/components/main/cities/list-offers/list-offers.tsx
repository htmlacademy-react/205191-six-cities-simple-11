import offersMock from "../../../../mocks/offers";
import Offer from "./offer/offer";

function ListOffers() {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersMock.map((item) => {
        <Offer/>
      }}

    </div>

  )
}

export default ListOffers;


