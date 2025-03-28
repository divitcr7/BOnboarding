import { SxProps, Theme, styled } from '@mui/material';
import { Typography, IconButton, useHover } from '@/index';
import { ArrowRight } from '@benchmark-brokers/icons';
export interface JumboSelectionTypeCardProps
  extends React.ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
  icon: React.ReactElement;
  title: string;
  subTitle: string;
  sx?: SxProps<Theme>;
}

export function JumboSelectionTypeCard({
  icon,
  onClick,
  title,
  subTitle,
}: JumboSelectionTypeCardProps) {
  const [hoverRef, isHovered] = useHover<HTMLButtonElement>();

  return (
    <Card>
      {icon}
      <Typography
        variant="h4"
        sx={{
          p: 2,
          boxSizing: 'border-box',
          transition: 'all 0.3s',
          color: isHovered ? 'primary.main' : '',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          p: 1,
          boxSizing: 'border-box',
        }}
      >
        {subTitle}
      </Typography>
      <IconButton
        sx={{
          mt: 3,
          boxSizing: 'border-box',
        }}
        ref={hoverRef}
        type="button"
        icon={<ArrowRight />}
        onClick={onClick}
      />
    </Card>
  );
}

const Card = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  border: `1px solid ${theme.palette.grey['50']}`,
  backgroundColor: theme.palette.surface.contrastDarkerText,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'all 0.3s',
  boxShadow: theme.shadows[2],
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));
