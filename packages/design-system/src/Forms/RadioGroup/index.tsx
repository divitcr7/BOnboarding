import { ChangeEvent, forwardRef, Ref } from 'react';
import { Control, useController } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  RadioGroup as MuiRadioGroup,
  SxProps,
  Theme,
} from '@mui/material';
import { Radio, SelectionTypeCard } from '@/index';

export type DefaultOptionType = {
  label: string;
  id: string | number;
};

type CardOptionType = {
  id: string | number;
  icon: React.ReactElement;
  title: string;
  subTitle: string;
};

type RadioOptionTypes =
  | {
      options: readonly DefaultOptionType[];
      onChange?: (value: string | number | DefaultOptionType) => void;
      variant: 'default';
    }
  | {
      options: readonly CardOptionType[];
      onChange?: (value: string | number | CardOptionType) => void;
      variant: 'card';
    }
  | {
      options: readonly DefaultOptionType[];
      onChange?: (value: string | number | DefaultOptionType) => void;
      variant: 'outlined';
    };

export type RadioGroupElementProps = {
  name: string;
  required?: boolean;
  label?: string;
  type?: 'number' | 'string';
  returnObject?: boolean;
  row?: boolean;
  control?: Control;
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control' | 'value'>;
  formLabelProps?: Omit<FormLabelProps, 'required' | 'error'>;
  disabled?: boolean;
  rowGroupSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
} & RadioOptionTypes;

// eslint-disable-next-line react-refresh/only-export-components
export const RadioGroupElement = forwardRef(function RadioButtonGroup(
  props: RadioGroupElementProps,
  ref: Ref<HTMLDivElement>
) {
  const {
    options,
    label,
    name,
    required,
    returnObject,
    row,
    control,
    type,
    labelProps,
    disabled,
    formLabelProps,
    rowGroupSx,
    cardSx,
    variant,
    onChange,
    sx,
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules: required ? { required: 'This field is required' } : undefined,
    control,
  });

  const renderHelperText = error ? error.message : '';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (['default', 'card', 'outlined'].includes(variant)) {
      const radioValue = (event.target as HTMLInputElement).value;
      const returnValue = returnObject
        ? options.find((items) => items.id === radioValue)
        : radioValue;
      field.onChange(returnValue);
      if (typeof onChange === 'function' && returnValue) {
        if (variant === 'card') {
          onChange(returnValue as CardOptionType);
        } else {
          onChange(returnValue as DefaultOptionType);
        }
      }
    }
  };

  return (
    <FormControl error={!!error} ref={ref} sx={sx}>
      {label && (
        <FormLabel
          sx={{ pb: 1 }}
          {...formLabelProps}
          required={required}
          error={!!error}
        >
          {label}
        </FormLabel>
      )}
      <MuiRadioGroup
        onChange={handleChange}
        name={name}
        sx={rowGroupSx}
        row={row}
        value={field.value || ''}
      >
        {options.map((option) => {
          const optionKey = option.id;
          let val = returnObject ? field.value?.id : field.value;
          if (type === 'number') {
            val = Number(val);
          }
          const isChecked = val === optionKey;
          if (variant === 'default') {
            const variantOption = option as DefaultOptionType;
            return (
              <FormControlLabel
                sx={{ pr: 2 }}
                {...labelProps}
                control={
                  <Radio
                    color={error ? 'error' : 'primary'}
                    sx={{ mr: 1 }}
                    disabled={disabled}
                    checked={isChecked}
                  />
                }
                value={optionKey}
                label={variantOption.label}
                key={optionKey}
              />
            );
          } else if (variant === 'card') {
            const variantOption = option as CardOptionType;
            return (
              <SelectionTypeCard
                sx={cardSx}
                checked={isChecked}
                icon={variantOption.icon}
                id={variantOption.id}
                variant={'radio'}
                key={variantOption.id}
                title={variantOption.title}
                subTitle={variantOption.subTitle}
              />
            );
          } else if (variant === 'outlined') {
            const variantOption = option as DefaultOptionType;
            return (
              <FormControlLabel
                sx={{
                  p: 2,
                  m: 0,
                  mb: 1,

                  border: (theme) =>
                    `2px solid ${
                      isChecked && error
                        ? theme.palette.error.main
                        : isChecked
                        ? theme.palette.surface.dark
                        : theme.palette.grey[50]
                    }`,
                  borderRadius: (theme) => `${theme.shape.borderRadiusLg}px`,
                }}
                slotProps={{
                  typography: { variant: 'h6' },
                }}
                {...labelProps}
                control={
                  <Radio
                    color={error ? 'error' : 'surface'}
                    sx={{
                      mr: 1,
                    }}
                    disabled={disabled}
                    checked={isChecked}
                  />
                }
                value={optionKey}
                label={variantOption.label}
                key={optionKey}
              />
            );
          }
        })}
      </MuiRadioGroup>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  );
});
