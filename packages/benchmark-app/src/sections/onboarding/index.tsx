import {
  Typography,
  Container,
  useFormState,
  Box,
} from '@benchmark-brokers/ui';
import InsuranceType from './insuranceType';
import IndustrySelection from './industrySelection';
import PolicyTypeSelection from './policyTypeSelection';
import PersonalInformation from './personalInformation';
import CompanyInformation from './companyInformation';
import BusinessInformation from './bussinessInformation';
import ThankYouPage from './thankYouPage';

import Sidebar from './sidebar';

export default function OnBoardingPage() {
  const { activeStep, allStepFormData } = useFormState();

  console.log('formData:', allStepFormData);
  if (activeStep === 'id-7') {
    return <ThankYouPage />;
  }
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <Box sx={{ width: '100%' }}>
        <Container>
          <Typography variant="body2" sx={{ textAlign: 'right', pb: 5, pt: 2 }}>
            Question? We&apos;re here 8am - 9pm ET Mon-Fri Call 281-569-4353
          </Typography>
          {activeStep === 'id-1' && <InsuranceType />}
        </Container>
        {activeStep === 'id-2' && <IndustrySelection />}
        {activeStep === 'id-4' && <PolicyTypeSelection />}
        {activeStep === 'id-5' && <PersonalInformation />}
        {activeStep === 'id-10' && <CompanyInformation />}
        {activeStep === 'id-11' && <BusinessInformation />}
      </Box>
    </Box>
  );
}
