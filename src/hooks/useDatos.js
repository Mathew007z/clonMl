
import { useState , useEffect} from 'react';



export const useDatos = () => { 
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(response => setData(response))
    },[])
    
    return data
}

