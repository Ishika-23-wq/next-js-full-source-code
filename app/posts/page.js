export const revalidate=20;
export default async function Posts(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    )
    const currentTime=new Date().toLocaleTimeString()
    const data = await response.json();
    return (
        <>
          <ul>
            {currentTime}
            <hr></hr>
            {data.map((item)=>
              <li>{item.title}</li>
            )}
            </ul>
        </>
    )
}