import { AppRoute, AppAuthStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authStatus: AppAuthStatus;
  children: JSX.Element;
}
function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authStatus, children } = props;
  return (
    authStatus === AppAuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
