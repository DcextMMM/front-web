import axios from 'axios';

export default function setupAPI(){
    console.log(' afifhiaos');
    const api = axios.create({
        baseURL: 'http://localhost:3210',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6ImFncm9ub21vIiwiaWF0IjoxNjY2NDY2NzMwLCJleHAiOjE2NjcwNzE1MzB9.7bnK0NcVf0j8mTAJDBmZmDj45alM97ahOMqIvGLP07M"
        }
    });
    return api;
} 