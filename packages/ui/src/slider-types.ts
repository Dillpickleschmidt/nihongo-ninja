export type SliderProps = {
  value: number;
  onValueChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  label: string;
  className?: string;
};
