
import React from 'react'
import { Button, TextField } from '@material-ui/core'
import {
    Link, useHistory
  } from "react-router-dom";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { actions } from '../redux/actions';
import { login } from '../services/WebAPI';

export default function LoginPage() {

    const dispatch = useDispatch();
    const history = useHistory();

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
            console.log('Login Form:', jsonFormData);
            
            onAuthentication(jsonFormData)
        },
    });

    const onAuthentication = async (jsonFormData) => {
        
        // Authen with Web API
        let token = await login(jsonFormData);


        // if authen success, dispatch token to reducer
        if(token) {
            dispatch({
                type: actions.LOGIN_SUCCESS,
                payload: token
            })
        }
       

        history.push('/');
    }


    return (

        <div>
            <h1>Login: </h1>
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
                        Sign in
                    </Button>
                </div>
                <div>
                    <Button component={Link} to={'/signup'}>
                        Create Account?
                    </Button>
                </div>
            </form>
        </div>
    )
}
