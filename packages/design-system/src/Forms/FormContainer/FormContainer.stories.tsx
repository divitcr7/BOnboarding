import { useState } from 'react';
import { FormContainer } from '.';
import { Button, z, RadioGroupElement, Box } from '@/index';

export default {
  title: 'Forms/FormContainer',
};

const formDataSchema = z.object({
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'This field is required',
  }),
});

// convert zod schema to typescript types for formContainer types
type Inputs = z.infer<typeof formDataSchema>;

export function Example() {
  const [values, setValues] = useState<Inputs>();

  return (
    <div>
      <FormContainer<Inputs>
        onSuccess={(values) => setValues(values)}
        FormDataSchema={formDataSchema}
      >
        <RadioGroupElement
          label="Select Your Gender"
          name="gender"
          row
          variant="default"
          options={[
            {
              id: 'male',
              label: 'Male',
            },
            {
              id: 'female',
              label: 'Female',
            },
            {
              id: 'other',
              label: 'Other',
            },
          ]}
        />
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </div>
      </FormContainer>
      <Box sx={{ backgroundColor: 'grey.50', p: 2, mt: 2 }}>
        Data:
        <br />
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Box>
    </div>
  );
}
