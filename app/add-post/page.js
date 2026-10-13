"use client";
import React, { useState } from 'react'

export default function AddPost() {
    const [title, setTitle]=useState("")
    const [titles, setTitles] = useState(['Keep smiling 😂', 'ikigai', 'Nothing to do'])
    async function addTitle(){
      setTitles([...titles, title]);
      const response = await fetch("http://localhost:3000/api/post",
        {
            method: "POST",
            body: JSON.stringify({
                title: title
            })
        }
      )
    if (!response.ok) {
      // Rollback
      setTitles(titles);
      alert("Failed to add student");
    }
    }
  return (
    <div>
        <input name="title" placeholder='Enter your post title' onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={addTitle}>Add Title</button>
        <br></br>
          <br></br>
        {titles.map((e,i)=>
        <div key={i}>
            {e} <br></br>
            </div> 
        )}
    </div>
  )
}
