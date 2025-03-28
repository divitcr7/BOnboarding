import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';

interface FormDataItem {
  id: string;
  title: string;
  sub?: string[];
  status: 'pending' | 'completed';
  parent?: string;
}

type ProgressFormDataProp = Record<string, FormDataItem> | undefined;

export interface MultiStepFormDataType {
  id: string;
  title: string;
  status: 'pending' | 'completed';
  sub?: MultiStepFormDataType[];
  formData?: any;
}
interface IFormContext {
  allStepFormData: Record<string, any>;
  stepFormData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  onFinalizeStep: (data?: any) => void;
  activeStep: string;
  progressFormData?: ProgressFormDataProp;
  orderIds: string[];
  isCompleted: boolean;
  onSelectStep: (stepId: string) => void;
}

const FormContext = createContext<IFormContext>({
  allStepFormData: {},
  stepFormData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  onFinalizeStep: () => {},
  activeStep: '',
  orderIds: [],
  isCompleted: false,
  onSelectStep: () => {},
});

interface IProps {
  children: ReactNode;
  initialFormData: MultiStepFormDataType[];
}

export function FormProvider({ children, initialFormData }: IProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [progressFormData, setProgressFormData] =
    useState<ProgressFormDataProp>();
  const [activeStep, setActiveStep] = useState('');

  const stepFormData = useMemo(() => {
    if (formData) {
      return formData[activeStep];
    }
  }, [formData, activeStep]);

  const orderIds = useMemo(
    () => initialFormData.map((item) => item.id),
    [initialFormData]
  );

  const onSelectStep = (stepId: string) => {
    setActiveStep(stepId);
  };
  const isCompleted = useMemo(() => {
    if (!progressFormData) {
      return false;
    }
    return Object.keys(progressFormData).every(
      (item) => progressFormData[item]?.status === 'completed'
    );
  }, [progressFormData]);

  useEffect(() => {
    const progressFormData = {} as any;
    const formData = {} as any;
    let activeStep = '';

    structuredClone(initialFormData).map((item) => {
      formData[item.id] = item.formData;
      progressFormData[item.id] = item;
      if (!activeStep && !item.sub && item.status !== 'completed') {
        activeStep = item.id;
      }
      progressFormData[item.id].sub = item.sub?.map?.((subItem) => {
        if (!activeStep && item.status !== 'completed') {
          activeStep = subItem.id;
        }
        formData[subItem.id] = subItem.formData;
        progressFormData[subItem.id] = { ...subItem, parent: item.id };
        return subItem.id;
      });
    });
    setFormData(formData);
    setProgressFormData(progressFormData);
    setActiveStep(activeStep);
  }, [initialFormData]);

  function findPreviousId() {
    let previous = null;
    if (!progressFormData) {
      return null;
    }
    for (const id of orderIds) {
      const item = progressFormData[id];
      if (id === activeStep) {
        return previous;
      }
      if (item?.sub?.length) {
        for (const subId of item.sub) {
          if (subId === activeStep) {
            return previous;
          }
          previous = subId;
        }
      } else {
        previous = id;
      }
    }
    return previous;
  }

  function findNextId() {
    let itemFound = null;
    if (!progressFormData) {
      return null;
    }

    for (const id of orderIds) {
      const item = progressFormData[id];
      if (item?.sub?.length) {
        for (const subId of item.sub) {
          if (itemFound) {
            return subId;
          }
          if (subId === activeStep) {
            itemFound = true;
          }
        }
      } else {
        if (itemFound) {
          return id;
        }
      }
      if (id === activeStep) {
        itemFound = true;
      }
    }
    return null;
  }

  function onHandleNext() {
    const nextStepId = findNextId();
    if (nextStepId) {
      setActiveStep(nextStepId);
    }
  }

  function onFinalizeStep(data?: any) {
    if (!progressFormData) {
      return null;
    }

    if (data) {
      setFormData({ ...formData, [activeStep]: data });
    }
    const newProgressData = {
      ...progressFormData,
      [activeStep]: { ...progressFormData[activeStep], status: 'completed' },
    };

    const parentId = newProgressData[activeStep]?.parent || '';
    if (parentId) {
      const parentItem = newProgressData[parentId];
      if (
        parentItem?.sub?.every(
          (itemId: string) => newProgressData[itemId].status === 'completed'
        )
      ) {
        parentItem.status = 'completed';
      }
    }
    setProgressFormData(newProgressData as ProgressFormDataProp);
    onHandleNext();
  }

  function onHandleBack() {
    const prevStepId = findPreviousId();
    if (prevStepId) {
      setActiveStep(prevStepId);
    }
  }

  return (
    <FormContext.Provider
      value={{
        allStepFormData: formData,
        stepFormData,
        setFormData,
        onHandleBack,
        onHandleNext,
        activeStep,
        progressFormData,
        orderIds,
        isCompleted,
        onSelectStep,
        onFinalizeStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFormState() {
  return useContext(FormContext);
}
