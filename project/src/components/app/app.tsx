import MainScreen from '../../pages/main/main';

type AppProps = {
  offers: number;
}

function App({offers}: AppProps): JSX.Element {
  return (

    <MainScreen offers={offers}/>

  );
}

export default App;
