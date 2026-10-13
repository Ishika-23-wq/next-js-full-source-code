"use server";
let students = [
  {
    id: 1,
    name: "Riya",
    course: "React"
  },
  {
    id: 2,
    name: "Rahul",
    course: "NextJS"
  }
];
export async function addStudent(formData) {

  const name = formData.get("name");
  const course = formData.get("course");

  if (!name || !course) {
    return {
      error: "Name and course are required"
    };
  }

  students.push({
    id: students.length + 1,
    name: name,
    course: course
  });

  console.log("Students:", students);

  return {
    success: "Student added successfully"
  };
}
// "use server";
// export async function uploadFile(previousState, formData) {
//   const file = formData.get("file");
//   if (!file || file.size === 0) {
//     return {
//       error: "Please select a file",
//       success:""
//     };
//   }
//   if (file.size > 5 * 1024 * 1024) {
//     return {
//       error: "File must be less than 5 MB",
//       success:""
//     };
//   }
//   console.log("File name:", file.name);
//   console.log("File type:", file.type);
//   console.log("File size:", file.size);
//   return {
//     success: "File received successfully"
//   };
// }
// "use server";

// export async function addStudent(formData) {
//   const name = formData.get("name");
//   const email = formData.get("email");
//   if (!name) {
//     return {
//       error: "Name is required"
//     };
//   }
//   if (!email) {
//     return {
//       error: "Email is required"
//     };
//   }
//   if (!email.includes("@")) {
//     return {
//       error: "Invalid email"
//     };
//   }

//   console.log({
//     name,
//     email
//   });
//   return {
//     success: "Student added successfully"
//   };
// }
export async function increaseCount() {

  await new Promise(resolve =>
    setTimeout(resolve, 2000)
  );

  console.log("Server Action completed");
}