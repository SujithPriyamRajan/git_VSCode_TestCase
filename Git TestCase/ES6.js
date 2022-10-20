//Checking Git 

//Git is working from Git HUB Edit

var num //function scoped only access with in functions
let name  //block scoped  NOT even within function
const age =12  //block scoped *NO RE installation

function variables()
{ 
//     var num 
// let name
num = 6;
 name ='john'

console.log(num);
}
variables();

console.log(num);    
console.log(name);
console.log(age);


//object

const person = 
{
    name : 'john',
    walk: function(){},
    talk(){}
};
function talk(){console.log('talking')}
function walk(){console.log('walking')}

person.talk();
person['']
