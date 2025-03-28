import { ReactElement, useState } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  styled,
  alpha,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export interface AccordionProps
  extends Omit<MuiAccordionProps, 'variant' | 'children'> {
  variant?: 'boxed' | 'rounded';
  data: { title: string; content: React.ReactElement | string }[];
}

const expandedIcon = {
  boxed: (expanded?: boolean) =>
    expanded ? <HighlightOffIcon /> : <AddCircleOutlineIcon />,
  rounded: () => <ExpandMoreIcon />,
};

export function Accordion({
  variant = 'rounded',
  data,
}: AccordionProps): ReactElement {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {data.map((item, i) => {
        const key = String.fromCharCode('a'.charCodeAt(0) + i);
        const itemExpanded = expanded === key;

        return (
          <AccordionWrapper key={key} variant={variant} expanded={itemExpanded}>
            <MuiAccordion expanded={itemExpanded} onChange={handleChange(key)}>
              <MuiAccordionSummary
                expandIcon={expandedIcon[variant](itemExpanded)}
              >
                <span className="listItemCounter">{key}.</span>
                {item.title}
              </MuiAccordionSummary>
              <MuiAccordionDetails>{item.content}</MuiAccordionDetails>
            </MuiAccordion>
          </AccordionWrapper>
        );
      })}
    </>
  );
}

const AccordionWrapper = styled('div')<{
  variant: 'boxed' | 'rounded';
  expanded?: boolean;
}>(({ theme, variant, expanded }) => ({
  ...(variant === 'rounded'
    ? {
        marginBottom: theme.spacing(1.5),
        '& .MuiAccordion-root': {
          padding: 0,
          margin: 0,
          boxShadow: 'none',
          backgroundColor: 'white',
          border: `1px solid ${theme.palette.grey[50]}`,
          borderRadius: theme.shape.borderRadiusSm,
        },
        '& .listItemCounter': {
          ...theme.typography.h6,
          backgroundColor: alpha(theme.palette.secondary.darker, 0.2),
          height: '35px',
          width: '35px',
          borderTopRightRadius: theme.shape.circle,
          borderBottomRightRadius: theme.shape.circle,
          marginRight: theme.spacing(2),
          color: theme.palette.secondary.dark,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .MuiAccordionSummary-root': {
          padding: theme.spacing(2),
          paddingLeft: 0,
          ...theme.typography.h4,
          color: theme.palette.grey[expanded ? 800 : 600],
          '& .MuiAccordionSummary-content': {
            margin: 0,
          },
        },
      }
    : {}),

  ...(variant === 'boxed'
    ? {
        '& .MuiAccordion-root': {
          padding: 0,
          margin: 0,
          boxShadow: 'none',
          borderTop: `1px solid ${theme.palette.grey[50]}`,
          borderBottom: `1px solid ${theme.palette.grey[50]}`,
          backgroundColor: expanded ? 'white' : 'transparent',
          borderRadius: 0,
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&::before': {
            display: 'none',
          },
        },
        '& .listItemCounter': {
          display: 'none',
        },
        '& .MuiAccordionSummary-root': {
          ...theme.typography.h4,
          color: theme.palette.grey[expanded ? 800 : 600],
          padding: `${theme.spacing(3)}`,
          '& .MuiAccordionSummary-content': {
            margin: 0,
          },
        },
        '& .MuiAccordionDetails-root': {
          ...theme.typography.body1,
          padding: `0 ${theme.spacing(3)} ${theme.spacing(3)}`,
        },
      }
    : {}),
}));
