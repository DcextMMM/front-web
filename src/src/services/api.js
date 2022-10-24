import axios from 'axios';

export default function setupAPI(){
    const token = localStorage.getItem('@auth.token');
    const api = axios.create({
        baseURL: 'http://localhost:3210',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return api;
} 