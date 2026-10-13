let students = [
    { id: 1, name: "Ajad Bharti", course: "ReactJS" },
    { id: 2, name: "Toshina", course: "ReactJS" },
    { id: 3, name: "Sahil", course: "NextJS" },
    { id: 4, name: "Kanhayia", course: "NextJS" }
];
export async function GET() {
    return Response.json(students)
}
export async function POST(request){
    const data=await request.json();
    if(Array.isArray(data)){
    students.push(...data)
    }else{
    const newData={
        id: data.id,
        name: data.name,
        course: data.course,
    }
    students.push(newData);
    }
    return Response.json({
        message:"Student Added",
        // student:newData
        students:students
    })
}
export async function PUT(request){
    const data =await request.json();
    const student = students.find(item=>item.id===data.id)
    if(!student){
     return Response.json({
        message:"Student not found"
     })
    }
    student.name=data.name;
    student.course=data.course;
    return Response.json({
        message:'Student data updated succesfully',
        data:student
    })
}
export async function DELETE(request){
  const data = await request.json();
  const index= students.findIndex(item=>item.id===data.id)
  if(index===-1){
    return Response.json({message:"Data not found"})
  }
  students.splice(index,1)
    return Response.json({
        message:'Student data updated succesfully',
        data:students
    })
}



// app
//  └── api
//       └── students
//            └── [id]
//                  └── route.js


// GET
// POST
// PUT
// PATCH
// DELETE


// /api/students/1
// /api/students/2
// /api/students/3


// 1/route.js
// 2/route.js
// 3/route.js