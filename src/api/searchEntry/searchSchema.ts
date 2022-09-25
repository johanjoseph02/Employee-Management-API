import * as yup from 'yup';

const searchSchema = yup.object({
    id: yup.string().length(24),
    email: yup.string().email(),
});

export default searchSchema;