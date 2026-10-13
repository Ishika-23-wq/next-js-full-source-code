export default async function Hello(){
     const response = await fetch(
        "http://localhost:3000/api/hello"
    )
    const data = await response.json();
     return (
        <>
            {data.map((item)=>
            <div key={item.id}>
              <li>{item.id}</li>
              <li>{item.name}</li>
              </div>
            )}
        </>
     )
}