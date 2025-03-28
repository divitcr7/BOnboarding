import { SxProps, Theme, styled, FormLabel } from '@mui/material';
import { Typography, Box, Checkbox, Radio } from '@/index';
import React from 'react';

export interface SelectionTypeCardProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  subTitle: string;
  sx?: SxProps<Theme>;
  variant: 'radio' | 'checkbox';
  checked: boolean;
  id: string | number;
  icon: React.ReactElement;
}

export function SelectionTypeCard({
  onChange,
  checked,
  title,
  variant,
  subTitle,
  id,
  icon,
  ...rest
}: SelectionTypeCardProps) {
  return (
    <FormLabelWrapper {...rest} checked={checked}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {icon}
        <Box
          sx={{
            pl: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <Typography
            variant="body2Bold"
            sx={{
              boxSizing: 'border-box',
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="bodySmall"
            sx={{
              boxSizing: 'border-box',
              color: 'grey.400',
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
      {variant === 'checkbox' ? (
        <Checkbox checked={checked} onChange={onChange} value={id} />
      ) : (
        <Radio checked={checked} onChange={onChange} value={id} />
      )}
    </FormLabelWrapper>
  );
}

const FormLabelWrapper = styled(FormLabel)<{ checked: boolean }>(
  ({ theme, checked }) => ({
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.grey['50']}`,
    borderColor: checked
      ? theme.palette.primary.main
      : theme.palette.grey['50'],
    backgroundColor: theme.palette.surface.contrastDarkerText,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  })
);
