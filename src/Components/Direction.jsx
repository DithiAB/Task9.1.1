import useDirection from './useDirection';
import { useRef} from "react";
import './Direction.css'
const Direction = () => {

    const{data,dir,changeDir,setData}=useDirection()
    const inputElem= useRef('')
   
  return (
    <div className='main'>
        <input type='text' value={data} onChange={(e)=>setData(e.target.value)} ref={inputElem} style={{width:'500px',padding:'10px'}}/><br/>
        <button onClick={changeDir} style={{marginTop:'15px'}}>Change Direction</button><span></span>
        
    </div>
  )
}

export default Direction