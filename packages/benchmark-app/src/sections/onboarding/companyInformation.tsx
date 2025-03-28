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

const subIndustryOptions = [
  {
    label: 'Automotive',
    value: 'automotive',
  },
  {
    label: 'Aerospace',
    value: 'aerospace',
  },
  {
    label: 'Chemical Manufacturing',
    value: 'chemical_manufacturing',
  },
  {
    label: 'Machinery and Equipment',
    value: 'machinery_equipment',
  },
  {
    label: 'Electronics Manufacturing',
    value: 'electronics_manufacturing',
  },
] as const;

type SubIndustryOptionsValues = (typeof subIndustryOptions)[number]['value'];
const subIndustryOptionsValues = subIndustryOptions.map(
  (option) => option.value
) as [SubIndustryOptionsValues, ...SubIndustryOptionsValues[]];

const annualSaleOptions = [
  {
    label: '$0 - $50,000',
    value: '0-50000',
  },
  {
    label: '$50,000 - $100,000',
    value: '50000-100000',
  },
  {
    label: '$100,000 - $200,000',
    value: '100000-200000',
  },
] as const;

type AnnualSaleOptionsValues = (typeof annualSaleOptions)[number]['value'];
const annualSaleOptionsValues = annualSaleOptions.map(
  (option) => option.value
) as [AnnualSaleOptionsValues, ...AnnualSaleOptionsValues[]];

const formDataSchema = z.object({
  subIndustry: z.enum(subIndustryOptionsValues, {
    required_error: 'This field is required',
  }),
  employeeCount: z.number().int().gt(1),
  businessAge: z.number().int().gt(1),
  annualSales: z.enum(annualSaleOptionsValues, {
    required_error: 'This field is required',
  }),
  payroll: z.number().positive(),
  lossesCount: z.number().int().nonnegative(),
  annualSubcontractorCost: z.number().positive(),
});

type Inputs = z.infer<typeof formDataSchema>;

export default function CompanyInformation() {
  const { onFinalizeStep, onHandleBack, stepFormData } = useFormState();

  return (
    <Box>
      <Container>
        <Typography variant="h3" sx={{ pb: 3 }}>
          Tell Us About Your Company
        </Typography>
      </Container>

      <FormContainer<Inputs>
        onSuccess={(values) => onFinalizeStep(values)}
        FormDataSchema={formDataSchema}
        defaultValues={stepFormData}
      >
        <Container>
          <Grid container columnSpacing={4} rowSpacing={3}>
            <Grid md={12}>
              <SelectElement
                name="subIndustry"
                label="Sub Industry"
                fullWidth
                options={subIndustryOptions}
              />
            </Grid>

            <Grid md={6}>
              <TextFieldElement
                name="employeeCount"
                fullWidth
                type="number"
                label="Number of Employees"
              />
            </Grid>
            <Grid md={6}>
              <TextFieldElement
                name="businessAge"
                fullWidth
                type="number"
                label="Years in Business "
              />
            </Grid>
            <Grid md={6}>
              <SelectElement
                name="annualSales"
                label="Annual Sales"
                fullWidth
                options={annualSaleOptions}
              />
            </Grid>
            <Grid md={6}>
              <TextFieldElement
                name="payroll"
                type="number"
                prefix="$"
                label="Monthly Employee Payroll"
                fullWidth
              />
            </Grid>

            <Grid md={6}>
              <TextFieldElement
                name="lossesCount"
                fullWidth
                type="number"
                label="The Number of Losses In The Past 5 Years"
              />
            </Grid>
            <Grid md={6}>
              <TextFieldElement
                name="annualSubcontractorCost"
                label="Annual Subcontractor Cost"
                type="number"
                prefix="$"
                fullWidth
              />
            </Grid>
          </Grid>
        </Container>
        <FormNavigation onPreviousHandler={onHandleBack} />
      </FormContainer>
    </Box>
  );
}
