import { forwardRef, Ref } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  PathValue,
} from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  SxProps,
  Theme,
  FormGroup,
} from '@mui/material';
import { Checkbox, SelectionTypeCard } from '@/index';

type DefaultOptionType = {
  label: string;
  id: string | number;
};

type CardOptionType = {
  id: string | number;
  icon: React.ReactElement;
  title: string;
  subTitle: string;
};

type CheckBoxOptionType =
  | {
      options: readonly DefaultOptionType[];
      onChange?: (value: string[] | number[] | DefaultOptionType[]) => void;
      variant: 'default';
    }
  | {
      options: readonly CardOptionType[];
      onChange?: (value: string[] | number[] | CardOptionType[]) => void;
      variant: 'card';
    };

export type CheckboxGroupElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  required?: boolean;
  label?: string;
  returnObject?: boolean;
  row?: boolean;
  control?: Control<TFieldValues>;
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control' | 'value'>;
  formLabelProps?: Omit<FormLabelProps, 'required' | 'error'>;
  disabled?: boolean;
  rowGroupSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
} & CheckBoxOptionType;

// eslint-disable-next-line react-refresh/only-export-components
export const CheckboxGroupElement = forwardRef(function RadioButtonGroup<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: CheckboxGroupElementProps<TFieldValues, TName>,
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
    labelProps,
    disabled,
    formLabelProps,
    rowGroupSx,
    cardSx,
    variant,
    onChange,
  } = props;

  const {
    field: {
      value = [] as PathValue<TFieldValues, TName>,
      onChange: fieldOnChange,
    },
    fieldState: { error },
  } = useController({
    name,
    rules: required ? { required: 'This field is required' } : undefined,
    control,
  });

  const renderHelperText = error ? error.message : '';

  const handleChange = (index: number | string) => {
    const newArray: any[] = [...value];
    const exists =
      value.findIndex((i: any) =>
        returnObject ? i?.id === index : i === index
      ) === -1;
    if (exists) {
      newArray.push(returnObject ? options.find((i) => i.id === index) : index);
    } else {
      newArray.splice(
        value.findIndex((i: any) =>
          returnObject ? i.id === index : i === index
        ),
        1
      );
    }

    fieldOnChange(newArray);
    if (typeof onChange === 'function') {
      onChange(newArray);
    }
  };

  return (
    <FormControl error={!!error} ref={ref}>
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
      <FormGroup sx={rowGroupSx} row={row}>
        {options.map((option) => {
          const optionKey = option.id;
          const isChecked =
            value.findIndex((item: any) =>
              returnObject ? item?.id === optionKey : item === optionKey
            ) !== -1;
          if (variant === 'default') {
            const variantOption = option as DefaultOptionType;
            return (
              <FormControlLabel
                sx={{ pr: 2 }}
                {...labelProps}
                control={
                  <Checkbox
                    color={error ? 'error' : 'primary'}
                    sx={{ mr: 1 }}
                    value={optionKey}
                    onChange={() => handleChange(optionKey)}
                    disabled={disabled}
                    checked={isChecked}
                  />
                }
                value={optionKey}
                label={variantOption.label}
                key={optionKey}
              />
            );
          } else {
            const variantOption = option as CardOptionType;
            return (
              <SelectionTypeCard
                sx={cardSx}
                checked={isChecked}
                icon={variantOption.icon}
                id={variantOption.id}
                variant={'checkbox'}
                onChange={() => handleChange(optionKey)}
                key={variantOption.id}
                title={variantOption.title}
                subTitle={variantOption.subTitle}
              />
            );
          }
        })}
      </FormGroup>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  );
});
