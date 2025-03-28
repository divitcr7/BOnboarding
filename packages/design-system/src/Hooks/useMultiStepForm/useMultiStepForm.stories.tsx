import { useEffect, useState } from 'react';
import { useFormState, FormProvider, MultiStepFormDataType } from '.';
import { MultiStepFormProgressSummary, Button, Typography, Box } from '@/index';
import { TextField } from '@mui/material';

export default {
  title: 'Hooks/useMultiStepForm',
};

const initData = (): MultiStepFormDataType[] => [
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
      { id: 'id-11', title: 'Shipping Address', status: 'pending' },
    ],
  },
  { id: 'id-7', title: 'Property info', status: 'pending' },
  { id: 'id-8', title: 'Quote', status: 'pending' },
];

function From({ reset }: { reset: () => void }) {
  const {
    activeStep,
    allStepFormData,
    stepFormData,
    isCompleted,
    orderIds,
    progressFormData,
    onHandleBack,
    onSelectStep,
    onFinalizeStep,
  } = useFormState();

  const [inputValue, setInputValue] = useState(stepFormData || '');

  useEffect(() => {
    setInputValue(stepFormData || '');
  }, [stepFormData]);

  return (
    <div>
      {isCompleted ? (
        <>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Hooray! click reset to start over
          </Typography>

          <Button
            onClick={reset}
            variant="contained"
            color="error"
            size="small"
          >
            Reset
          </Button>
        </>
      ) : (
        <>
          <MultiStepFormProgressSummary
            data={progressFormData}
            orderIds={orderIds}
            activeStep={activeStep}
            onSelect={onSelectStep}
            canSelectCompletedItem
          />
          <Box sx={{ mb: 2, mt: 2 }}>
            <TextField
              fullWidth
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              label="Write something it will save for the step ..."
              variant="outlined"
            />
          </Box>
          <Box sx={{ mb: 2, mt: 2 }}>
            <Button onClick={onHandleBack} variant="text" sx={{ mr: 2 }}>
              Previous
            </Button>
            <Button
              onClick={() => {
                onFinalizeStep(inputValue);
                setInputValue('');
              }}
              variant="text"
            >
              Save and Next
            </Button>
          </Box>
        </>
      )}
      <Typography variant="body1" sx={{ mt: 2 }}>
        all stored form data are:
      </Typography>
      <pre>{JSON.stringify(allStepFormData, null, 2)}</pre>
    </div>
  );
}

export function Example() {
  const [formData, setFormData] = useState(initData());
  const reset = () => {
    setFormData(initData());
  };
  return (
    <FormProvider initialFormData={formData}>
      <From reset={reset} />
    </FormProvider>
  );
}
