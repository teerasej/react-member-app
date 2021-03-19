
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import useAsyncEffect from 'use-async-effect'
import { getUserProfile } from '../services/WebAPI';

export default function HomePage() {


    const token = useSelector(state => state.token);
    const [user, setUser] = useState(null);

    useAsyncEffect(async () => {

        let userFromWebAPI = await getUserProfile(token);
        setUser(userFromWebAPI);

    }, []);

    return (
        <div>
            <p>{user?.email}</p>
        </div>
    )
}
