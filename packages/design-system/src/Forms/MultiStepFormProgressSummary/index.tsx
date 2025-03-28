import { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import { styled, SxProps, Theme } from '@mui/material';
import { Typography } from '@/index';
import ProgressSummaryListItem from './ProgressSummaryListItem';
import { LinearProgress } from '@/index';

interface FormDataItem {
  id: string;
  title: string;
  sub?: string[];
  status: 'pending' | 'completed';
}

export type MultiStepFormProgressSummaryDataType = Record<string, FormDataItem>;

export interface MultiStepFormProgressSummaryProps {
  data?: MultiStepFormProgressSummaryDataType;
  orderIds: string[];
  onSelect?: (id: string) => void;
  onExpand?: (id: string, expanded: boolean) => void;
  canSelectCompletedItem?: boolean;
  activeStep?: string;
  sx?: SxProps<Theme>;
}

export function MultiStepFormProgressSummary({
  data,
  orderIds,
  onSelect = () => {},
  onExpand = () => {},
  canSelectCompletedItem,
  activeStep = orderIds[0],
}: MultiStepFormProgressSummaryProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  ); // ex: {'id-2': true}
  const isPrevStepCompleted = useRef(false);

  useEffect(() => {
    // check if active step is not one of main steps and its sub steps
    if (!orderIds.includes(activeStep)) {
      const parentId = findParentId(activeStep);
      if (parentId) {
        expandItem(parentId, true);
      }
    }
  }, [activeStep]);

  const findParentId = (stepId: string) => {
    if (!data) {
      return null;
    }
    if (orderIds.includes(stepId)) {
      return null;
    } else {
      return orderIds.find((id) => {
        const item = data[id];
        if (item && item.sub && item.sub.includes(stepId)) {
          return true;
        }
      });
    }
  };

  const progressPercentage = useMemo(() => {
    if (!data) {
      return 0;
    }
    const values = Object.values(data);
    const total = values.length;
    const completed = values.filter(
      (item) => item.status === 'completed'
    ).length;
    return parseFloat(Number((100 * completed) / total).toFixed(1));
  }, [data]);

  const expandItem = useCallback(
    (id: string, expanded: boolean) => {
      setExpandedItems({ [id]: expanded });
      onExpand(id, expanded);
    },
    [expandedItems]
  );

  const toggleExpand = useCallback(
    (id: string) => {
      const isExpanded = !expandedItems[id];
      expandItem(id, isExpanded);
    },
    [expandedItems]
  );

  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ pb: 3, '& .percentage': { color: 'warning.dark' } }}
      >
        Application <span className="percentage">{progressPercentage}% </span>
        completed
      </Typography>
      <LinearProgress
        darkMode
        value={progressPercentage}
        color="primary"
        sx={{ mb: 2 }}
      />
      <ListContainer>
        {orderIds.map((id) => {
          if (!data) {
            return null;
          }
          const item = data[id];
          const expandable = !!item.sub && !!item.sub.length;
          const isCompleted = item.status === 'completed';
          const canSelect =
            canSelectCompletedItem &&
            (isCompleted || isPrevStepCompleted.current) &&
            !expandable;

          let subs;
          const subSelected = !!item.sub?.includes?.(activeStep);
          if (expandable && item.sub && expandedItems[id]) {
            subs = (
              <ListContainer
                sx={{
                  ml: 3,
                  mt: 2,
                }}
              >
                {item.sub.map((subId) => {
                  const subItem = data[subId];
                  const isSubItemCompleted = subItem.status === 'completed';
                  //  todo: add if previous item is completed this should be able to select
                  const canSelect =
                    canSelectCompletedItem &&
                    (isSubItemCompleted || isPrevStepCompleted.current);
                  const isSubSelected = activeStep === subItem.id;
                  isPrevStepCompleted.current = isSubItemCompleted;
                  return (
                    <ProgressSummaryListItem
                      isCompleted={isSubItemCompleted}
                      title={subItem.title}
                      key={subItem.id}
                      isSelected={isSubSelected}
                      id={subItem.id}
                      onSelect={canSelect ? onSelect : undefined}
                    />
                  );
                })}
              </ListContainer>
            );
          }
          isPrevStepCompleted.current = isCompleted;
          return (
            <ProgressSummaryListItem
              isCompleted={isCompleted}
              expandItem={toggleExpand}
              title={item.title}
              key={item.id}
              isSelected={activeStep === item.id || subSelected}
              expandable={!!item.sub && !!item.sub.length}
              expanded={expandable && expandedItems[id]}
              id={item.id}
              onSelect={canSelect ? onSelect : undefined}
            >
              {subs}
            </ProgressSummaryListItem>
          );
        })}
      </ListContainer>
    </Container>
  );
}

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.surface.dark,
  color: theme.palette.surface.contrastDarkerText,
  padding: theme.spacing(3),
}));

const ListContainer = styled('ul')(() => ({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
}));
