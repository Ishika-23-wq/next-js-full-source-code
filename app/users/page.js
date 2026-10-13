"use client";
import React, { useEffect, useState } from 'react'
import { revalidate } from '../posts/page';
export default  function Users() {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
      async function getUsers(){
      const response =await fetch("https://jsonplaceholder.typicode.com/users",
        {cache: "force-cache"},{revalidate:30}
      )
    const data =await response.json();
    setUsers(data)
}
getUsers();
    },[])
  return (
    <div>
        {users.map((item)=>item.name)}
    </div>
  )
}
