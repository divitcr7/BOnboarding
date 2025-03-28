import React, { createContext, useContext, useState, useCallback } from 'react';

interface StackedFormContextType {
  onHandleBack: () => void;
  onHandleNext: () => void;
  onCompleteStep: () => void;
  onSelectStep: (id: number) => void;
  formStepsInfo: StackedFormProps[];
  activeStep: number;
}

interface StackedFormProps {
  editable?: boolean;
}

interface StackedFormProviderProps {
  children: React.ReactElement | React.ReactElement[];
  data: StackedFormProps[];
}

const StackedFormContext = createContext<StackedFormContextType>({
  onHandleBack: () => {},
  onHandleNext: () => {},
  onCompleteStep: () => {},
  onSelectStep: () => {},
  formStepsInfo: [],
  activeStep: 0,
});

// eslint-disable-next-line react-refresh/only-export-components
export function useStackedMultiStepForm() {
  return useContext(StackedFormContext);
}

export function StackedFormProvider({
  children,
  data,
}: StackedFormProviderProps) {
  const formStepsLength = data.length;
  const [formStepsInfo, setFormStepsInfo] = useState(
    data.map(({ editable }) => ({ editable }))
  );

  const [activeStep, setActiveStep] = useState<number>(0);

  const onSelectStep = useCallback((id: number) => {
    setActiveStep(id);
  }, []);

  const onHandleNext = useCallback(() => {
    if (activeStep < formStepsLength) {
      setActiveStep(activeStep + 1);
    }
  }, [activeStep, formStepsLength]);

  const onHandleBack = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  }, [activeStep]);

  const onCompleteStep = useCallback(() => {
    if (activeStep < formStepsLength) {
      setActiveStep(activeStep + 1);
      setFormStepsInfo(
        formStepsInfo.map((item, i) =>
          i === activeStep ? { ...item, editable: true } : item
        )
      );
    }
  }, [activeStep, formStepsLength, formStepsInfo]);

  return (
    <StackedFormContext.Provider
      value={{
        onHandleBack,
        onHandleNext,
        onCompleteStep,
        onSelectStep,
        activeStep,
        formStepsInfo,
      }}
    >
      {children}
    </StackedFormContext.Provider>
  );
}
