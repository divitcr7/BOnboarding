import { ReactElement } from 'react';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@/index';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { useStackedMultiStepForm } from './StackedFormProvider';

export interface StackedMultiStepFormItemProps {
  id: number;
  title: string;
  subTitle?: ReactElement | string;
  content: ReactElement | string;
  canSkip?: boolean;
  editable?: boolean;
  isExpandableDisabled?: boolean;
}

export default function StackedMultiStepFormItem({
  subTitle,
  title,
  content,
  canSkip,
  id,
  isExpandableDisabled,
}: StackedMultiStepFormItemProps) {
  const { activeStep, onCompleteStep, onSelectStep, formStepsInfo } =
    useStackedMultiStepForm();
  const itemExpanded = isExpandableDisabled ? true : activeStep === id;
  const { editable } = formStepsInfo[id];
  return (
    <AccordionWrapper expanded={itemExpanded} editable={editable}>
      <MuiAccordion
        expanded={itemExpanded}
        disabled={!!isExpandableDisabled}
        onChange={() => {
          if (editable) {
            onSelectStep(id);
          }
        }}
      >
        <MuiAccordionSummary
          expandIcon={
            editable && !isExpandableDisabled ? (
              <div>
                <ModeOutlinedIcon />
                <ExpandMoreIcon />
              </div>
            ) : null
          }
        >
          <Box sx={{ display: 'flex', justifySelf: 'center' }}>
            <span className="itemCounter">{id + 1}</span>
            <Box>
              <h4 className="itemTitle">{title}</h4>
              {typeof subTitle === 'string' ? (
                <p className="itemSubTitle">{subTitle}</p>
              ) : (
                <Box sx={{ opacity: itemExpanded ? 1 : 0.4 }}>
                  {subTitle || null}
                </Box>
              )}
            </Box>
          </Box>
          {itemExpanded && canSkip && (
            <Button
              variant="outlined"
              onClick={(e) => {
                if (e) {
                  e.stopPropagation();
                  onCompleteStep();
                }
              }}
            >
              Skip for now
            </Button>
          )}
        </MuiAccordionSummary>
        <MuiAccordionDetails>{content}</MuiAccordionDetails>
      </MuiAccordion>
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled('div')<{
  expanded?: boolean;
  editable?: boolean;
}>(({ theme, expanded, editable }) => ({
  marginBottom: theme.spacing(1.5),
  '& .MuiAccordion-root': {
    padding: 0,
    margin: 0,
    boxShadow: 'none',
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadiusLg,
  },

  '& .MuiAccordionSummary-root': {
    cursor: editable ? 'pointer' : 'auto !important',
    padding: theme.spacing(2),
    paddingLeft: 0,
    color: expanded ? theme.palette.text.primary : theme.palette.grey[500],

    '&.Mui-disabled': {
      opacity: 1,
      backgroundColor: 'white',
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& .itemCounter': {
      ...theme.typography.h6,
      transition: ' background-color 0.4s 0s ease',
      backgroundColor: theme.palette.secondary[expanded ? 'main' : 'darker'],
      height: '35px',
      width: '35px',
      borderTopRightRadius: theme.shape.circle,
      borderBottomRightRadius: theme.shape.circle,
      marginRight: theme.spacing(2),
      color: theme.palette.secondary.contrastText,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .itemTitle': {
      ...theme.typography.h2,
      margin: 0,
      paddingBottom: theme.spacing(1),
    },
    '& .itemSubTitle': {
      margin: 0,
      ...theme.typography.body1,
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'none',

      '&.Mui-expanded svg:last-child': {
        transform: 'rotate(180deg)',
        transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      '& svg': {
        marginLeft: theme.spacing(1),
      },
    },
  },
  '& .MuiAccordionDetails-root': {
    backgroundColor: 'white',
  },
}));
