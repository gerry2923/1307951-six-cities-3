import { RequestStatus } from '../../components/const';
import { offerActions, offerSlice } from './offer-slice';

describe('Offer Slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Success
    };

    const result = offerSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty nearby and reque requestStatus idle', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Idle
    };

    const result = offerSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should clear offers with "clear" action', () => {
    const initialState = {
      info: null,
      nearby: [],
      status: RequestStatus.Failed
    };

    const expectedState = {
      info: null,
      nearby: [],
      status: RequestStatus.Idle
    };

    const result = offerSlice.reducer(initialState, offerActions.clear);
    expect(result).toEqual(expectedState);

  });
});
