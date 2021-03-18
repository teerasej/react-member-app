
import React from 'react'
import { Button, TextField } from '@material-ui/core'
import * as yup from 'yup';

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


    return (

        <div>
            <h1>Create new account: </h1>
            <form>
                <div>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                    />
                </div>
                <div>
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
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
