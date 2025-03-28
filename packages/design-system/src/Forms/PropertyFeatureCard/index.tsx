import { SxProps, Theme, styled } from '@mui/material';
import {
  RadioGroupElement,
  RadioGroupElementProps,
  DefaultOptionType,
  SelectElement,
  SelectElementProps,
  Typography,
  Box,
} from '@/index';
export interface PropertyFeatureCardProps
  extends React.ComponentPropsWithoutRef<'div'> {
  radioGroupElementProps: Omit<
    RadioGroupElementProps,
    'variant' | 'options'
  > & {
    options: DefaultOptionType[];
  };
  selectElementProps?: SelectElementProps;
  icon: React.ReactElement;
  sx?: SxProps<Theme>;
  title: string;
}

export function PropertyFeatureCard({
  radioGroupElementProps,
  selectElementProps,
  title,
  icon,
}: PropertyFeatureCardProps) {
  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Box sx={{ mb: 1 }}>{icon}</Box>
        <Typography variant="h4" sx={{ pb: 2 }}>
          {title}
        </Typography>
        <RadioGroupElement
          variant="outlined"
          sx={{ width: '100%' }}
          options={radioGroupElementProps?.options}
          name={radioGroupElementProps?.name}
        />
      </Box>

      {selectElementProps && (
        <Box sx={{ p: 2, backgroundColor: 'grey.10' }}>
          <SelectElement {...{ ...selectElementProps, fullWidth: true }} />
        </Box>
      )}
    </Card>
  );
}

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  border: `1px solid ${theme.palette.grey['50']}`,
  borderRadius: theme.shape.borderRadiusLg,
  backgroundColor: theme.palette.surface.contrastDarkerText,
  cursor: 'pointer',
}));
