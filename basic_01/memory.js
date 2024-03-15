// memory
// stack 
//genrelly allocated to the premitive datatype 
// and its copy is passed so the original copy is not changed

let origanal = "Ankit";
let copy = origanal;
copy = "Shivam";
console.log(origanal);
console.log(copy);

// heap
// generally allocate to the refernece datatype or the non premitive datatype 
// and reference is passed so if the change is made is the copy than original will be changed.

let oriobject =
{
    name : "Ankit",
    class : 12
}
let copbject = oriobject;
copbject.class= 13;
console.log(copbject);
console.log(oriobject);
