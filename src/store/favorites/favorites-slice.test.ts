import { RequestStatus } from '../../components/const';
import { makeFakeOffer } from '../../utils/mocks';
import { favoritesActions, favoritesSlice } from './favorites-slice';


describe('Faforites slice', () => {
  // вариант, когда в качестве действия пустая акция
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  // вариант, когда ничего не передали
  it('should return default initial state with empty items and requestStatus idle', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should clear favorites with "favoritesClear" action', () => {
    const initialState = {
      favorites: [makeFakeOffer()],
      status: RequestStatus.Success,
      error: null,
      pendingIds: {},
    };

    const expectedState = {
      favorites: [],
      status: RequestStatus.Idle,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(initialState, favoritesActions.favoritesClear);
    expect(result).toEqual(expectedState);

  });


  it('sould set requestStatus to Loading', () => {
    const expectedState = {
      favorites: [],
      status: RequestStatus.Loading,
      error: null,
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, favoritesActions.fetchFavorites.pending);

    expect(result).toEqual(expectedState);
  });

  it('sould set requestStatus to Failed', () => {
    const expectedState = {
      favorites: [],
      status: RequestStatus.Failed,
      error: 'ошибка загрузки',
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, favoritesActions.fetchFavorites.rejected);

    expect(result).toEqual(expectedState);
  });
  // тут доделалть
  it('sould set requestStatus to Success', () => {
    const expectedState = {
      favorites: [],
      status: RequestStatus.Failed,
      error: 'ошибка загрузки',
      pendingIds: {},
    };

    const result = favoritesSlice.reducer(undefined, favoritesActions.fetchFavorites.rejected);

    expect(result).toEqual(expectedState);
  });
});
