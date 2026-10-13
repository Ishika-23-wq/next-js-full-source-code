export async function GET(request, {params}){
    const {id} = await params;
    return Response.json({
        message: "Student Found",
        studentId: id
    })
}
export async function PUT(request, {params}){
    const {id} = await params;
    const body = await request.json();
    return Response.json({
        message: "Student Updated",
        studentId: id,
        studentData: body
    })


}

