import {Link} from 'react-router-dom';

function PageNotPage(): JSX.Element {
  return (
    <>
      <h4 style={{textAlign: 'center'}}>Error 404</h4>
      <Link to='/' style={{display: 'block', textAlign: 'center'}}>На главную страницу</Link>
    </>
  );
}

export default PageNotPage;
