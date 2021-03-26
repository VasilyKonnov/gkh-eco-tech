import { TTicketsItem } from '../../store/tickets';

export const filterByStatus = (
  requiredStatus: string | null,
  val: TTicketsItem
) => {
  return requiredStatus ? val.task_status === parseInt(requiredStatus) : true;
};

export const filterByAddressTicket = (
  requiredAddress: string | number | null,
  val: TTicketsItem
) => {
  return requiredAddress ? val.address.id === requiredAddress : true;
};
