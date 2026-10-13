"use client";
export default function Error({ error, reset }){
 return(
   <div>
      <h1>Something Went Wrong.!!!!!OMG</h1>
      <p>{error.message}</p>
      <button onClick={()=>reset()}>
         Try Again
      </button>
   </div>
 )
}