import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { BaseFormFieldProps } from "./types";
import { Textarea } from "../ui/textarea";

export const TextareaField = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: BaseFormFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field
          className={props.wrapperClassName}
          aria-invalid={fieldState.invalid}
        >
          <FieldLabel htmlFor={name}>{props.label}</FieldLabel>
          <Textarea
            {...field}
            placeholder={props.placeholder}
            className={`resize-none ${props.className}`}
            aria-invalid={fieldState.invalid}
          />
          {fieldState.error ? (
            <FieldError className="text-red-500">
              {fieldState.error?.message}
            </FieldError>
          ) : (
            <FieldDescription>{props.description}</FieldDescription>
          )}
        </Field>
      )}
    />
  );
};
