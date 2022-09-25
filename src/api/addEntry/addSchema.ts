import * as yup from 'yup';

const productSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().required(),
  gender: yup.string().required(),
  phone: yup.string().required(),
});

export default productSchema;