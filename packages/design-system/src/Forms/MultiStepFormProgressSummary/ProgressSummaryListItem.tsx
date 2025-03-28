import { useCallback } from 'react';
import { styled } from '@mui/material';
import { Typography } from '@/index';
import { ChevronUp, ChevronDown, Check } from '@benchmark-brokers/icons';
export interface ProgressSummaryListItemProps {
  id: string;
  title: string;
  isCompleted: boolean;
  isSelected: boolean;
  expandable?: boolean;
  expanded?: boolean;
  onSelect?: (key: string) => void;
  expandItem?: (key: string) => void;
  children?: React.ReactElement;
}

export default function ProgressSummaryListItem({
  id,
  title,
  isCompleted,
  expandable,
  expanded,
  onSelect,
  expandItem,
  isSelected,
  children,
}: ProgressSummaryListItemProps) {
  const ContentWrapper = useCallback(
    ({ children }: { children: React.ReactNode }) => {
      if (onSelect || expandable) {
        return (
          <button
            className="itemContent"
            onClick={() => (expandable ? expandItem?.(id) : onSelect?.(id))}
          >
            {children}
          </button>
        );
      } else {
        return <div className="itemContent">{children}</div>;
      }
    },
    [onSelect, id, expandable, expandItem]
  );
  return (
    <Item isCompleted={isCompleted} isSelected={isSelected}>
      <ContentWrapper>
        <div className="titleWrapper">
          <ItemBullet isCompleted={isCompleted} isSelected={isSelected}>
            <Check className="checkmark" />
          </ItemBullet>
          <Typography variant="overline">{title}</Typography>
        </div>
        {!!expandable && (
          <button onClick={() => expandItem?.(id)} className="expandableButton">
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        )}
      </ContentWrapper>
      {children}
    </Item>
  );
}

const Item = styled('li', {
  shouldForwardProp: (prop: string) =>
    !['isSelected', 'isCompleted'].includes(prop),
})<{ isCompleted: boolean; isSelected: boolean }>(({
  theme,
  isCompleted,
  isSelected,
}) => {
  const color =
    isCompleted || isSelected
      ? theme.palette.surface.contrastDarkerText
      : theme.palette.grey[200];
  return {
    margin: 0,
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    position: 'relative',
    color: color,
    '& .itemContent': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& button.itemContent': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
      color: color,
      cursor: 'pointer',
      paddingLeft: 0,
      margin: 0,
    },
    '.titleWrapper': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 1,
    },
    '.expandableButton': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      '& svg': {
        fill: color,
        width: '16px',
        height: '16px',
      },
    },

    '&:not(:last-child):not(:has(ul))::before': {
      content: "''",
      position: 'absolute',
      top: theme.spacing(2),
      height: '100%',
      left: 'calc(1.25rem / 2 - 2px)',
      border: `2px dashed ${theme.palette.grey[600]}`,
    },
  };
});

const ItemBullet = styled('span', {
  shouldForwardProp: (prop: string) =>
    !['isSelected', 'isCompleted'].includes(prop),
})<{
  isCompleted: boolean;
  isSelected: boolean;
}>(({ theme, isCompleted, isSelected }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '1.25rem',
  width: '1.25rem',
  border: `2px solid ${theme.palette.grey[600]}`,
  boxSizing: 'border-box',
  backgroundColor: isCompleted
    ? theme.palette.surface.dark
    : theme.palette.grey[600],
  borderRadius: '100%',
  marginRight: theme.spacing(2),
  position: 'relative',
  '& svg.checkmark': {
    fill: theme.palette.primary.main,
    width: '60%',
    height: '60%',
    display: isCompleted && !isSelected ? 'block' : 'none',
  },
  '&:after':
    isCompleted && !isSelected
      ? {}
      : {
          content: "''",
          position: 'absolute',
          width: '55%',
          height: '55%',
          borderRadius: '100%',
          backgroundColor:
            isCompleted || isSelected
              ? theme.palette.surface.contrastDarkerText
              : theme.palette.grey[200],
        },
}));
