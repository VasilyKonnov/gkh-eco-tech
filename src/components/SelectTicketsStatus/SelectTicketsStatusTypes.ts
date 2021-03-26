import { TTaskStatus } from '../../store/tickets';

export type TSelectTicketsProps = {
  onChangeStatus: (id: number) => void;
  data: TTaskStatus[];
};
