import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAuthorizationStatus } from '../store/user/user-slice';
import { AppRoute, AutorizationStatus } from '../components/const';
import { changeFavoriteStatus } from '../store/favorites/favorites-thunk';


export function useFavoriteClick() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const status = useAppSelector(selectAuthorizationStatus);
  const isAuth = AutorizationStatus.Auth === status;

  return useCallback(
    (id: string, isFavorite: boolean) => {
      if (!isAuth) {
        navigate(AppRoute.Login, { state: { from: location } });
        return;
      }
      dispatch(changeFavoriteStatus({ offerId: id, isFavorite: isFavorite }));
    },
    [dispatch, navigate, location, isAuth]
  );
}
