import React from 'react'

export default async function Profile({params}) {
    const {id,name,email}= await params;
  return (
    <div>
        <h2>This is my Profile Page</h2>
        <h3>Profile Id {id}</h3>
        <h3>Profile Name {name}</h3>
        <h3>Profile Email {email}</h3>
    </div>
  )
}
