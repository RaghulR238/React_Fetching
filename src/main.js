import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./main.css"
import {useLocation} from "react-router-dom"
export default function Main() {
    const[data1,setData]=useState();
    const[sorting,setSorting]=useState();
    const[tenend,settenend]=useState();

    const location=useLocation();
    useEffect(()=>
    {
        async function fetchData()
        {
    
            let platforms="magicbrix";
            if(location.state!=null)
            {
                platforms=location.state;
            }
            const res=await axios.get(`https://rental-platforms.onrender.com/${platforms}`);
            setData(res.data);
            // console.log(data1[0]);
        }
        fetchData(); 
    },[location.state,location.set])
    
    console.log(location);

    // let sorting="max";
    // if(location.set!=null)
    // {
    //     if(location.set=="min_price")
    //     sorting="min";
    // else
    // sorting="max";
    // }

  return (
    <div >
        
        <button onClick={()=>setSorting("max")}>Sort By Min</button>
        <button onClick={()=>setSorting("min")}>Sort By Max</button>
        {
            (sorting==null&&data1)&&
            data1&&data1.map((item)=>{
                return(
        <div className='box'>
            
                    <h1>Furnishing : {item.furnishing}</h1>
                    <h1>Location : {item.location}</h1>
                    <h1>Plot Area{item.plot_area}</h1>
                    <h1>Rent : {item.rent  }</h1>
                   
                    <h1>Seciruty : {item.security_deposit}</h1>
                    <h1>Specification : {item.specification}</h1>
                    <h1>Tenant : {item.tenant_preferred}</h1>
        
                    </div>
                )
                }
                
            )
        }


      {
        (sorting=="max"&&data1)&&data1.sort((a,b)=>a.rent>b.rent?1:-1).map((item)=>{
        return(
<div className='box'>
    
            <h1>Furnishing : {item.furnishing}</h1>
            <h1>Location : {item.location}</h1>
            <h1>Plot Area{item.plot_area}</h1>
            <h1>Rent : {item.rent  }</h1>
           
            <h1>Seciruty : {item.security_deposit}</h1>
            <h1>Specification : {item.specification}</h1>
            <h1>Tenant : {item.tenant_preferred}</h1>

            </div>
        )
        }
        
    )
      }

{
        (sorting=="min"&&data1)&&data1.sort((a,b)=>a.rent<b.rent?1:-1).map((item)=>{
        return(
<div className='box'>
    
            <h1>Furnishing : {item.furnishing}</h1>
            <h1>Location : {item.location}</h1>
            <h1>Plot Area{item.plot_area}</h1>
            <h1>Rent : {item.rent  }</h1>
           
            <h1>Seciruty : {item.security_deposit}</h1>
            <h1>Specification : {item.specification}</h1>
            <h1>Tenant : {item.tenant_preferred}</h1>

            </div>
        )
        }
        
    )
      }
    </div>
  )
}
