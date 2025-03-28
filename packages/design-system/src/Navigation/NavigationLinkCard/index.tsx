import { Box } from '@/index';
import { styled } from '@mui/material';
import { Typography } from '@/Foundation/Typography';
import { ArrowRight } from '@benchmark-brokers/icons';

export interface NavigationLinkCardProps {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export function NavigationLinkCard({
  icon,
  title,
  subtitle,
  onClick,
}: NavigationLinkCardProps) {
  return (
    <Button onClick={onClick}>
      <Box className="iconWrapper">{icon}</Box>
      <Box style={{ textAlign: 'left' }}>
        <Typography variant="h5">{title}</Typography>
        <Typography
          variant="bodySmall"
          sx={{
            color: 'grey.400',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      <ArrowRight className="arrowStyle" size="sm" />
    </Button>
  );
}

const Button = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.grey[50]} `,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  transition: 'all .4s ease-out',
  ':hover': {
    backgroundColor: 'white',
    '& .arrowStyle': {
      fill: theme.palette.primary.main,
    },
  },
  '& .iconWrapper': {
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: theme.palette.grey[800],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `0rem ${theme.spacing(1)}`,
    '& svg': {
      fill: 'white',
    },
  },
  '& .arrowStyle': {
    fill: theme.palette.secondary.main,
    transition: 'all .4s ease-out',
  },
}));
