import { styled } from '@mui/material';
import { Typography } from '@/index';

export interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  icon: React.ReactElement;
  href?: string;
  label?: string;
  darkMode?: boolean;
}

export function IconLink({ icon, label, darkMode, ...rest }: IconLinkProps) {
  return (
    <Link {...rest} darkMode={darkMode}>
      <div className="iconWrapper">{icon}</div>
      {!!label && (
        <Typography variant="bodySmall" sx={{ paddingTop: 1 }}>
          {label}
        </Typography>
      )}
    </Link>
  );
}

const Link = styled('a', {
  shouldForwardProp: (prop: string) => !['darkMode'].includes(prop),
})<{ darkMode: boolean | undefined }>(({ theme, darkMode }) => ({
  transition: 'fill 0.3s',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: darkMode ? 'white' : theme.palette.grey[200],
  cursor: 'pointer',
  '&:hover': {
    color: darkMode ? theme.palette.grey[100] : theme.palette.secondary.main,
    '& .iconWrapper': {
      borderColor: darkMode ? 'transparent' : theme.palette.secondary.main,
      '& svg': {
        fill: darkMode ? theme.palette.grey[100] : theme.palette.secondary.main,
      },
    },
  },
  '& .iconWrapper': {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode ? theme.palette.grey[600] : 'transparent',
    border: `1px solid ${darkMode ? 'transparent' : theme.palette.grey[200]}`,
    '& svg': {
      transition: 'fill 0.3s',
      fill: darkMode ? 'white' : theme.palette.grey[200],
    },
  },
}));
