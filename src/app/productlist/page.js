"use client"
import React, { useEffect } from 'react'

function page() {
    useEffect(async()=>{
      let data=await fetch("https://dummyjson.com/products");
      data=await data.json();
      console.log(data);
      return data;
      
    },[])
  return (
    <div>
      <h1>aa gya</h1>
    </div>
  )
}

export default page
