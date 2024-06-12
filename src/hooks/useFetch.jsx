import { useState,useEffect } from "react";

function useFetch(url){
    
    const [urlFetch,setUrlFetch]=useState(null)
    const [datos,setDatos]=useState(null)
    const [cargando,setCargando]=useState(true)

    
    useEffect(()=>{
        setUrlFetch(url.url)
        setCargando(true) 

        const fetchData = async()=>{

        
            try {
                const response =await fetch(url.url)
                const json = await response.json();
                setDatos(json);
                
            } catch(error){
                console.error(error);
            }finally{
                setTimeout(()=>setCargando(false),1400)
                }
            }

        fetchData()

        
        
    },[url, ])

    return { datos,cargando };

}

export {useFetch}