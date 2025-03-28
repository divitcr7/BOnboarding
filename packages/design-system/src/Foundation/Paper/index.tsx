import { PaperProps as MuiPaperProps, Paper as MuiPaper } from '@mui/material';

type PaperProps = Pick<MuiPaperProps, 'sx' | 'elevation' | 'children'>;

export function Paper(props: PaperProps) {
  return <MuiPaper {...props} />;
}
