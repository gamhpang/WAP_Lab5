//1.

function sum(arr){
    return arr.filter(i=>i>20).reduce((accum,num)=>accum+num,0);
}

const nums = [21,19,29,3,10];
console.log(sum(nums))

//2.

const getNewArray = function(arr){
    return arr.filter(a=>typeof a === 'string' && a.length >= 5 && a.includes("a"));
}

const test = [23,"asd","asdfgh","qwerta"];
console.log(getNewArray(test))


//3.

const concat = (p1,p2,p3)=> [...p1,...p2,...p3];

console.log(concat('hi',[1,2,3],['Hello','world']))


//4.

const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];

  const result = students.filter(student => student.courses.includes('cs303'))
                        .map(student => ({
                            name:student.name,
                            avgGrade:student.grades.reduce((acc,curr,index,arr)=>acc+curr/arr.length,0)
                        }))
                        .reduce((obj,student)=>{
                            obj[student.name] = student.avgGrade;
                            return obj;
                        },{});
  
  console.log(result);
  