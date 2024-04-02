import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Filter() {

const navigate=useNavigate();
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'20px'}}>
        <label>Sort By</label>
      <button  style={{width:"20%"}} onClick={()=>navigate("/filter",{set:"min_price"})} >Min Price</button>
      <button  style={{width:"20%"}} onClick={()=>navigate("/filter",{set:"max_price"})} >Max Price</button>
    </div>

  )
}
