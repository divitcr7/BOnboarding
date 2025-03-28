import {
  Box,
  Typography,
  useFormState,
  z,
  Grid,
  FormContainer,
  TextFieldElement,
  SelectElement,
  Container,
} from '@benchmark-brokers/ui';
import FormNavigation from './formNavigation';

const industryOptions = [
  {
    label: 'Technology',
    value: 'technology',
  },
  {
    label: 'Healthcare',
    value: 'healthcare',
  },
  {
    label: 'Retail',
    value: 'retail',
  },
  {
    label: 'Education',
    value: 'education',
  },
  {
    label: 'Manufacturing',
    value: 'manufacturing',
  },
] as const;
type IndustryOptionsValues = (typeof industryOptions)[number]['value'];
const industryOptionsValues = industryOptions.map((option) => option.value) as [
  IndustryOptionsValues,
  ...IndustryOptionsValues[],
];

const referralSourceOptions = [
  {
    label: 'Internet Search',
    value: 'internet_search',
  },
  {
    label: 'Social Media',
    value: 'social_media',
  },
  {
    label: 'Friend or Family Referral',
    value: 'referral',
  },
] as const;

type ReferralSourceOptionsValues =
  (typeof referralSourceOptions)[number]['value'];
const referralSourceOptionsValues = referralSourceOptions.map(
  (option) => option.value
) as [ReferralSourceOptionsValues, ...ReferralSourceOptionsValues[]];

const formDataSchema = z.object({
  firstName: z.string({
    required_error: 'Full Name is required',
  }),
  lastName: z.string({
    required_error: 'Last Name is required',
  }),
  companyName: z.string({
    required_error: 'Company Name is required',
  }),
  industry: z.enum(industryOptionsValues, {
    required_error: 'This field is required',
  }),
  email: z.string().email({ message: 'Invalid email address' }),

  phoneNumber: z
    .string()
    .min(10, { message: 'Must be a valid mobile number' })
    .max(14, { message: 'Must be a valid mobile number' }),
  referralSource: z.enum(referralSourceOptionsValues, {
    required_error: 'This field is required',
  }),
});

type Inputs = z.infer<typeof formDataSchema>;

export default function PersonalInformation() {
  const { onFinalizeStep, onHandleBack, stepFormData } = useFormState();

  return (
    <Box>
      <Container>
        <Typography variant="h3" sx={{ pb: 3 }}>
          Great! Let&apos;s Personalize Your Quote
        </Typography>
      </Container>

      <FormContainer<Inputs>
        onSuccess={(values) => onFinalizeStep(values)}
        FormDataSchema={formDataSchema}
        defaultValues={stepFormData}
      >
        <Container>
          <Grid container columnSpacing={4} rowSpacing={3}>
            <Grid md={6}>
              <TextFieldElement name="firstName" fullWidth label="First Name" />
            </Grid>
            <Grid md={6}>
              <TextFieldElement name="lastName" fullWidth label="Last Name" />
            </Grid>
            <Grid md={12}>
              <TextFieldElement
                name="companyName"
                label="Company Name"
                fullWidth
              />
            </Grid>
            <Grid md={12}>
              <SelectElement
                name="industry"
                label="Industry"
                fullWidth
                options={industryOptions}
              />
            </Grid>
            <Grid md={12}>
              <TextFieldElement name="email" fullWidth label="Email" />
            </Grid>
            <Grid md={12}>
              <TextFieldElement
                name="phoneNumber"
                label="Phone Number"
                type="tel"
                inputProps={{
                  pattern: '[0-9+()-]*'
                }}
                onKeyPress={(e) => {
                  const allowedChars = /^[0-9+()-]$/;
                  if (!allowedChars.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                fullWidth
              />
            </Grid>
            <Grid md={12}>
              <SelectElement
                name="referralSource"
                label="How did you hear about us?"
                fullWidth
                options={referralSourceOptions}
              />
            </Grid>
          </Grid>
        </Container>
        <FormNavigation onPreviousHandler={onHandleBack} />
      </FormContainer>
    </Box>
  );
}
