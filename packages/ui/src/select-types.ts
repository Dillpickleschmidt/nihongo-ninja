export type SelectOption = { value: string; label: string };

export type SelectGroup = { label: string; options: SelectOption[] };

export type SelectProps = {
  value: string | null;
  onValueChange: (value: string) => void;
  groups: SelectGroup[];
  triggerClassName?: string;
  popupClassName?: string;
};
