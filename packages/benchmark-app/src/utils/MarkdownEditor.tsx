const generateMarkdown = (formData: Record<string, any>) => {
    let text = `Form Submission\n\n`;
  
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        text += `${formatKey(key)}:\n`;
        Object.entries(value).forEach(([subKey, subValue]) => {
          text += `  - ${formatKey(subKey)}: ${subValue}\n`;
        });
        text += `\n`;
      } else {
        text += `${formatKey(key)}: ${value}\n\n`;
      }
    });
  
    return text;
  };
  
  const formatKey = (key: string) => {
    return key
      .replace(/_/g, " ") // to replace underscores with spaces
  };
  
  export default generateMarkdown;