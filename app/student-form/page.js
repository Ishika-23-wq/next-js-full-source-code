// "use client";
// import { useActionState } from "react";
// import { uploadFile } from "../actions";
// const initialState = {
//   error: "",
//   success: ""
// };

// export default function StudentForm() {
//   const [state, formAction] = useActionState(
//     uploadFile,
//     initialState
//   );

//   return (
//     <div>

//       <h1>File Upload</h1>

//       <form action={formAction}>

//         <input
//           type="file"
//           name="file"
//         />

//         <br />
//         <br />

//         <button type="submit">
//           Upload File
//         </button>

//       </form>

//       {state.error && (
//         <p>{state.error}</p>
//       )}

//       {state.success && (
//         <p>{state.success}</p>
//       )}

//     </div>
//   );
// }