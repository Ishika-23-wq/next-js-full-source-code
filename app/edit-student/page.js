"use client";

import { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

  async function editStudent() {
    const response = await fetch("/api/hello", {
      method: "PUT", // Change POST to PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 2,
        name: "Toshina Kapoor",
        course: "NextJS",
      }),
    });

    const data = await response.json();

    // Updated student list comes from API
    setStudents(data.students);
  }

  return (
    <div>
      <h1>Edit Student (PUT API)</h1>

      <button onClick={editStudent}>
        Edit Student
      </button>

      <hr />

      {students.map((student) => (
        <div key={student.id}>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Course:</strong> {student.course}</p>
        </div>
      ))}
    </div>
  );
}