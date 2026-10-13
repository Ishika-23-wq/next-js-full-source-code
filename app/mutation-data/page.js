import React from 'react'
import { addStudent } from '../actions'

export default function MutationData() {
  return (
    <div>
        <form action={addStudent}>
            <input name="name" placeholder='Enter your name'/>
            <br/>
            <br/>
            <input name="course" placeholder='Enter your Course'/>
            <br/>
            <br/>
            <button>Add Student</button>
        </form>
    </div>
  )
}
