import { TMeterAddressItem } from '../store/meter';

export const parseAddressValue = (address: TMeterAddressItem) =>
  `${address.street} дом ${address.house}${
    address.building ? ', корпус ' + address.apartment : ''
  } ${address.apartment ? ', кв. ' + address.apartment : ''}`;
