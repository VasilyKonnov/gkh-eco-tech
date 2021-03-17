import { valueApi } from '../../utils/api';
import { setValueData, valueFetching, valueFetchingError } from './valueSlice';
import { TValueAction } from './valueTypes';

export const valueAction: TValueAction = {
  send: (post) => (dispatch) => valueApi.send(post),
};
