import emailjs from "@emailjs/browser";

const sendEmail = async (message: string,firstName:string,lastName:string) => {
  const params: Record<string, unknown> = {
    email: process.env.NEXT_PUBLIC_EMAILJS_RECEIVER,
    subject: `Form data - ${firstName} ${lastName}`,
    message,
  };

  try {
    // console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    // console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    // console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    // console.log("Email sent successfully:", response);
    return response;
  } catch (error: unknown) {
    console.error("Failed to send email:", error);

    if (error instanceof Error) {
      console.error("Error Message:", error.message);
    } else if (typeof error === "object" && error !== null) {
      console.error("Error Details:", JSON.stringify(error, null, 2));
    }

    throw error; 
  }
};

export default sendEmail;