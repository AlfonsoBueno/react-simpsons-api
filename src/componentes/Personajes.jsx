import { useState,useEffect } from "react";
import {useFetch} from "../hooks/useFetch";
import { Card,Cargador } from "../elementos/ElementosPersonajes";
import dados from "../assets/dados.svg"
import cargandoAnimado from "../assets/simpson-homer.gif"
import { motion } from "framer-motion"

export default function Personajes(){
    const [estadoFetch,setEstadoFetch]=useState(parseInt(Math.random()*1000))
    const [url,setUrl]=useState({url:"https://thesimpsonsquoteapi.glitch.me/quotes"})
    const { datos, cargando } = useFetch(url)    

    function recargarFetch(){
        if (cargando===false)
        {
        setUrl({url:"https://thesimpsonsquoteapi.glitch.me/quotes"})
        setEstadoFetch(parseInt(Math.random()*1000))
        }

    }   

    return(
        <>
            <>
                {cargando &&
                 <motion.div 
                 style={{
                    scale: 0
                }}

                
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                animate={{ rotate: 360, scale: 1}}
                
                ><Cargador src={cargandoAnimado}></Cargador></motion.div>
                 }
            </>
        
            <>
                {datos&&!cargando&&
                <>
               <motion.div style={{scale: 0}} transition={{type: "spring", stiffness: 260, damping: 20,}}  animate={{ scale: 1}} >
                    <Card>
                        <div className={datos[0].characterDirection==="Right"?"Card--Contenido txt--izquierda":"Card--Contenido txt--derecha"}>{datos[0].quote}</div>
                        
                        <div className={datos[0].characterDirection==="Right"?"Card--Nombre txt--izquierda":"Card--Nombre txt--derecha"}>{datos[0].character}</div>
       
                        
                        <motion.img src={datos[0].image} className={datos[0].characterDirection==="Right"?"derecha":"izquierda"} alt={datos[0].character} style={{scale: 0}} transition={{type: "spring", stiffness: 260, damping: 20,delay:0.1}}  animate={{ scale: 1}}></motion.img>

                    </Card>
                </motion.div>
                </>
                }
            </>
            <>
                <img src={dados} className="dados" alt="Personaje aleatorio" onClick={recargarFetch}/>

            </>
        </>
        
    );

}