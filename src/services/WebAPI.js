import axios from 'axios';
const endpoint = '';

const client = axios.create({
    baseURL: endpoint
})

export const signUp = async (jsonData) => {
    let response = await client.post(
        '/signup',
        jsonData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    console.log(response);

    if(response.data.user) {
        return true;
    } else {    
        return false;
    }
}


export const login = async (jsonData) => {
    let response = await client.post(
        '/login',
        jsonData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    console.log(response);

    if(response.data.token) {
        return response.data.token;
    } else {    
        return undefined;
    }
    
}

export const getUserProfile = async (token) => {

    console.log(token)

    const config = { 
        headers: {
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    let response = await client.get(
        '/users/profile',
        config
    );
    console.log(response);

    if(response.status == 200) {
        return response.data.user;
    } else {
        return undefined;
    }
    
    
}

