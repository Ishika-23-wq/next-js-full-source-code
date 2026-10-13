let titles= ['Keep smiling 😂', 'ikigai', 'Nothing to do'];
export async function POST(request){
    const body = request.json();
    titles.push(body.title);
    return Response.json({
        message: "Title Saved successfully",
        titles: titles,
    },{status:500})
}