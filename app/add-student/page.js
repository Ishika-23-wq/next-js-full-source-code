"use client";

import { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

  async function addStudent() {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 4,
        name: "Riya",
        course: "NextJS"
      })
    });

    const data = await response.json();

    setStudents(data.students);
  }

  return (
    <div>
      <button onClick={addStudent}>Add Student</button>

      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>
        </div>
      ))}
    </div>
  );
}