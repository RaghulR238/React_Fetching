import React from 'react'
import "./nav.css";
import { useNavigate } from 'react-router-dom';
// import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
export default function Nav() {
  const navigate=useNavigate();

  return (
    <div className='nav' style={{display:"flex",justifyContent:"space-around"}}>
      <h1 onClick={()=>navigate("/")}>MagicBrix</h1>
      <h1 onClick={()=>navigate("/main",{state:"99acres"})}>99Acres</h1>
      <h1 onClick={()=>navigate("/main",{state:"housing"})}>Housing</h1>
      <h1 onClick={()=>navigate("/main",{set:"min_price"})}>Sort by Max</h1>
      <h1 onClick={()=>navigate("/main",{set:"max-price"})}>Sort by Min</h1>
      {/* <h1 onClick={()=>navigate("/filter")}>Fliter</h1> */}
      
    
    </div>
  )
}
