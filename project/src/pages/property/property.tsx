import Gallery from '../../components/property/gallery/gallery';
import OfferHeader from '../../components/property/offer-header/offer-header';
import Inside from '../../components/property/inside/inside';
import Host from '../../components/property/host/host';
import Reviews from '../../components/property/reviews/reviews';
import PropertyMap from '../../components/property/property-map/property-map';
import OtherPlaces from '../../components/property/other-places/other-places';

function PropertyScreen(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery/>
          <div className="property__container container">
            <div className="property__wrapper">
              <OfferHeader/>
              <Inside/>
              <Host/>
            </div>
          </div>
        </section>
        <Reviews/>
        <PropertyMap/>
        <div className="container">
          <OtherPlaces/>
        </div>


      </main>

    </>
  );
}

export default PropertyScreen;
