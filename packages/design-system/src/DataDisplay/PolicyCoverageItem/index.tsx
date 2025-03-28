import { Typography } from '@/Foundation/Typography';
import { styled, alpha, SxProps, Theme } from '@mui/material';
import { CloudRain, ChevronRight } from '@benchmark-brokers/icons';
import { Box, Button } from '@/index';
import { NumericFormat } from 'react-number-format';

interface riskFactorProps {
  label: string;
  isHighSever: boolean;
  severityDigit: string;
  severityInfo: string;
}
interface riskExtraInfoProps {
  icon: React.ReactElement;
  label: string;
  info: {
    title: string;
    subtitle?: string;
  }[];
}
export interface PolicyCoverageItemProps {
  icon: React.ReactElement;
  onDetail: () => void;
  title: string;
  subtitle: string;
  riskFactor: riskFactorProps;
  priceEstimate: {
    label: string;
    amount: number;
  };
  riskExtraInfo: riskExtraInfoProps;
  sx?: SxProps<Theme>;
}

export function PolicyCoverageItem({
  icon,
  onDetail,
  title,
  subtitle,
  riskFactor,
  priceEstimate,
  riskExtraInfo,
}: PolicyCoverageItemProps) {
  return (
    <Container riskFactor={riskFactor.isHighSever}>
      <div className="wraper">
        <div className="picIcon">{icon}</div>
        <Typography variant="h6" sx={{ margin: 'auto', marginLeft: '0' }}>
          {title}
        </Typography>
      </div>
      <Typography variant="body2" sx={{ mt: 2 }}>
        {subtitle}
      </Typography>
      <div className="divider"></div>
      <div className="riskWraper">
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <Typography
            variant="body1Bold"
            sx={{
              color: riskFactor.isHighSever
                ? 'primary.main'
                : 'secondary.darker',
            }}
          >
            {riskFactor.label}
          </Typography>
          <Box className="tagStyle">
            <Typography variant="body2Bold">
              {riskFactor.severityDigit}
            </Typography>
          </Box>
        </Box>
        {!!riskFactor.isHighSever && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body2">{riskFactor.severityInfo}</Typography>
          </Box>
        )}
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 2,
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
          <CloudRain className="iconstyle" size="sm" />
          <Box sx={{ pl: 2 }}>
            <Typography variant="body2" sx={{ pb: 1 }}>
              {priceEstimate.label}
            </Typography>
            <Typography variant="body1Bold">
              <NumericFormat
                value={priceEstimate.amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <div className="iconstyle">{riskExtraInfo.icon}</div>
          <Box sx={{ flex: 1, pl: 2 }}>
            <Typography variant="body2" sx={{ pb: 1 }}>
              {riskExtraInfo.label}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="body1Bold">
                  {riskExtraInfo.info[0].title}
                </Typography>
                <Typography variant="body2">
                  {riskExtraInfo.info[0].subtitle}
                </Typography>
              </Box>
              {!!riskExtraInfo.info[1]?.title && (
                <>
                  <Box
                    sx={{
                      borderRightWidth: 2,
                      borderRightStyle: 'solid',
                      borderRightColor: 'info.light',
                    }}
                  ></Box>
                  <Box>
                    <Typography variant="body1Bold">
                      {riskExtraInfo.info[1]?.title}
                    </Typography>
                    <Typography variant="body2">
                      {riskExtraInfo.info[1]?.subtitle}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant="text"
        endIcon={<ChevronRight />}
        color="primary"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
        }}
        onClick={onDetail}
      >
        View Details
      </Button>
    </Container>
  );
}

const Container = styled('div')<{ riskFactor: boolean }>(
  ({ theme, riskFactor }) => ({
    backgroundColor: 'white',
    color: theme.palette.surface.contrastText,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    boxShadow: theme.shadows[2],
    borderTop: `3px solid ${theme.palette.secondary.main}`,

    '& .wraper': {
      display: 'flex',
      gap: theme.spacing(2),
      '& .picIcon': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.spacing(6),
        height: theme.spacing(6),
        backgroundColor: alpha(theme.palette.secondary.light, 0.4),
        borderRadius: theme.spacing(5),
        outline: `${theme.spacing(1)} solid ${alpha(
          theme.palette.secondary.main,
          0.08
        )}`,
      },
    },
    '& .riskWraper': {
      display: 'flex',
      gap: theme.spacing(1),
      alignItems: 'center',
    },
    '& .divider': {
      borderTop: `1px solid ${theme.palette.info.light}`,
      margin: `${theme.spacing(2)} 0px`,
    },
    '& .tagStyle': {
      color: riskFactor
        ? theme.palette.primary.main
        : theme.palette.secondary.darker,
      width: theme.spacing(3),
      height: theme.spacing(3),
      backgroundColor: riskFactor
        ? alpha(theme.palette.primary.main, 0.2)
        : alpha(theme.palette.secondary.light, 0.4),
      borderRadius: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: `3px solid ${
        riskFactor
          ? alpha(theme.palette.primary.main, 0.08)
          : alpha(theme.palette.secondary.main, 0.08)
      }`,
    },
    '& .iconstyle': {
      color: theme.palette.text.primary,
      marginTop: '4px',
    },
  })
);
