import * as yup from 'yup';

const formSchema = yup.object().shape({

    name: yup 
        .string()
        .trim()
        .required('Name is required!'),
        
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(5, 'Password must be 5 characters long!'),
    tof: yup.boolean()


})

export default formSchema;