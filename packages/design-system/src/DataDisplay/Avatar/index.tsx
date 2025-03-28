import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  SxProps,
  Theme,
} from '@mui/material';

// Only include variant, size, and color from all MUI props
type MuiAvatarBaseProps = Pick<
  MuiAvatarProps,
  'alt' | 'sizes' | 'imgProps' | 'src'
>;

export interface AvatarProps extends MuiAvatarBaseProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  border?: 'sm' | 'md' | 'lg';
  borderColor?: string;
  sx?: SxProps<Theme>;
}

const sizeMap = {
  'xs': '1.5rem',
  'sm': '4.5rem',
  'md': '8.25rem',
  'lg': '10.5rem',
};
const borderMap = {
  'sm': '0.25rem',
  'md': '0.5rem',
  'lg': '0.9rem',
};

export function Avatar({ size = 'md', border, sx, ...rest }: AvatarProps) {
  const avatarSize = sizeMap[size];
  const borderWidth = border ? borderMap[border] : 0;
  return (
    <MuiAvatar
      sx={{
        width: avatarSize,
        height: avatarSize,
        border: borderWidth,
        borderStyle: 'solid',
        borderColor: 'grey.600',
        boxSizing: 'content-box',
        ...sx,
      }}
      {...rest}
    />
  );
}
