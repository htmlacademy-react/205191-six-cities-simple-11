import Email from './email/email';
import Sign from './sign/sign';

function User() {
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <Email/>
        </div>
      </li>
      <li className="header__nav-item">
        <Sign/>
      </li>
    </ul>
  );
}

export default User;
