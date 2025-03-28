import { useStackedMultiStepForm, StackedMultiStepForm } from '.';
import { Button, Typography, Box, Chip } from '@/index';

export default {
  title: 'Forms/StackedMultiStepForm',
};

function StepComponent() {
  const { onCompleteStep } = useStackedMultiStepForm();
  return (
    <Box>
      <Typography sx={{ pb: 2 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={onCompleteStep}
      >
        Save
      </Button>
    </Box>
  );
}

const InitialData = [
  {
    title: 'Verify Your Property Information',
    subTitle: 'You can modify the information in the fields if needed',
    content: <StepComponent />,
  },
  {
    title: 'Select Your Property’s Insurable Value',
    subTitle: 'WHAT IS INCLUDED',
    content: <StepComponent />,
    canSkip: true,
  },
  {
    title: 'Answer Discount Questions',
    subTitle: (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Chip label="SAVE UP TO 30%" color="primary" size="small" />
        <Typography variant="body1" sx={{ pl: 2, color: 'primary.main' }}>
          You save $3,000
        </Typography>
      </Box>
    ),
    content: <StepComponent />,
  },
  {
    title: 'Final Step',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export function Example() {
  return (
    <Box sx={{ p: 3, bgcolor: 'surface.main' }}>
      <StackedMultiStepForm data={InitialData} />
    </Box>
  );
}

export function AllExpanded() {
  return (
    <Box sx={{ p: 3, bgcolor: 'surface.main' }}>
      <StackedMultiStepForm
        data={[
          {
            title: 'Select Your Property’s Insurable Value',
            subTitle: 'WHAT IS INCLUDED',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            title: 'Answer Discount Questions',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            title: 'Final Step',
            content:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ]}
        isExpandableDisabled
      />
    </Box>
  );
}
