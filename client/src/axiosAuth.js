import axios from "axios";



export const axiosWithAuth = (token) => {
    

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};



export const login = (userCredentials) => {
    axios.post('/api/login', userCredentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
        })
}