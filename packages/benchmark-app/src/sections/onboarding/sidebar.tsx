import { LogoDark } from '@/components/Logo';
import {
  Box,
  ProfileCard,
  MultiStepFormProgressSummary,
  useFormState,
} from '@benchmark-brokers/ui';

export default function OnboardingSideBar() {
  const { activeStep, orderIds, progressFormData, onSelectStep } =
    useFormState();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        backgroundColor: 'surface.darker',
        p: 3,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        width: '450px',
        '&:after': {
          content: "''",
          position: 'absolute',
          width: '120%',
          height: '30%',
          background: (theme) =>
            `linear-gradient(45deg,${theme.palette.grey[500]} 20%, transparent 20%), linear-gradient(135deg, transparent 80%, ${theme.palette.grey[400]} 80%)`,
          backgroundSize: '1.5rem 1.5rem',
          bottom: '-5rem',
          left: '-5rem',
          transform: 'rotate(45deg)',
          opacity: 1,
          zIndex: -1,
        },
      }}
    >
      <LogoDark />
      <Box sx={{ pb: 1, pt: 2, width: '100%' }}>
        <ProfileCard
          avatarImageUrl=""
          title={'Martin'}
          subTitle={'Real Estate Specialist'}
        />
      </Box>
      <Box sx={{ pb: 1, pt: 2, width: '100%' }}>
        <MultiStepFormProgressSummary
          sx={{ width: '100%' }}
          data={progressFormData}
          orderIds={orderIds}
          activeStep={activeStep}
          onSelect={onSelectStep}
          canSelectCompletedItem
        />
      </Box>
    </Box>
  );
}
