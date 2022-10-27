import MainScreen from '../../pages/main/main';

type AppProps = {
  errorsCount: number;
}

function App({errorsCount}: AppProps): JSX.Element {
  return (

    <MainScreen errorsCount={4}/>

  );
}

export default App;
