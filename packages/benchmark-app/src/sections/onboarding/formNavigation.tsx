import { Box, Button, Container } from '@benchmark-brokers/ui';

import { ChevronRight, ChevronLeft } from '@benchmark-brokers/icons';

interface FormNavigationProps {
  submitText?: string;
  previousText?: string;
  onPreviousHandler: () => void;
}
export default function FormNavigation({
  submitText,
  previousText,
  onPreviousHandler,
}: FormNavigationProps) {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: 'grey.50',
        mt: 4,
      }}
    >
      <Container
        sx={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ChevronLeft />}
          sx={{ width: '13rem', mr: 2 }}
          onClick={() => onPreviousHandler()}
        >
          {previousText || 'Previous'}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: '13rem' }}
          endIcon={<ChevronRight />}
        >
          {submitText || 'Next'}
        </Button>
      </Container>
    </Box>
  );
}
