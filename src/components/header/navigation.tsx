import { useAuth } from '../../store/hooks';
import LoggedNavigation from './logged-navigation';
import NotLoggedNavigation from './not-logged-navigation';

function Navigation(): JSX.Element {
  const isAuthorized = useAuth();
  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        {isAuthorized ? <LoggedNavigation /> : <NotLoggedNavigation />}
      </ul>
    </nav>
  );
}

export default Navigation;
