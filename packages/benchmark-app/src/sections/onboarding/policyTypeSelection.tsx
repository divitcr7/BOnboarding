import {
  Box,
  Typography,
  useFormState,
  z,
  FormContainer,
  CheckboxGroupElement,
  Container,
} from '@benchmark-brokers/ui';
import FormNavigation from './formNavigation';

const options = [
  {
    id: 'option1',
    title: 'Title Insurance',
    subTitle: 'Protects against financial loss from defects in title to real property and from the invalidity or unenforceability of mortgage loans.',
    icon: <TestIcon />,
  },
  {
    id: 'ApartmentPackage',
    title: 'Apartment Package',
    subTitle: 'Comprehensive coverage for apartment building owners including property damage, liability, loss of income, and equipment breakdown.',
    icon: <TestIcon />,
  },
  {
    id: 'CommercialProperty',
    title: 'Commercial Property',
    subTitle: 'Covers buildings, inventory, equipment and business interruption for retail stores, office buildings, and industrial properties.',
    icon: <TestIcon />,
  },
  {
    id: 'BusinessOwnersPolicy',
    title: 'Business Owners Policy',
    subTitle: 'Combined coverage package for small to medium businesses that includes property, liability, and business interruption insurance.',
    icon: <TestIcon />,
  },
  {
    id: 'NonProfit',
    title: 'Non Profit',
    subTitle: 'Specialized coverage for 501(c)(3) organizations including directors & officers liability, property damage, and special event coverage.',
    icon: <TestIcon />,
  },
  {
    id: 'GeneralLiability',
    title: 'General Liability',
    subTitle: 'Protection against third-party claims for bodily injury, property damage, and personal injury occurring on business premises.',
    icon: <TestIcon />,
  },
  {
    id: 'Flood',
    title: 'Flood',
    subTitle: 'Covers damage caused by flooding to structures and their contents, often required for properties in designated flood zones.',
    icon: <TestIcon />,
  },
  {
    id: 'Manufacturing',
    title: 'Manufacturing',
    subTitle: 'Specialized coverage for manufacturing facilities including equipment breakdown, product liability, and supply chain interruption.',
    icon: <TestIcon />,
  },
  {
    id: 'WorkmansCompensation',
    title: 'Workmans Compensation',
    subTitle: 'Mandatory insurance that provides benefits to employees who suffer work-related injuries or illnesses, regardless of fault.',
    icon: <TestIcon />,
  },
  {
    id: 'ProfessionalLiability',
    title: 'Professional Liability',
    subTitle: 'Protects professionals against negligence claims and errors or omissions in the services they provide to clients.',
    icon: <TestIcon />,
  },
  {
    id: 'CommercialAuto',
    title: 'Commercial Auto',
    subTitle: 'Coverage for vehicles used for business purposes, including liability, collision, and comprehensive protection.',
    icon: <TestIcon />,
  },
  {
    id: 'BuildersRisk',
    title: 'Builders Risk',
    subTitle: 'Project-specific coverage that protects buildings under construction against damage, theft, and certain natural disasters.',
    icon: <TestIcon />,
  },
] as const;

type OptionIDs = (typeof options)[number]['id'];
const optionIds = options.map((option) => option.id) as [
  OptionIDs,
  ...OptionIDs[],
];

const formDataSchema = z.object({
  industryType: z.array(z.enum(optionIds), {
    required_error: 'This field is required',
  }),
});

type Inputs = z.infer<typeof formDataSchema>;

export default function PolicyTypeSelection() {
  const { onFinalizeStep, onHandleBack, stepFormData } = useFormState();

  return (
    <Box>
      <Container>
        <Typography variant="h3" sx={{ pb: 3 }}>
          Policy Type
        </Typography>
      </Container>

      <FormContainer<Inputs>
        onSuccess={(values) => onFinalizeStep(values)}
        FormDataSchema={formDataSchema}
        defaultValues={stepFormData}
      >
        <Container>
          <CheckboxGroupElement
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
