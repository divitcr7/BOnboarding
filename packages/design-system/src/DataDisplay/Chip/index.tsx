import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

type MuiSelectedChipProps = Omit<
  MuiChipProps,
  'component' | 'classes' | 'children'
>;

export interface ChipProps extends MuiSelectedChipProps {}

export function Chip(props: ChipProps) {
  return <MuiChip {...props} />;
}
