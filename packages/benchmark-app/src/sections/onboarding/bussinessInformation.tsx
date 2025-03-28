import {
  Box,
  Typography,
  useFormState,
  z,
  Grid,
  FormContainer,
  TextFieldElement,
  Container,
  DatePicker,
  DropZone,
} from '@benchmark-brokers/ui';
import FormNavigation from './formNavigation';

const formDataSchema = z.object({
  address1: z.string({
    required_error: 'Address is required',
  }),
  address2: z.string().optional(),
  city: z.string({
    required_error: 'City is required',
  }),
  state: z.string({
    required_error: 'State is required',
  }),
  zipcode: z.string({
    required_error: 'Zipcode is required',
  }),
  datePicker: z
    .date({
      required_error: 'Effective date is required',
    })
    .optional(),
});

type Inputs = z.infer<typeof formDataSchema>;

export default function BusinessInformation() {
  const { onFinalizeStep, onHandleBack, stepFormData } = useFormState();

  return (
    <Box>
      <Container>
        <Typography variant="h3" sx={{ pb: 3 }}>
          Tell Us About Your Business
        </Typography>
      </Container>

      <FormContainer<Inputs>
        onSuccess={(values) => onFinalizeStep(values)}
        onError={(error) => console.log(error)}
        FormDataSchema={formDataSchema}
        defaultValues={stepFormData}
      >
        <Container>
          <Grid container columnSpacing={4} rowSpacing={3}>
            <Grid md={12}>
              <TextFieldElement
                name="address1"
                fullWidth
                type="text"
                label="Address 1"
              />
            </Grid>
            <Grid md={12}>
              <TextFieldElement
                name="address2"
                fullWidth
                type="text"
                label="Address 2"
              />
            </Grid>
            <Grid md={4}>
              <TextFieldElement
                name="city"
                fullWidth
                type="text"
                label="City"
              />
            </Grid>
            <Grid md={4}>
              <TextFieldElement
                name="state"
                fullWidth
                type="text"
                label="State"
              />
            </Grid>
            <Grid md={4}>
              <TextFieldElement
                name="zipcode"
                fullWidth
                type="text"
                label="Zipcode"
              />
            </Grid>
            <Grid md={12}>
              <DatePicker
                name="datePicker"
                label="When Would You Like This Policy To Take Into Effect?"
                fullWidth
              />
            </Grid>

            <Grid md={12}>
              <DropZone
                title="Add any supporting documentation needed to help quote this policy (Optional)"
                icon={FileUploadIcon}
              />
            </Grid>
          </Grid>
        </Container>
        <FormNavigation onPreviousHandler={onHandleBack} />
      </FormContainer>
    </Box>
  );
}

const FileUploadIcon = (
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
