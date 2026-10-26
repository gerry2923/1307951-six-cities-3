import { APIRoute } from '../../components/const';
import { TOffer } from '../../components/types';
import { createAppAsyncThunk } from '../create-thunk';


export const fetchAllOffers = createAppAsyncThunk<TOffer[], undefined>(

  'fetchOffers/all',
  async (_arg, { extra: api }) => {
    const response = await api.get<TOffer[]>(APIRoute.Offers);
    return response.data;
  }
);
