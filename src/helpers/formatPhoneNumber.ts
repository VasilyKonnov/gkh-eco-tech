export const formatPhoneNumber = (phone: string = '') => {
  const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (!match) return phone;

  return `+7 (${match[1]}) ${match[2]}-${match[3]}`;
};
