import { FormProvider, MultiStepFormDataType } from '@benchmark-brokers/ui';

const data = [
  { id: 'id-1', title: 'Insurance Type', status: 'pending' },
  { id: 'id-2', title: 'Industry', status: 'pending' },
  {
    id: 'id-3',
    title: 'Business info',
    status: 'pending',
    sub: [
      { id: 'id-4', title: 'Policy Type', status: 'pending' },
      { id: 'id-5', title: 'Business details', status: 'pending' },
    ],
  },
  {
    id: 'id-6',
    title: 'Locations',
    status: 'pending',
    sub: [
      { id: 'id-10', title: 'Billing Address', status: 'pending' },
      { id: 'id-11', title: 'Business Info', status: 'pending' },
    ],
  },
  { id: 'id-7', title: 'Property info', status: 'pending' },
  { id: 'id-8', title: 'Quote', status: 'pending' },
];

export default function MultiStepFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormProvider initialFormData={data as MultiStepFormDataType[]}>
      {children}
    </FormProvider>
  );
}
