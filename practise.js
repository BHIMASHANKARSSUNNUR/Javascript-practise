// Example of find method
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

// Example for filter method
const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumers=numbers.filter(getEvenNumbers);

function getEvenNumbers(number){
    if(number%2===0)
        return number;
}

console.log(evenNumers)

// example of reduce method with array of objects
const arrayOfObjects = [
    { name: 'Item 1', amount: 100 },
    { name: 'Item 2', amount: 200 },
    { name: 'Item 3', amount: 150 },
    { name: 'Item 4', amount: 250 },
    { name: 'Item 5', amount: 300 }
  ];

let netAmount=arrayOfObjects.reduce((acc,item)=>
    acc+item.amount,0
)
console.log(netAmount)