import { Helmet } from 'react-helmet-async';
import Logo from '../../components/header/logo';
import Login from '../../components/main/login';
import Locations from '../../components/main/locations';


function LoginPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 Cities | Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <h1 className="visually-hidden">Cities</h1>
        <div className="page__login-container container">
          <Login/>
          <Locations/>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
