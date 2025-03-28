import {
  Box,
  Typography,
  useFormState,
  z,
  FormContainer,
  RadioGroupElement,
  Container,
} from '@benchmark-brokers/ui';
import FormNavigation from './formNavigation';

const options = [
  {
    id: 'option1',
    title: 'Real Estate',
    subTitle: 'Property management systems, listing platforms, client management tools, and analytics for residential and commercial real estate professionals.',
    icon: <TestIcon />,
  },
  {
    id: 'Energy',
    title: 'Energy',
    subTitle: 'Solutions for renewable energy, oil & gas, utilities, and power generation with focus on efficiency and sustainability.',
    icon: <TestIcon />,
  },
  {
    id: 'Construction',
    title: 'Construction',
    subTitle: 'Tools for residential and commercial construction, infrastructure projects, and specialized contracting services.',
    icon: <TestIcon />,
  },
  {
    id: 'Transportation',
    title: 'Transportation',
    subTitle: 'Services for logistics, freight, public transit, and fleet management with emphasis on reliability and speed.',
    icon: <TestIcon />,
  },
  {
    id: 'NonProfit',
    title: 'Non Profit',
    subTitle: 'Resources for charitable organizations, foundations, and NGOs to maximize impact and streamline operations.',
    icon: <TestIcon />,
  },
  {
    id: 'Retail',
    title: 'Retail',
    subTitle: 'Platforms for brick-and-mortar stores, e-commerce, and omnichannel retail with inventory and customer management.',
    icon: <TestIcon />,
  },
  {
    id: 'Wholesale',
    title: 'Wholesale',
    subTitle: 'Distribution solutions, B2B marketplace tools, and inventory management systems for wholesale businesses.',
    icon: <TestIcon />,
  },
  {
    id: 'Manufacturing',
    title: 'Manufacturing',
    subTitle: 'Production optimization, supply chain management, and quality control tools for various manufacturing sectors.',
    icon: <TestIcon />,
  },
  {
    id: 'FinancialServices',
    title: 'Financial Services',
    subTitle: 'Solutions for banking, insurance, investment management, and fintech with robust security and compliance features.',
    icon: <TestIcon />,
  },
  {
    id: 'Hospitality',
    title: 'Hospitality',
    subTitle: 'Management systems for hotels, restaurants, event venues, and tourism with focus on guest experience.',
    icon: <TestIcon />,
  },
  {
    id: 'AutoService',
    title: 'Auto Service',
    subTitle: 'Repair shop management, parts inventory, and customer service tools for automotive maintenance businesses.',
    icon: <TestIcon />,
  },
  {
    id: 'Healthcare',
    title: 'Healthcare',
    subTitle: 'Clinical systems, patient management, billing solutions, and telehealth platforms for healthcare providers.',
    icon: <TestIcon />,
  },
] as const;

type OptionIDs = (typeof options)[number]['id'];
const optionIds = options.map((option) => option.id) as [
  OptionIDs,
  ...OptionIDs[],
];

const formDataSchema = z.object({
  industryType: z.enum(optionIds, {
    required_error: 'This field is required',
  }),
});

type Inputs = z.infer<typeof formDataSchema>;

export default function InsuranceType() {
  const { onFinalizeStep, onHandleBack, stepFormData } = useFormState();

  return (
    <Box>
      <Container>
        <Typography variant="h3" sx={{ pb: 3 }}>
          Select Your Insurance Type
        </Typography>
      </Container>

      <FormContainer<Inputs>
        onSuccess={(values) => onFinalizeStep(values)}
        FormDataSchema={formDataSchema}
        defaultValues={stepFormData}
      >
        <Container>
          <RadioGroupElement
            name="industryType"
            row
            variant="card"
            options={options}
            rowGroupSx={{
              gap: 2,
            }}
            cardSx={{
              flexBasis: (theme) => `calc(50% - ${theme.spacing(1)})`,
            }}
          />
        </Container>
        <FormNavigation onPreviousHandler={onHandleBack} />
      </FormContainer>
    </Box>
  );
}

function TestIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="71"
      viewBox="0 0 70 71"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.2999 31.7001L34.6999 27.8H25.3999V31.7001H36.2999Z"
        fill="#C5C7E9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.3999 24.2L30.3999 4.99995C31.3999 1.39995 34.9999 0.699952 37.9999 3.09995C45.2999 9.59995 52.5999 16.1 59.8999 22.5C59.0999 23.6 58.3999 24.7 57.4999 25.7C52.1999 22.3 46.8999 18.8 41.5999 15.4C40.4999 14.5 38.6999 13.9 37.9999 15.6C36.8999 18.6 35.9999 21.1 34.8999 24.1H25.3999V24.2Z"
        fill="#E1E2EF"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.6002 11.1C36.9002 11.1 38.0002 10 38.0002 8.70005C38.0002 7.40005 36.9002 6.30005 35.6002 6.30005C34.3002 6.30005 33.2002 7.40005 33.2002 8.70005C33.2002 10 34.2002 11.1 35.6002 11.1Z"
        fill="white"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M59.8 22.5999C62.3 20.5999 65.8 20.8999 67.1 23.6999C70.4 32.5999 65.4 38.2999 57.2 38.5999C55.4 38.6999 55.9 38.6999 54.4 38.4999C52.6 38.3999 52.4 37.2999 53.4 36.0999C55.8 33.1999 57.7 29.9999 57.4 25.7999C58.3 24.7999 59 23.6999 59.8 22.5999Z"
        stroke="#19C19E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5998 44H44.9998V52.3C44.9998 53.3 44.1998 54.2 43.0998 54.2H4.5998C3.5998 54.2 2.7998 53.3 2.7998 52.3V45.8C2.7998 44.8 3.5998 44 4.5998 44Z"
        fill="#E1E2EF"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5998 44H44.9998V48H2.7998V45.8C2.7998 44.8 3.5998 44 4.5998 44Z"
        fill="#C5C7E9"
      />
      <path
        d="M21.8999 44H44.9999L37.1999 24.2H23.8999C22.7999 24.2 21.8999 25.1 21.8999 26.2V44Z"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M25.3999 40.4001H39.5999L34.6999 27.8H25.3999V40.4001Z"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.3002 58.6001H39.6002C42.7002 58.6001 45.2002 61.1001 45.2002 64.2001C45.2002 67.3001 42.7002 69.8001 39.6002 69.8001H7.3002C4.3002 69.8001 1.7002 67.3001 1.7002 64.2001C1.8002 61.1001 4.3002 58.6001 7.3002 58.6001Z"
        fill="#E1E2EF"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M12.7998 58.6001V54.1001"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M33.7002 58.6001V54.1001"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M7.2998 64.3H38.3998"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M4.5998 44H44.9998V52.3C44.9998 53.3 44.1998 54.2 43.0998 54.2H4.5998C3.5998 54.2 2.7998 53.3 2.7998 52.3V45.8C2.7998 44.8 3.5998 44 4.5998 44Z"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}
