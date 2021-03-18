
import React from 'react'
import { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function SignupPage() {

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(4, 'Password should be of minimum 4 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            const jsonFormData = JSON.stringify(values);
            console.log('Sign up Form:', jsonFormData);
            onStartRegisteration(jsonFormData);
        },
    });

    const [isRegisterationSuccess, setIsRegisterationSuccess] = useState(false);

    const onStartRegisteration = (jsonFormData:any) => {

        // register new account

        
        setIsRegisterationSuccess(true);
    }
    return (

        <div>
            <h1>Create new account: </h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div>
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <div>
                    <Button variant="contained" type="submit">
                        Register
                    </Button>
                </div>
            </form>
        </div>
    )
}
