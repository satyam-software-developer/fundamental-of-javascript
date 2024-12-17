const aprilBatch = ['Tina','Madhur'];
const mayBatch = ['Ritik', 'Deepak','Shalini'];
const juneBatch = ['Saba', 'Shivani'];
const julyBatch = [];


// function addStudent(batch,student){
//     batch.push(student);
//     console.log(batch);
// }
// addStudent(aprilBatch, 'Ritu');
// addStudent(mayBatch, 'Sunny');

//Rest ...

function addStudents(batch, ...students){
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}

addStudents(aprilBatch, "Sunny","Ritu", "Sheena");

// Spread ...
// Expand/copying
const newBatch = [...mayBatch];
console.log(newBatch);

mayBatch.push("newstudent");
console.log(mayBatch);
console.log(newBatch);

// Concatenate
const mergedBatch = [...mayBatch, ...juneBatch];
console.log(mergedBatch);



