
const sendToGoogleSheet = async (allStepFormData: Record<string, any>) => {
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;
    console.log("sendToGoogleSheet started...");
  
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          InsuranceType: allStepFormData["id-1"],
          IndustryType: allStepFormData["id-2"].industryType,
          PolicyType: allStepFormData["id-4"].industryType,
          FirstName: allStepFormData["id-5"].firstName,
          LastName: allStepFormData["id-5"].lastName,
          CompanyName: allStepFormData["id-5"].companyName,
          Industry: allStepFormData["id-5"].industry,
          Email: allStepFormData["id-5"].email,
          PhoneNumber: allStepFormData["id-5"].phoneNumber,
          ReferralSource: allStepFormData["id-5"].referralSource,
          SubIndustry: allStepFormData["id-10"].subIndustry,
          EmployeeCount: allStepFormData["id-10"].employeeCount,
          BusinessAge: allStepFormData["id-10"].businessAge,
          AnnualSales: allStepFormData["id-10"].annualSales,
          Payroll: allStepFormData["id-10"].payroll,
          LossesCount: allStepFormData["id-10"].lossesCount,
          AnnualSubCost: allStepFormData["id-10"].annualSubcontractorCost,
          Address1: allStepFormData["id-11"].address1,
          Address2: allStepFormData["id-11"].address2,
          City: allStepFormData["id-11"].city,
          State: allStepFormData["id-11"].state,
          Zipcode: allStepFormData["id-11"].zipcode,
        }).toString(),
      });
  
      const data = await response.text();
      console.log("Response from Google Script:", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  
  export default sendToGoogleSheet;