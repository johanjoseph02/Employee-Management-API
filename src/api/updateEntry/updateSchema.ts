import * as yup from 'yup';

const updateSchema = yup.object({
  name: yup.string(),
  email: yup.string().email(),
  age: yup.number().positive(),
  gender: yup.string(),
  phone: yup.string(),
});

export default updateSchema;