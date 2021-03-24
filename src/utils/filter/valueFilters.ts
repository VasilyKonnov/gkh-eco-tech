import { TValueItem } from '../../store/value';
import { TMeterItem } from '../../store/meter';

export const filterByMeter = (
  formMeterValue: string | number | null,
  val: TValueItem
) => (formMeterValue ? +formMeterValue === val.meter : true);

export const filterByAddress = (
  requiredAddressId: string | number | null,
  val: TValueItem,
  meters: TMeterItem[]
) => {
  if (!requiredAddressId) return true;
  // define the meters with required an address
  const metersWithAddress = meters.filter(
    (meter) => meter.address.id === requiredAddressId
  );
  // value with that's meters
  return metersWithAddress.some((meter) => meter.id === val.meter);
};

export enum EDateValue {
  all = 'all',
  half_a_year = 'half-a-year',
  year = 'year',
}

const timestampDateRange: { [key: string]: number } = {
  'half-a-year': 60 * 60 * 24 * 30 * 6 * 1000,
  year: 60 * 60 * 24 * 30 * 12 * 1000,
};

const inDateRange = (type: string, date: string) => {
  const dt = Date.now() - timestampDateRange[type];
  return Date.parse(date) > dt;
};

export const filterByDate = (formDateValue: string, val: TValueItem) =>
  formDateValue !== EDateValue.all
    ? inDateRange(formDateValue, val.date)
    : true;
