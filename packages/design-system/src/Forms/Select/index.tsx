import { forwardRef, ReactNode, Ref } from 'react';
import { MenuItem, TextField, TextFieldProps, useForkRef } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';

type DefaultOptionType = {
  value: string | number;
  label: string | number;
  disabled?: boolean;
};
type onChangeTypeProps = string | number | DefaultOptionType;

export type SelectElementProps = Omit<
  TextFieldProps,
  'name' | 'type' | 'onChange'
> & {
  name: string;
  options?: readonly DefaultOptionType[];
  valueKey?: string;
  labelKey?: string;
  type?: 'string' | 'number';
  parseError?: (error: FieldError) => ReactNode;
  objectOnChange?: boolean;
  onChange?: (props: onChangeTypeProps) => void;
  control?: Control;
};

export const SelectElement = forwardRef(function SelectElement(
  props: SelectElementProps,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    name,
    required,
    options = [],
    type,
    objectOnChange,
    control,
    inputRef,
    ...rest
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleInputRef = useForkRef(field.ref, inputRef);

  const currentValue = field.value?.value ?? field.value; // try fetch key value

  return (
    <TextField
      {...rest}
      name={name}
      value={currentValue ?? ''}
      onBlur={field.onBlur}
      ref={ref}
      onChange={(event) => {
        let item: onChangeTypeProps = event.target.value;
        if (type === 'number' && item) {
          item = Number(item);
        }
        field.onChange(item);
        if (typeof rest.onChange === 'function') {
          if (objectOnChange) {
            item = options.find((i) => i.value === item) || item;
          }
          rest.onChange(item);
        }
      }}
      select
      required={required}
      error={!!error}
      helperText={error ? error.message : rest.helperText}
      inputRef={handleInputRef}
    >
      {options.map((item) => (
        <MenuItem
          key={`${name}_${item.value}`}
          value={item?.value ?? item}
          disabled={item?.disabled ?? false}
        >
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
});
SelectElement.displayName = 'Select';
