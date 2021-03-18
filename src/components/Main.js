
import React, { useState, useEffect} from 'react'
import { CircularProgress } from "@material-ui/core";
import { useHistory } from 'react-router';

export default function Main() {

    const [onLoading, setOnLoading] = useState(true);
    const history = useHistory();

    let alreadyLogin = false;


    useEffect(() => {
        // check token 


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
            <div>Home</div>
        );
    }
}
