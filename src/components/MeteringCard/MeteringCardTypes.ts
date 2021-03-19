export type TMeteringCardProps = {
  onSelect: (id: number) => void;
  meter: {
    id: number;
    title: string;
    meters_type: number;
    previous_value: number | string;
  };
};

export type TMeterIconVariant = {
  [key: number]: React.ReactNode;
};
