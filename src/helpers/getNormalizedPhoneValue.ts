export function getNormalizedPhoneValue(phoneValue: string) {
  return phoneValue.replace(/(\s)|(_)/g, '');
}
