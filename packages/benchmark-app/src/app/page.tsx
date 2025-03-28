'use client';
import MultiStepFormProvider from '@/sections/onboarding/multiStepFormProvider';
import OnBoardingPage from '@/sections/onboarding';
import { useInvoicePropertyGetAllInvoiceProperty } from '@benchmark-brokers/api';

export default function Home() {
  const { data, isLoading } = useInvoicePropertyGetAllInvoiceProperty();
  console.log(data, isLoading);
  return (
    <MultiStepFormProvider>
      <OnBoardingPage />
    </MultiStepFormProvider>
  );
}
