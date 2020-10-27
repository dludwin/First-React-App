import {useEffect, useState} from 'react'
import axios from 'axios'

// Function that gets data from URL 

export function useAxiosGet(url){
    const [request, setRequest] = useState({                        // Hooks were added in 2018 and are equivalent to class based approach 
        loading: false, data: null, error: false })                 // useState({loading: false, data:null, error: false})
    
    useEffect(() => {                                                // useEffect goes along with useState, it's a lambda function with curly braces. 
        setRequest({                                                // Then we call the method that modifies out variable
            loading: true, data: null, error: false })              // we start the loading process

        axios.get(url)                                        
            .then(response => {                                                              // if we have a response without error then we call out method that changes variable
                setRequest({ loading: false, data: response.data, error: false })})          // responce.data is a build-in Axios feature
            .catch(() => {
                setRequest({
                    loading: false, data: null, error: true })
            })
    }, [url])                                                       // second parameter - variable that we want to monitor, and if that variable ever changes then that's what we want to rerun the request
    return request
}
