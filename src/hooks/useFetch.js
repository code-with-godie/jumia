import {useEffect, useState} from 'react'
export const useFetch = (url,payload)=>{
    const[loading,setLoading] = useState(true);
    const[data,setData] = useState(undefined);
    const[error,setError] = useState(null);
    const token = payload.token ? payload.token : ''
    useEffect(()=>{
        getData();
    },[url])
    const getData = async ()=>{
        try {
            const payload   = {
                headers:{
                    authorization:`Bearer ${token}`
                }
            }
            const response = await fetch(url,payload);
            const responseJson = await response.json();
            setData(responseJson);
        } catch (error) {
            setError(error.message)
        } finally{
            setLoading(false);
        }
    }
    return {data,loading,error};
}

