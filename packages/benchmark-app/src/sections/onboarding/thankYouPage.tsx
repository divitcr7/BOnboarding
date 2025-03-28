import {
  Grid,
  Typography,
  Button,
  Box,
  Container,
  NavigationLinkCard,
  useFormState
} from '@benchmark-brokers/ui';
import { LogoLight } from '@/components/Logo';
import Image from 'next/image';
import CompletedListIcon from 'images/completed-list.svg';
import { Calendar } from '@benchmark-brokers/icons';
import { useState } from 'react';
import sendToGoogleSheet from "../../utils/sendToGoogleSheet";



export default function ThankYouPage() {
  const { allStepFormData } = useFormState();
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{ text: string; color: string } | null>(null);

 const sendData=async ()=>{
  setLoading(true);
  setResponseMessage(null);

  try {
    await sendToGoogleSheet(allStepFormData);
    setResponseMessage({text:"Data sent successfully!",color:"green"})
  } catch (error) {
    setResponseMessage({text:"Failed to send data. Please try again after some time.",color:"red"})
  }
  finally{
    setLoading(false)
  }
 }


  return (
    <Box
      sx={{
        backgroundColor: "grey.10",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container sx={{ maxWidth: "52rem", textAlign: "center", pt: 3 }}>
        <LogoLight />
        <Typography variant="h1" sx={{ pt: 3, pb: 2 }}>
          Perfect, You Are Almost There!
        </Typography>
        <Typography variant="h3" sx={{ pb: 5 }}>
          How Would You Like To Add Your Remaining Details?
        </Typography>
        <Box sx={{ mb: 1, backgroundColor: "white", py: 14, px: 6 }}>
          <Grid container columnSpacing={10}>
            <Grid md={5} display="flex" alignItems="center" justifyContent="flex-end">
              <Image priority src={CompletedListIcon} height={210} width={210} alt="completed icon" />
            </Grid>
            <Grid md={7} sx={{ textAlign: "left" }}>
              <Typography variant="h3" sx={{ pb: 1 }}>
                Finalize your survey to get a more accurate quote
              </Typography>
              <Typography variant="body1" sx={{ pb: 7 }}>
                Detailed description goes here.
              </Typography>
              <Button onClick={() => {}} variant="contained">
                Get A Quote
              </Button> <br/><br/>
              <Button onClick={sendData} variant="contained" disabled={loading}>
                {loading ? "Sending..." : "Send Data"}
              </Button>
              {responseMessage && (
                <Typography sx={{ color: responseMessage.color, mt: 2 }}>
                  {responseMessage.text}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <Grid container columnSpacing={1}>
          <Grid md={6}>
            <NavigationLinkCard
              icon={<Calendar />}
              title="Schedule a call with our agent"
              subtitle="Need to request a certificate?"
              onClick={() => {}}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}