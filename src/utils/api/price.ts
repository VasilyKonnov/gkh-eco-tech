import { axios } from '../../services'

export const priceApi = {
  list: () => axios.get('/price/'),  
}
