import { AutorizationStatus, RequestStatus } from '../../components/const';
import { userActions, userSlice } from './user-slice';

describe('User Slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.NoAuth,
      requestStatus: RequestStatus.Failed,
    };

    const result = userSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with ', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.Unknown,
      requestStatus: RequestStatus.Idle,
    };

    const result = userSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return new authorization status by "setStatus"', () => {
    const initialState = {
      user: null,
      authorizationStatus: AutorizationStatus.Unknown,
      requestStatus: RequestStatus.Idle,
    };

    const expectedState = {
      user: null,
      authorizationStatus: AutorizationStatus.Auth,
      requestStatus: RequestStatus.Idle,
    };

    const result = userSlice.reducer(initialState, userActions.setStatus(AutorizationStatus.Auth));

    expect(result).toEqual(expectedState);
  });

});
