const students = [
    { id: 1, name: 'Virat', age: 34 },
    { id: 2, name: 'Dhoni', age: 42 },
    { id: 3, name: 'Rohit', age: 36 },
    { id: 4, name: 'Ashwin', age: 37 },
    { id: 5, name: 'ABD', age: 40 }
  ];
const id=2;

const getStudent=students.find(student=>(
    student.id===id
)
)

getStudent.age=50;

console.log(students)