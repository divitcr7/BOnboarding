import {
  TextField as MuiTextField,
  TextFieldProps,
  useForkRef,
  InputAdornment,
} from '@mui/material';
import { Control, useController } from 'react-hook-form';
import { forwardRef, Ref } from 'react';

type TextFieldBaseProps = Omit<TextFieldProps, 'color'> & {
  prefix?: string | React.ReactElement;
  suffix?: string | React.ReactElement;
};

export function TextField({ prefix, suffix, ...rest }: TextFieldBaseProps) {
  return (
    <MuiTextField
      InputProps={{
        startAdornment: prefix ? (
          <InputAdornment position="start">{prefix}</InputAdornment>
        ) : null,
        endAdornment: suffix ? (
          <InputAdornment position="end">{suffix}</InputAdornment>
        ) : null,
      }}
      {...rest}
    />
  );
}

//  React Hook Form Wrapped Version of TextField
export type TextFieldElementProps = TextFieldBaseProps & {
  control?: Control;
  name: string;
};

export const TextFieldElement = forwardRef(function TextFieldElement(
  props: TextFieldElementProps,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const { type, required, name, control, inputRef, ...rest } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleInputRef = useForkRef(field.ref, inputRef);

  return (
    <TextField
      {...rest}
      name={field.name}
      value={field.value ?? ''}
      onChange={(ev) => {
        field.onChange(
          type === 'number' && ev.target.value
            ? +ev.target.value
            : ev.target.value
        );
        if (typeof rest.onChange === 'function') {
          rest.onChange(ev);
        }
      }}
      onBlur={field.onBlur}
      required={required}
      type={type}
      error={!!error}
      helperText={error ? error.message : rest.helperText}
      ref={ref}
      inputRef={handleInputRef}
    />
  );
});
TextFieldElement.displayName = 'TextFieldElement';
