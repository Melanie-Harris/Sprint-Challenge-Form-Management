import axios from "axios";



export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};

function name(name1, name2) {
    return
}

export const login = (userCredentials) => {
    axios.post('/api/login', userCredentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
        })
}