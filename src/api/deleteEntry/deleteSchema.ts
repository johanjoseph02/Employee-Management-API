import * as yup from 'yup';

export const deleteEmailSchema = yup.object({
    email: yup.string().email().required(),
});

export const deleteIdSchema = yup.object({
    id: yup.string().length(24).required(),
});

