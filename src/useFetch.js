import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] =useState(null) //fetch
    const [isPending, setIsPending] = useState(true) //loading message
    const [error, setError] =useState(null) //error message

    useEffect(() => { 
        setTimeout(() => { //setTimeout must have to loading
           fetch(url)
               .then(res =>{
                   if(!res.ok){  //error
                       throw Error('Something wrong the fetch')
                   }
                   return res.json() //fetch
               })
               .then(data =>{
                   setData(data) //fetch
                   setIsPending(false) //loading
                   setError(null) //error
               })
               .catch((error) => {
                   setIsPending(false) //loading
                   setError(error.message) //error
               })
         }, 1000)
       }, [url]) 
    return {data, isPending, error}
}

export default useFetch