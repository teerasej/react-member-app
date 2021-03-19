
import React, { useState, useEffect} from 'react'
import { CircularProgress } from "@material-ui/core";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import HomePage from '../pages/HomePage';

export default function Main() {

    const [onLoading, setOnLoading] = useState(true);
    const history = useHistory();
    const token = useSelector(state => state.token);

    let alreadyLogin = false;


    useEffect(() => {
        // check token 
        if(token) {
            alreadyLogin = true;
        }

        // หยุดแสดงตัวโหลด
        setOnLoading(false);

        if(!alreadyLogin) {
          history.push('/login');
        }

        
    }, []);


    if (onLoading) {
        return (
            <CircularProgress />
        );
    } else {
        return (
            <div>
                <HomePage/>
            </div>
        );
    }
}
