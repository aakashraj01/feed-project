import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../common/Icon';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../utils/constants';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate(ROUTES.HOME);
    } else {
      navigate(ROUTES.SIGN_IN);
    }
  };

  const isAuthPage = location.pathname === ROUTES.SIGN_IN || location.pathname === ROUTES.SIGN_UP;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-40">
      <div className="max-w-[1512px] mx-auto px-10 h-[75px] flex items-center justify-between">
        <button 
          onClick={() => navigate(ROUTES.HOME)}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <Icon name="logo" size={34} className="text-black" />
          <span className="font-bold text-base text-black/80">foo-rum</span>
        </button>

        <button
          onClick={isAuthPage ? () => navigate(ROUTES.HOME) : handleAuthAction}
          className="flex items-center gap-2 font-semibold text-sm text-black hover:opacity-70 transition-opacity"
        >
          <span>{isAuthPage ? 'Back to home' : isAuthenticated ? 'Logout' : 'Login'}</span>
          {!isAuthPage && <Icon name="login" size={20} />}
        </button>
      </div>
    </nav>
  );
};

