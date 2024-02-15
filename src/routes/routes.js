import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1/facebook-clone';
// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const api = axios.create({ baseURL:BASE_URL});
export const postData = (url,data,token) =>{
    const auth = {
        headers:{Authorization:`Bearer ${token || ''}`}
    }
    const reponse = api.post(url,data,auth);
    return reponse;
}
export const getData = (url,token) =>{
    const auth = {
        headers:{Authorization:`Bearer ${token || ''}`}
    }
    const reponse = api.get(url,auth);
    return reponse;
}
export const updateData = (url,data,token) =>{
    const auth = {
        headers:{Authorization:`Bearer ${token || ''}`}
    }
    const reponse = api.patch(url,data,auth);
    return reponse;
}
export const deleteData = (url,token) =>{
    const auth = {
        headers:{Authorization:`Bearer ${token || ''}`}
    }
    const reponse = api.get(url,auth);
    return reponse;
}