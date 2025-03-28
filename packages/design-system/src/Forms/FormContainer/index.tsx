import { FormHTMLAttributes, PropsWithChildren } from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { FieldValues } from 'react-hook-form/dist/types/fields';

export type FormContainerProps<T extends FieldValues = FieldValues> =
  PropsWithChildren<
    UseFormProps<T> & {
      onSuccess?: SubmitHandler<T>;
      onError?: SubmitErrorHandler<T>;
      FormProps?: FormHTMLAttributes<HTMLFormElement>;
      FormDataSchema?: z.Schema;
    }
  >;

export function FormContainer<TFieldValues extends FieldValues = FieldValues>({
  children,
  FormProps,
  onSuccess,
  onError,
  FormDataSchema,
  ...useFormProps
}: PropsWithChildren<FormContainerProps<TFieldValues>>) {
  const methods = useForm<TFieldValues>({
    ...useFormProps,
    ...(FormDataSchema ? { resolver: zodResolver(FormDataSchema) } : {}),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(
          onSuccess
            ? onSuccess
            : () => console.log('submit handler `onSuccess` is missing'),
          onError
        )}
        noValidate
        {...FormProps}
      >
        {children}
      </form>
    </FormProvider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { z };
// eslint-disable-next-line react-refresh/only-export-components
export { useWatch, useFormContext } from 'react-hook-form';
