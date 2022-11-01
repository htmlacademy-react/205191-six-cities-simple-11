import Header from '../../components/header/header';
import Main from '../../components/main/main';

type MainScreenProps = {
  offers: number;
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  return (
    <>
      <Header/>
      <Main offers={offers}/>
    </>
  );
}

export default MainScreen;
