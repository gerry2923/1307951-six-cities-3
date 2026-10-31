import { offersSlice } from './offers-slice';

describe('Offer Slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isLoading: true,
    };

    const result = offersSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty nearby and reque requestStatus idle', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      isLoading: true,
    };

    const result = offersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

});
