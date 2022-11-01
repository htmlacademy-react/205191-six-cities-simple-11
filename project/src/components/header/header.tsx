import Logo from './logo/logo';
import User from './user/user';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <User/>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
