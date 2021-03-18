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
