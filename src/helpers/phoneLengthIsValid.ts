import { getNormalizedPhoneValue } from './getNormalizedPhoneValue';

export function phoneLengthIsValid(phoneValue: string) {
  const phoneLength = getNormalizedPhoneValue(phoneValue).length;
  return phoneLength !== 12;
}
