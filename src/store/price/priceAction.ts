import { priceApi } from '../../utils/api/price';
import { setPriceData, priceFetching, priceFetchError } from './priceSlice';
import { TPriceAction } from './priceTypes';

export const priceAction: TPriceAction = {
  list: () => (dispatch) => {
    dispatch(priceFetching());
    priceApi
      .list()
      .then(({ data }) => {
        dispatch(setPriceData({ data }));
      })
      .catch(() => {
        dispatch(priceFetchError);
      });
  },
};
