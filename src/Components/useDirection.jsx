import React from 'react'
import { useState ,useRef} from "react";
const useDirection = () => {
    
    const[data, setData]=useState('')
    const[dir, setDir]=useState('rtl') 
    const Htmldata=useRef(document.documentElement)
    const changeDir=()=>{
        if(dir==='ltr'){
        Htmldata.current.setAttribute('dir','rtl')
        setData(data)
        setDir('rtl')
           }else{
            Htmldata.current.setAttribute('dir','ltr') 
            setData(data)  
            setDir('ltr') 
           }   
    }
  return {data,dir,changeDir,setData}
}

export default useDirection

