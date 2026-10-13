export async function GET(request){
    const {searchParams} = new URL(request.url)
    const course = searchParams.get("course")
    const name = searchParams.get("name")
    // return Response.json({
    //     message: "Course is :",
    //     course: course,
    //     name: name,
    // },
    // {
    //     status: 200
    // }
    return Response.json(
  {
    error: "Student not found"
  },
  {
    status: 404
  }
);

}


