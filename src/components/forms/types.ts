import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface BaseFormFieldProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
  wrapperClassName?: string;
}
