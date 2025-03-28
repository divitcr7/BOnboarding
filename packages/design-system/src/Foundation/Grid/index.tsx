// there are lots of issue in Material UI v5 and this is for now until next major upgrade
// https://github.com/mui/material-ui/pull/32746
import MuiGrid, {
  Grid2Props as MuiGridProps,
} from '@mui/material/Unstable_Grid2';

export interface GridProps extends MuiGridProps {}

export function Grid(props: GridProps) {
  return <MuiGrid {...props} />;
}

export { Container } from '@mui/material';
