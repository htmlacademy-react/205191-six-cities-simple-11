import Tabs from './tabs/tabs';
import Cities from './cities/cities';

type MainProps = {
  offers: number;
}

function Main({offers}: MainProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs/>
      <Cities offers={offers}/>
    </main>
  );
}

export default Main;
