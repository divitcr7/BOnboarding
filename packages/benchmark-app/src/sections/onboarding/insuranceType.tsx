import {
  Box,
  Grid,
  Typography,
  JumboSelectionTypeCard,
  useFormState,
} from '@benchmark-brokers/ui';

export default function InsuranceType() {
  const { onFinalizeStep } = useFormState();

  return (
    <Box>
      <Typography variant="h3" sx={{ pb: 3 }}>
        Select Your Insurance Type
      </Typography>
      <Grid container columnSpacing={4}>
        <Grid md={6}>
          <JumboSelectionTypeCard
            sx={{ height: '100%' }}
            onClick={() => onFinalizeStep('commercialInsurance')}
            icon={CommercialInsuranceIcon}
            title={'Commercial Insurance'}
            subTitle={
              'We guarantee full coverage for all properties at an excellent rate.'
            }
          />
        </Grid>
        <Grid md={6}>
          <JumboSelectionTypeCard
            sx={{ height: '100%' }}
            onClick={() => onFinalizeStep('personalInsurance')}
            icon={PersonalInsuranceIcon}
            title={'Personal Insurance'}
            subTitle={
              'We guarantee full coverage for all properties at an excellent rate.'
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

const CommercialInsuranceIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
  >
    <path d="M30.9004 6H9.90039V11.3H30.9004V6Z" fill="#C5C7E9" />
    <path d="M78.3004 24.8H30.9004V85.8001H78.3004V24.8Z" fill="#E1E2EF" />
    <path
      d="M71.8998 31.8H37.2998V66.4001H71.8998V31.8Z"
      fill="white"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M81.1004 19.8999H30.9004V24.6999H81.1004V19.8999Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M30.9004 6H9.90039V85.8H30.9004V6Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M33.0998 1.80005H7.7998V6.00005H33.0998V1.80005Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M25.2996 15H15.5996V76.8H25.2996V15Z"
      fill="#E1E2EF"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M51.4998 71H37.2998V85.8H51.4998V71Z"
      fill="white"
      stroke="#19C19E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M44.4004 71V85.8"
      stroke="#19C19E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M71.9998 71H57.7998V85.8H71.9998V71Z"
      fill="white"
      stroke="#19C19E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M64.7998 71V85.8"
      stroke="#19C19E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M63.2998 31.8V66.5"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M54.5996 31.8V66.5"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M46 31.8V66.5"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M37.2998 40.5H71.9998"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M37.2998 49.2H71.9998"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M37.2998 57.8H71.9998"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path d="M78.3004 24.8H30.9004V30.1H78.3004V24.8Z" fill="#C5C7E9" />
    <path
      d="M78.3004 24.8H30.9004V85.8001H78.3004V24.8Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);

const PersonalInsuranceIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6187 86.1254H74.3812V44.1458L43.9999 14.1187L13.6187 44.1458V86.1254Z"
      fill="#E1E2EF"
      stroke="black"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.3812 51.1424V44.1458L43.9999 14.1187L13.6187 44.1458V51.1424L43.9999 21.1153L74.3812 51.1424Z"
      fill="#C5C7E9"
    />
    <path
      d="M4.17969 41.5219L43.9998 2.16602L83.82 41.5219L77.9207 47.3525L43.9998 14.1186L10.079 47.3525L4.17969 41.5219Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M61.6978 10.6204H72.0215V29.861L61.6978 19.6576V10.6204Z"
      fill="#E1E2EF"
    />
    <path
      d="M60.1636 4H73.8364C74.4182 4 75 4.58333 75 5.16667V9.83333C75 10.4167 74.4182 11 73.8364 11H60.1636C59.5818 11 59 10.4167 59 9.83333V4.875C59 4.29167 59.5818 4 60.1636 4Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M49.8487 32.4846H38.1509C36.494 32.4846 35.1509 33.8278 35.1509 35.4846V46.9761C35.1509 48.633 36.494 49.9761 38.1509 49.9761H49.8487C51.5056 49.9761 52.8487 48.633 52.8487 46.9761V35.4846C52.8487 33.8278 51.5056 32.4846 49.8487 32.4846Z"
      fill="white"
      stroke="#19C19E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.1509 86.1254H52.5538V63.0949C52.5538 61.6373 51.3739 60.4712 49.8991 60.4712H37.8056C36.3307 60.4712 35.1509 61.6373 35.1509 63.0949V86.1254Z"
      fill="white"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M44 49.6846V32.4846"
      stroke="#19C19E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M52.8487 41.2305H35.1509"
      stroke="#19C19E"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M13.6187 86.1254H74.3812V44.1458L43.9999 14.1187L13.6187 44.1458V86.1254Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path d="M72 11H62V16H72V11Z" fill="#C5C7E9" />
    <path
      d="M62 11H72V29.836L62 19.9242V11Z"
      stroke="#232675"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);
