import { TTaskStatus } from '../../store/tickets';

export type TSelectTicketsProps = {
  onChangeStatus: (id: string) => void;
  data: TTaskStatus[];
};
