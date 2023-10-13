/*
Object is an unordered collection of key-value pairs where each key value pair is 
called a property.
The key can be a string and the value can be any valid javascript value like string, number, 
an array or even a function.
When we declare a function as a property of an object, we can call this as a method.
*/
/*
//example1:object1 is an empty object
let object1={};
console.log(object1);
*/
/*
//example2:person is an object with 2 properties firstName, lastName with the corresponding 
//values Rajesh, Kumar.When an object has multiple properties, we can use comma 
//to seperate the line.
let person=
{
    firstName:"Rajesh",
    lastName:"Kumar"
};
console.log(person);
*/
/*
//we can access properties of an object using dot notation.
let person=
{
    firstName:"Rajesh",
    lastName:"Kumar"
};
console.log(person.firstName);
console.log(person.lastName);
*/
/*
//array notation for accessing properties
let person=
{
    firstName:"Rajesh",
    lastName:"Kumar"
};
console.log(person["firstName"]);
console.log(person['lastName']);
*/
/*
//array notation will work for all to access those but dot notation will not work for all
let person=
{
    name:"Sam",
    age:35,
    "Full Address":"Mumbai,Andheri",
    job:"Designer",
    dob:1990,
    1985:"DOB"
};
console.log(person);
console.log(person.name);
console.log(person["age"]);
console.log(person["Full Address"]);
console.log(person.job);
console.log(person['1985']);
console.log(person[1985]);
*/
/*
//to modify value of the property of an object
let person=
{
    firstName:"Rajesh",
    lastName:"Kumar"
};
person.firstName="Suresh";
console.log(person.firstName);
person["lastName"]="Shetty";
console.log(person);
*/
/*
//to add a new property
let person=
{
    firstName:"Rajesh",
    lastName:"Kumar"
};
person["job"]="Developer";
console.log(person);
*/
/*
//adding property to an empty object
let object1={};
object1["name"]="Rahul";
object1["age"]=25;
object1.designation="HR";
console.log(object1);
*/
/*
//example-incomplete have to complete
let person=
{
    firstName:"Rahul",
    lastName:"Shetty",
    age:2023-1990,
    job:"Designer",
    friends:["Teena","Seema","Raj"]
};
console.log(person);
console.log(`First Name:${person.firstName}\n
Last Name:${person.lastName}\n
Age:${person.age}\n
Job:${person.job}\n
Friend1:${person.friends[0]}\n
Friend2:${person.friends[1]}\n
Friend3:${person.friends[2]}
`);
let nameKey="Name";
console.log(person['first'+nameKey]);
console.log(person['last'+nameKey]);
let interestedIn=person()
*/
/*
//example9
let person=
{
    firstName:"Rohit",
    lastName:"Kumar",
    age:24,
};
console.log(person);
//we used a function expression to create a function and assigned it to the welcome property of the person object. So it is becoming method not function.
person.welcome=function ()
{
    console.log("Welcome Rohit");
}
console.log(person);
person.welcome();//calling the method
*/
/*
//example10:-alternative way to add a function to a object. after adding to a object function will be called as method
let person=
{
    firstName:"Rohit",
    lastName:"Kumar",
    age:24,
};
function welcome()
{
    console.log("Welcome Rohit");
}
function call_person()
{
    console.log("Person called");
}
person.welcome1=welcome;
person.call_person=call_person;
console.log(person);
//calling the method
person.welcome1();
person.call_person();
*/
//example11
/*
//It is possible to define methods of an object using the object literal syntax which is as shown in the below example.
//ES6(EcmaScript 6) provides us with the method syntax that allows us to make it shorter to define a method for an object.

let person=
{
    firstName:"Rohit",
    lastName:"Kumar",
    age:24,
    welcome:function ()
    {
        console.log("Welcome Rohit");
    }
};
person.welcome();//calling the method
*/
/*
//example12
let person=
{
    firstName:"Rahul",
    lastName:"Shetty",
    age:2023-1990,
    job:"Designer",
    friends:["Teena","Seema","Raj"],
    calcAge1:function (birthYear)
    {
        return 2023-birthYear;
    }
};
let age=person.calcAge1(1990);
console.log(`Age is:${age}`);
*/
/*
//example13:-this keyword refers to the current object
let person=
{
    personName:"Seema",
    birthDay:function ()
    {
        console.log(this);
        //return `Happy Birthday to ${person.personName}`;//same
        return `Happy Birthday to ${this.personName}`;
    }
};
console.log(person.birthDay());
*/
/*
//if we declare this keyword outside any object then that will refer to parent object, which is window object of browser
console.log(this);
*/
/*
//if we declare this keyword outside any object then that will refer to parent object, which is window object of browser
this.x=250;
console.log(this);
*/
/*
//example14
let name="Rahul";
let obj=
{
    name:"Rajat",
    showName:function ()
    {
        console.log(this.name);
    }
};
obj.showName();
//In the above example, the showName function is defined as a property of the obj object, so when the showName() function is called on the obj object [obj.showName()], then this keyword refers to the obj object 
let func=obj.showName;
console.log(func);
func();
window.name='Window';
window.showName=obj.showName;
window.showName();
//When the showName function
*/ 
/*
//behind the scene it is happening:
window=
{
    .....some property
    .....some property
    .....some property
    name:"Window"
    showName:function ()
    {
        console.log(this.name);
    }
}
*/

/*//example15
let employee=
{
    firstName:"Rahul",
    lastName:"Kumar",
    designation:"Clerk",
    salary:10000,
    workExperienceYears:4,
    getFullName:function ()
    {
        return `${this.firstName} ${this.lastName}`;
    },
    promote:function ()
    {
        let isEligibleForPromotion;
        if(this.designation=="Clerk")
        {
            if(this.workExperienceYears>=3)
            {
                isEligibleForPromotion=true;
                this.designation="Asst. Manager";
                this.salary+=this.salary*10/100;
            }
            else
            {
                isEligibleForPromotion=false;
            }
        }
        else if(this.designation=="Asst. Manager")
        {
            if(this.workExperienceYears>=5)
            {
                isEligibleForPromotion=true;
                this.designation="Manager";
                this.salary+=this.salary*20/100;
            }
            else
            {
                isEligibleForPromotion=false;
                //this.isEligibleForPromotion=false;//same
            }
        }
        return isEligibleForPromotion;
    }
};
console.log(employee);
console.log(employee.firstName,employee.lastName,employee.designation,employee.salary,employee.workExperienceYears);
console.log(employee.getFullName());
if(employee.promote()==true)
{
    console.log("Congratulations!!! Employee is promoted");
    console.log(`Updated salary: ${employee.salary}`);
    console.log(`Updated designation: ${employee.designation}`);
}
else
{
    console.log("Sorry Employee is not eligible");
}
*/
//example16
//call() method is used to invoke a function and also pass this keyword inside the function and also additional arguments if needed. When a target function is not a method of the object, but we want to call that function as a method of object, then we can use call() method.
/*
//call() example1
let person1=
{
    age:24
};
let person2=
{
    age:24
};
let birthDay = function (years)
{
    this.age += years;
}
console.log(person1);
birthDay.call(person1,3);
birthDay.call(person2,5);
console.log(person2.age);
console.log(person1.age);
//call() method is used to borrow methods from other objects or to invoke a function in the context of a specific object.

console.log(person2);
*/
/*
//call() example2
function welcome(message)
{
    console.log(message+", "+this.name);
}
const person={name:"Kiran"};
welcome.call(person,"Hello");
*/
/*
//apply() method is similar to the call() method, but it allows you to pass an array of arguments to the function rather than listing them out individually.

//apply() example1
function welcome(message, extraData)
{
    console.log(message+", "+this.name+extraData);
}
const person={name:"Kiran"};
const args=["Kiran", "😀!"];//windows symbol key+dot symbol key
welcome.apply(person, args);
*/
/*
In this example the welcome() function is called with the apply method and the person object as the first argument. The args array is passed as the second argument to apply and it specifies the values for the message and extradata 
*/
/*
//apply() example2
let student1=
{
    studentName:"Kiran",
    section: "B"
};
let student2=
{
    studentName:"Rahul",
    section: "A"
};
function calculateTotalMarks(subject1, subject2, subject3)
{
    let totalMarks=subject1+subject2+subject3;
    let message=`Hi ${this.studentName}, your total marks is ${totalMarks}`;
    console.log(message);
}
//supplying student1 object as this keyword of calculateTotalMarks function and also supply the values of array into respective parameters sequentially.
calculateTotalMarks.apply(student1, [55,44,77]);
calculateTotalMarks.apply(student2, [35,46,87]);
*/
/*
//bind() method allows us to specify the value of this explicitly and creates a new function that can be called later which means it is not calling immediately.
//bind() example1
function welcome(message)
{
    console.log(message+", "+this.name);
}
const person={name:"Kiran"};
const welcomeKiran=welcome.bind(person);
welcomeKiran("Hello");
*/
/*
welcome() function is called with the bind() method and the person object as the argument. 
For Interview:-The bind() method can be useful when we need to create a new function that is bound to a specific value for this and can be called later. It is often used with other functions that accept a function as an argument such as map, filter, reduce.
*/
/*
//bind() example2
let student1=
{
    studentName:"Kiran",
    section: "B"
};
let student2=
{
    studentName:"Rahul",
    section: "A"
};
function calculateTotalMarks(subject1, subject2, subject3)
{
    let totalMarks=subject1+subject2+subject3;
    let message=`Hi ${this.studentName}, your total marks is ${totalMarks}`;
    console.log(message);
}
let student1Calculate=calculateTotalMarks.bind(student1);
//it creates a new function and stores the reference of student1 as this keyword, the function will not be executed immediately
calculateTotalMarks.apply(55,44,77);//it executes the function, here this keyword refers to student1

let student2Calculate=calculateTotalMarks.bind(student2,35,46,87);
//it creates a new function and stores the reference of student1 as this keyword, the function will not be executed immediately
//calculateTotalMarks.apply(35,46,87);//it executes the function, here this keyword refers to student2
student2Calculate();//same
*/
/*
//arrow function in javascript are a shorter syntax for writing function expressions. They are anonymous functions that are defined and immediately called, they use => syntax to specify the function's parameters and return value.
//example1
let welcome=(message)=>
{
    console.log(`Hello ${message}`);
}
welcome("This is Rahul");
*/
/*
let welcome=(message)=> console.log(`Hello ${message}`);
welcome("This is Rahul");
*/
/*
In this example welcome function is defined as a arrow function that takes single parameter message, then logs a message to the console. Arrow function are often used to write function expression, especially when the function is only used once or is a short simple function. They do not have their own this keyword so the value of this inside an arrow function is determined by the surrounding context.
*/
/*
//example2
let square=(a) => a*a;
console.log(square(2));
*/
/*When arrow function is introduced? have to complete
arrow function were introduced in javascript with the release of ES6(Ecmascript6) which is also known as ECMAscript 2015. They were included as part of an effort to modernize the language and provide new features and syntax for working with functions.
Arrow function and traditional function?
arrow functions are now widely used and supported feature in javascript and they are available in all modern browsers and in the current version of the language, ECMAScript 2021.
Arrow functions have special characteristics that distinguish them from traditional function declaration and expression.
*/
/*what is ecmascript in javascript?
ECMASCRIPT(ES) is a standardized specification for scripting languages like javascript. It is developed and maintained by the ECMA(European Computer Manufacturers Association), and it defined the syntax, semantics and behaviors of the javascript. javascript is an implementation of the 


What is the difference between ECMASCRIPT AND JAVASCRIPT? have to complete
javascript and ecmascript are closely related, but they are not the same thing. 
while javascript and ecmascript are closely related, there may be slight differences between implementations of the language. For example 
*/
/*what are the different javascript engines?have to complete
javascript engine is a software program that executes 
rhino: rhino is a javascript engine developed by mozilla that is used in java based environments such as the android operating system. javascript engine are an important part of the ecosystem*/
/*console.log("outside the object",this);
this refers to the global object which is the default object in the global scope of javascript program. Above statement indicates that the console.log function was called from the global object which is a window object in a web browser. The value of this is the window object which represents the current window in the browser.
*/
/*
//this inside a method
console.log("this is inside a method");
let student=
{
    name:"Suraj",
    age:25,
    welcome: function ()
    {
        console.log(`Hello my name is ${this.name}`);
        //console.log(`Hello my name is ${this}`);//same
    }
};
student.welcome();
//in this example welcome method is a property of the student object, so when welcome() method is called this refers to the student object, so the value of this.name is Suraj.
*/
/*
//this inside an arrow function
console.log("this is inside an arrow function");
let student=
{
    name:"Suraj",
    age:25,
    welcome: ()=>
    {
        console.log(`Hello my name is ${this.name}`);
        //console.log(`Hello my name is ${this}`);//same
    }
};
student.welcome();
//when this keyword is used inside an arrow function, it does not have its own value for 'this', the value of this is determined by the surrounding context.
*/
/*
//example
let student=
{
    studentName:"Sam",
    getStudentName: function ()
    {
        console.log("getStudentName function", this);
        setTimeout(function ()
        {
            console.log("Regular function", this);//this keyword refers to the global object means window object of the browser
        },2000);
        setTimeout(() =>
        {
            console.log("Arrow function", this);//this keyword refers to student object in this program
        },2000);
    }
}
student.getStudentName();
*/
/*have to complete
In the above example we are defining the student object which is a javascript object with studentName and getStudentName(). The getStudentName property is a method that logs the value of this to the console.log function.
Inside the getStudentName method we are using the setTimeout function to set the timer that will execute a callback function after a specified time period. It takes two arguments, a callback function and a time delay in miliseconds.
In the first function 
*/
/*
//example of arrow function
let add=(x,y) => x+y;
console.log(add(12,12));
let isEven=(x) => x%2 ==0;
console.log(isEven(6));
console.log(isEven(9));
*/
/*
//for in loop:- for in loop in javascript is used to iterate over the properties of an object. It allows to loop through the object's properties and perform action for each property.for in loop should not be used for arrays. it should be used for objects and it executes once per each property of the object.
//example
let person=
{
    name:"Sam",
    age:31,
    job:"Developer"
};
for (const p in person)
{
    console.log(p+":"+person[p]);
}
*/
/*
//for of loop:- for in loop in javascript is used to iterate over the elements of an iterable objects such as array and string.
let numbers=[22, 33, 44, 55];//array of numbers
for (let number of numbers)
{
    console.log(numbers);
}
*/
/*
let names=["Java", "C", "Python", "Ruby"];//array of strings
for (let name of names)
{
    console.log(name);
}
*/
/*
let name1="JavaScript";//string
for (let name of name1)
{
    console.log(name);
}
*/
/*
//difference of for in loop and for of loop
//The for in and for of loop are used to iterate over the properties or elements of an object in javascript, but they work in different ways. for in loop is used to iterate over iterable objects and it returns the keys of the object properties.
let person=
{
    name:"Sam",
    age:31,
    city:"New York"
};
for (let key in person)
{
    console.log(key);
}
*/
/*
//for of loop in javascript is used to iterate over the elements of an iterable object such as array or string.
let numbers=[22, 33, 44, 55];//array of numbers
for (let number of numbers)
{
    console.log(numbers);
}
*/
/*
//example of for in loop
let student=
{
    studentName:"Sam",
    email:"s@gmail.com",
    branch:"CS",
    physics:55,
    chemistry:66,
    maths:88
};
for (let property in student)
{
    console.log(property,student[property]);
    if(property=="physics" || property=="chemistry" || property=="maths")
    {
        student[property]=student[property]+12;
    }
}
console.log(student);
*/
/*
//destructuring objects in javascript
//destructuring objects in javascript is a feature which allows you to extract values from arrays or objects and assign them to variables. This helps and makes it easier to work with data by giving it clear and meaningful names. 
let person=
{
    name:"Sam",
    age:31,
    city:"New York"
};
let {name:name,age:age}=person;
//let {name,age}=person;//same
console.log(name);
console.log(age);
let {name:personName,age:personAge,city:personCity}=person;
console.log(personName);
console.log(personAge);
console.log(personCity);
*/
/*
//destructuring arrays in javascript
//destructuring arrays in javascript is extracting values from arrays and assigning them to variables. 
let numbers=[22, 33, 44, 55];
let [first, second, third, fourth]=numbers;
console.log(first, second, third, fourth);
*/
/*
//default values
//we can specify default values for destructured variables in case values being destructures are undefined.
let numbers=[1];
let [first, second=2, third=3]=numbers;
console.log(first, second, third);
*/
/*
//nested destructuring:- we can extract values from nested arrays or objects
let student=
{
    name:
    {
        firstName:"Rakesh",
        lastName:"Singh"
    },
    age:25
};
let {name:{firstName,lastName},age}=student;//same
console.log(firstName, secondName, age);
let {name:{firstName:myfname,lastName:mylname},age:myage}=student;//same
console.log(myfname, mylname, myage);
*/
/*
//destructuring in a for of loop:- we can extract values from arrays or objects while iterating over them with a for of loop.
let people=
[
    {name:"Ajoy", age:24},
    {name:"Bjoy", age:21},
    {name:"Djoy", age:22},
    {name:"Ejoy", age:23}
];
for (let {name,age} of people)
{
    console.log(`${name} is ${age} years old`);
}
*/
/*
//destructuring function parameters:-in javascript destructuring can also be used to extract values from function parameters. This can make our code more readable by not having to use object or array indexing or dot notation to access individual properties or elements of the function arguments.
function printPerson(person)
{
    let {name,age}=person;
    console.log(`Name:${name}, Age:${age}`);
}
let rahul=
{
    name:"Rahul", 
    age:25
};
printPerson(rahul);
*/
/*
//we can also destructure the function parameter and provide default values.
//In this example the function printPerson accepts an object as a parameter and 
function printPerson(person)
{
    let {name,age,occupation='unknown'}=person;
    console.log(`Name:${name}, Age:${age}, Occupation:${occupation}`);
}
let rahul=
{
    name:"Rahul", 
    age:25
};
printPerson(rahul);
*/
/*
//we can also destructure the parameters from array
function printColors(colors)
{
    const [firstColor,secondColor,thridColor]=colors;
    console.log(`Firstcolor:${firstColor}, Secondcolor:${secondColor}, Occupation:${thridColor}`);
}
const color=['red','green','blue'];
printColors(color);
*/
/*
//spread operator:- the spread operator in javascript allows on iterable (such as an array or string) to be expanded in places where zero or more arguments (for function calls) or elements are expected. The syntax for the spread operator is three dots (...) followed by the iterable.
//if you have an array a=[1,2,3] we can use the spread operator to expand its elements as arguments for a function call
function sum(a,b,c)
{
    return a+b+c;
}
let a=[1,2,3];
console.log(sum(...a));
*/
/*
//we can use spread operator to merge arrays
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);
*/
/*
//we can also use spread operator in object literals to copy the properties of one object into another
let object1={x:1,y:2};
let object2={...object1,z:3};
console.log(object2);
*/
/*
//we can use spread operator to copy properties of an object to another object using Object.assign() 
//Object.assign() is a method in javascript that is used to copy the properties and values of one or more source objects to a target objects.
//syntax: Object.assign(target, sources)
let object1=
{
    a:1,
    b:2
};
let object2=Object.assign({},object1,{c:3});
console.log(object2);
*/
/*
//we can use the spread operator to copy the properties of an object to another object and overwrite the existing properties.
let object1=
{
    a:1,
    b:2
};
let object2=
{
    b:23,
    c:4
};
let object3=
{
    ...object1, ...object2
};
console.log(object3);
*/
/*
//rest operator:- The rest operator in javascript is denoted by three dots(...) as well and it allows 
function sum(a,b,c,d,...rest)
{
    let result=a+b+c+d;
    for(let num of rest)
    {
        result+=num;
    }
    return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12));
*/
/*
//in this example rest operator collects all remaining properties of the object and assigns them to the variable rest, which is an object. rest parameter should be always the last one in the function arguments, if we have multiple rest parameters in thre function arguments it'll show error.
// 
let obj={a:1,b:2,c:3};
let {a, ...rest}=obj;
console.log(a);
console.log(rest);
*/
//difference between rest and spread operator
/*
The rest operator (...) and the spread operator (...) are both used in javascript to spread out elements of an iterable (such as array or object) into a new array or object. They are used in different ways and have different effects on the resulting data.
The rest operator is used to gather remaining elements of an iterable into an array. It is typically used in function parameter definitions to gather any remaining arguments passed to the function into an array.
*/
/*
function myFunction(first,second,...rest)
{
    console.log(first,second);
    console.log(rest);
}
myFunction(33,44,55,66,77,88);
//spread operator:- The spread operator on the other hand is used to spread the elements of an iterable into a new array or object. it can be used to spread the elements of one array into another, or to spread the properties of an object into a new object.
let myArray=[1,2,3];
let newArray=[...myArray,4,5];
console.log(newArray);
//in this example 
let myObject={a:1,b:2};
let newObject={...myObject,c:3};
console.log(newObject);
*/
/*
let person=
{
    fistName:"Ajoy",
    lastName:"Roy",
    age:23,
    email:"test@example.com",
    city:"New York",
    country:"USA"
};
let { firstName:fn, lastName:ln, age, email, ...other}=person;
console.log(fn,ln,age, email);
console.log(other);
console.log(person.email);
*/
/*
//destructuring function parameters using rest operator
let fnc1=function ({studentName:sn, email:em, ...others})
{
    console.log(sn,em);
    console.log(others);
    console.log(others.phone);
    console.log(others.city);
}
let student=
{
    studentName:"Ajoy",
    email:"test@example.com",
    phone:"1234567898",
    city:"New York"
};
fnc1(student);
*/
/*
//in operator will check if the property exists or not. it returns boolean value
let employee=
{
    fistName:"Ajoy",
    employeeID:1001,
    age:23
};
console.log('lastName' in employee);
console.log('firstName' in employee);
*/
/*
//delete operator will delete a property of an object
let employee=
{
    fistName:"Ajoy",
    employeeID:1001,
    age:23
};
delete employee.age;//syntax: objectname.propertyname
console.log(employee);
console.log('age' in employee);
*/
/*
//BMI= mass/height^2
let Raj=
{
    fullName:"Raj Roy",
    mass:78,
    height:1.69,
    calcBMI: function ()
    {
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
let Rohit=
{
    fullName:"Rohit Roy",
    mass:92,
    height:1.95,
    calcBMI: function ()
    {
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
Raj.calcBMI();
Rohit.calcBMI();
if(Raj.bmi>Rohit.bmi)
{
    console.log(`${Raj.fullName}'s BMI (${Math.floor(Raj.bmi)}) is higher than ${Rohit.fullName}'s BMI (${Math.floor(Rohit.bmi)})`);
}
else if(Rohit.bmi>Raj.bmi)
{
    console.log(`${Rohit.fullName}'s BMI (${Math.floor(Rohit.bmi)}) is higher than ${Raj.fullName}'s BMI (${Math.floor(Raj.bmi)})`);
}
*/
/*
//number guess game
let game=
{
    answer:Math.floor(Math.random()*100)+1,
    guess:null,
    attempts:0,
    play:function ()
    {
        while (this.guess !== this.answer)
        {
            this.guess=parseInt(prompt("Make a guess between 1 and 100: "));
            this.attempts++;
            if(this.guess === this.answer)
            {
                alert(`Correct! You took ${this.attempts} attempts.`);
            }
            else if(this.guess < this.answer)
            {
                alert("Too Low!");
            }
            else
            {
                alert("Too High!");
            }
        }
    }
};
game.play();
*/
/*
What is __proto__ ?
In javascript, __proto__ property is a reference to an object's prototype. Every object in javascript has a prototype, which is an object from which it inherits properties and methods.
The __proto__ property is a non standard property that allows us to access an object's prototype directly.
*/
/*
let myObject={a:1};
console.log(myObject.__proto__);
//In this example which is as shown above, myObject is an object with a single property a and it's prototype is an empty object({....}). By default the prototype of an object is Object.prototype
*/
/*
//We can use Object.getPrototypeOf() method to get the prototype of an object.
let myObject2={a:1};
console.log(Object.getPrototypeOf(myObject2));
*/
/*
//We can also use Object.create() method to create an object with a specified prototype.
let myProto={b:2};
let myObject=Object.create(myProto);
console.log(Object.getPrototypeOf(myObject));
//The official way to access and manipulate prototypes is through the object.create() method, Object.getPrototypeOf(), Object.setPrototypeOf().
//here __proto__ is a non standard which is not officially part of ECMAScript specification and its behavior may vary accross different javascript engines.
*/
/*
what is Object?
Javascript 'Object' is a built in object that is the parent of all other objects in the language. It provides a number of useful methods and properties for working with objects such as creating new objects, getting and setting property values etc. The Object (object) can be used to create new objects using the Object.create() method or the object literal notation{}.
let myObject={};//create an empty object
let myObject2=Object.create(null);//creates an object without prototype
let myObject3=new Object();//creates an empty object
*/
/*
//inheritance using __proto__ 
//In javascript inheritance can be achieved through the use of prototypes and the __proto__ peroperty. By default the prototype of an object is Object.prototype, we can use the __proto__ property to set the prototype of an object to another object thereby creating an inheritance relationship between two objects.
let myProto={a:1,b:2};
let myObject={c:3};
myObject.__proto__=myProto;
console.log(myObject);
console.log(myObject.a);
console.log(myObject.b);
console.log(myObject.c);
*/
/*
//in this example Object.create() method which creates a new object with a specified prototype.myObject is an object that inherits from myProto using the Object.create() method
let myProto={a:1,b:2};
let myObject=Object.create(myProto);
console.log(myObject.a , myObject.b);
*/
/*
let person=
{
    personName:"Ajoy",
    age:20
};
let student=
{
    rollNo:22,
    marks:44
};
let teacher=
{
    subject:"Physics",
    salary:15000
};
student.__proto__=person;
console.log(student);
console.log(student.rollNo);
console.log(student.marks);
//inherited properties
console.log(student.personName); //console.log(student.__proto__.personName); //same
console.log(student.age); //console.log(student.__proto__.age); //same

teacher.__proto__=person;
console.log(teacher.personName , teacher.age);
*/
/*
let user=
{
    userName:"",
    password:"",
    isLoggedIn:false,
    login: function ()
    {
        if (this.userName=="admin" && this.password=="admin1234")
        {
            this.isLoggedIn=true;
            return true;
        }
        else
        {
            this.isLoggedIn=false;
            return false;
        }
    }
};
let hr=
{
    departmentName:"HR",
    approvesLeaves: function ()
    {
        return "Approve Leaves";
    },
    dashboard: function ()
    {
        return `${this.userName} dashboard`;
    }
};
hr.__proto__=user;
hr.userName="admin";
hr.password="admin1234";
console.log(hr.login());
console.log(hr.departmentName);
console.log(hr.approvesLeaves());
console.log(hr.dashboard());
*/
/*
//what is the difference between __proto__ and prototype?
//In javascript prototype and __proto__ are both related to object inheritance, but they are used in different ways and have different meanings.
prototype is a property that is present on all functions in javascript and it issued to set the prototype of objects created using that function as a constructor.
*/
/*
function myfunc()
{
    this.id=2221;
}
myfunc.prototype.x=22;
let myObject=new myfunc();
console.log(myObject.id);
console.log(myObject.x);
console.log(myObject.__proto__ === myfunc.prototype);
//in this example 
*/
/*
what is prototype chain in javascript?
In javascript prototype chain is a mechanism that allows objects to inherit properties and methods from their prototype, which is another object. Each object has a prototype property
that refers to the object from which it inherits properties and methods. If an object does not have 
*/
/*
//example of a prototype chain
console.log(Object.prototype);//empty object
const obj={};
console.log(obj.__proto__);//same as Object.prototype

//a new object (obj2) that inherits from obj
const obj2=Object.create(obj);
console.log(obj2.__proto__);//same as obj and Object.prototype

const obj3=
{
    name:"Preethaa",
    sayName: function ()
    {
        console.log(this.name);
    }
};
console.log(obj3.__proto__);//same as obj2 and obj and Object.prototype

const obj4=Object.create(obj3);
console.log(obj4.__proto__);//obj3 properties
obj4.sayName();
//In this example obj4 is an object that inherits from obj3 which inherits fron obj2 which inherits from obj which inherits from Object.prototype. This forms a property chain.
*/
/*
let person={personName:"Sam", age:24};
let student={rollNo:12, marks:75};
let medicalStudent={mainSubject:"Biology"};
student.__proto__=person;
medicalStudent.__proto__=student;
console.log(medicalStudent,medicalStudent.__proto__);
console.log(student,student.__proto__);
console.log(person,person.__proto__);
console.log(medicalStudent.personName);
*/
/*
//closure(have to complete):-A closure in javascript is a function that has access to variables in its parent scope, even after the parent function has completed execution. 
function outerFunction(x)
{
    let localVariable=x;
    return function innerFunction()
    {
        console.log(localVariable);
    }
}
let closure=outerFunction(12);
console.log(closure());
*/
/*
function bankAccountDeposit()
{
    let currentBalance=1000;//cuurentBalance is a private variable it can't be accessed from outside
    let deposit=function(depositAmount)
    {
        currentBalance=currentBalance+depositAmount;
        return `Account Balance:${currentBalance}`;
    }
    return deposit;
}
let dp=bankAccountDeposit();
console.log(dp(500));
*/
/*
//constructor function:- In javascript a constructor function is a special type of function that is used to create and initialize objects. The constructor function is invoked using the new keyword which creates a new object and sets the this keyword to point to that object. 
function display(name,age)
{
    this.name=name;
    this.age=age;
    this.greet=function ()
    {
        console.log(`Hi my name is ${this.name} and I'm ${this.age} years old`);
    }
}
let myObj=new display("Kiran",44);
console.log(myObj.name,myObj.age);
myObj.greet();
*/
/*
//Encapsulation:-In javascript encapsulation is a technique that is used to hide the implementation details of an object and expose a public interface for interacting with it. This allows for the implementation of the object to change without affecting the code that uses it.
function myObject()
{
    let privatevar="This is private";
    this.publicvar="This is public";
    this.getPrivateVar=function ()
    {
        return privatevar;
    }
    this.setPrivateVar=function (newValue)
    {
        privatevar=newValue;
    }
}
let myObj=new myObject();
console.log(myObj.privatevar);
console.log(myObj.publicvar);
console.log(myObj.getPrivateVar());
myObj.setPrivateVar("Assigning private variable");
console.log(myObj.getPrivateVar());
//In this example myObject has a 
*/
/*
//example of closure and encapsulation:-
let bankAccount=function ()
{
    let accountBalance=1000;
    let somePrivate=function ()
    {

    }
    let deposit=function (depositAmount)
    {
        accountBalance=accountBalance+depositAmount;
    }
    let withdraw=function (withdrawAmount)
    {
        accountBalance=accountBalance-withdrawAmount;
    }
    let getCurrentBalance=function ()
    {
        return accountBalance;
    }
    return {deposit,withdraw,getCurrentBalance};
}
let firstAccount=bankAccount();
let secondAccount=bankAccount();
console.log(`Initial First Account Balance: ${firstAccount.getCurrentBalance()}`);
console.log(`Initial Second Account Balance: ${secondAccount.getCurrentBalance()}`);
firstAccount.deposit(2000);
console.log(`First Account Balance After Deposit: ${firstAccount.getCurrentBalance()}`);
secondAccount.deposit(1500);
console.log(`Second Account Balance After Deposit: ${secondAccount.getCurrentBalance()}`);
firstAccount.withdraw(1200);
console.log(`First Account Balance After Withdraw: ${firstAccount.getCurrentBalance()}`);
secondAccount.withdraw(500);
console.log(`Second Account Balance After Withdraw: ${secondAccount.getCurrentBalance()}`);
*/
/*
let createEmployee=function (employeeName, employeeID, salary)
{
    this.employeeName=employeeName;
    this.employeeID=employeeID;
    this.salary=salary;
    this.getEmployeeName=function()
    {
        return this.employeeName;
    }
}
let employee1=new createEmployee("Sam", 1222, 20000);
console.log(employee1);
*/
/*
polymorphism:- polymorphism is the ability of objects to respond to the same method call in a 
way that is specific to the type of object. It allows objects of different classes to be 
treated as objects of common class or interface.
We can achieve polymorphism in several ways:-
1) function overloading:- In javascript 
*/
/*
//function overloading
function add(a,b,c)//more number of parameters so it should be above
{
    return a+b+c;
}
function add(x,y)
{
    return x+y;
}
console.log(add(2,3));
console.log(add(1,2,3));
*/
/*
2) function overriding:- 
3) using objects:-
*/
/*
//using objects:-
let car=
{
    name:"Car",
    wheels:4,
    move:function()
    {
        console.log(`The ${this.name} is moving on ${this.wheels} wheels`);
    }
};
let bike=
{
    name:"Bike",
    wheels:2,
    move:function()
    {
        console.log(`The ${this.name} is moving on ${this.wheels} wheels`);
    }
};
let vehicles=[car,bike];
for(let i=0;i<vehicles.length;i++)
{
    vehicles[i].move();
}
*/
/*
let person=
{
    personName:"Kiran",
    age:21,
    getDetails:function()
    {
        return `Person Name: ${this.personName}, his age is ${this.age}`;
    }
};
let teacher=
{
    mainSubject:"Mathematics",
    move:function()
    {
        return `${this.__proto__.getDetails()} Teacher's main subject: ${this.mainSubject}`;
    }
};
teacher.__proto__=person;//inheritance
console.log(teacher.getDetails());
*/
/*
In the above example an object called person
*/
/*
//inheritance using constructor function using call method
let Teacher=function(teacherName)
{
    this.teacherName=teacherName;
}
let PhysicsTeacher=function(teacherName,mainSubject)
{
    Teacher.call(this,teacherName);
    this.mainSubject=mainSubject;
}
let physicsTeacher=new PhysicsTeacher("Kiran","Physics");
console.log(physicsTeacher.teacherName);
console.log(physicsTeacher.mainSubject);
*/
/*
function Shape(name)//base function
{
    this.name=name;
}
Shape.prototype.area=function()//prototype method area
{
    return 0;
}
function Circle(name, radius)//inherits from Shape function
{
    Shape.call(this,name);
    this.radius=radius;
}
Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.constructor=Circle;
Circle.prototype.area=function()
{
    return Math.PI*this.radius*this.radius;
}
function Square(name,side)//inherits from Shape function
{
    Shape.call(this,name);
    this.side=side;
}
Square.prototype=Object.create(Shape.prototype);
Square.prototype.constructor=Square;
Square.prototype.area=function()
{
    return this.side*this.side;
}
let shapes=[new Circle("Circle",5),new Square("Square",6)];
for(let i=0;i<shapes.length;i++)
{
    console.log(shapes[i].name+"area: "+shapes[i].area());
}
*/
/*
let Teacher=function(teacherName)
{
    this.teacherName=teacherName;
}
let MathTeacher=function(teacherName,mainSubject)
{
    Teacher.call(this,teacherName);
    this.mainSubject=mainSubject;
}
MathTeacher.prototype=Object.create(Teacher.prototype);
MathTeacher.prototype.constructor=MathTeacher;
MathTeacher=new MathTeacher("Kiran","Maths");
console.log(MathTeacher.teacherName);
console.log(MathTeacher.mainSubject);
//have to complete
//In this example a Teacher constructor function is defined that creates an object with a TeacherName property. A MathTeacher constructor function is dernfined which creates an object with a mainSubject property. To implement inheritance the MathTeacher .prototype is set to an object created with Object.create(Teacher.prototype). This sets MathTeacher prototype to inherit from the Teacher prototype making all properties and methods defined on the Teacher.prototype available to objects created with MathTeacher.



*/
/*
let Person=function(name)
{
    this.name=name;
}
Person.prototype.sayHello=function()
{
    return `Hello, my name is ${this.name}`;
}
let Student=function(name,school)
{
    this.__proto__=new Person(name);
    this.school=school;
}
let Kiran=new Student("Kiran","Holy Cross");
console.log(Kiran.name);
console.log(Kiran.school);
console.log(Kiran.sayHello());
//have to complete
*/
/*
let Student=function()
{

};
//adding properties to prototype property of constructor function
Student.prototype.maths=70;
Student.prototype.physics=80;
Student.prototype.chemistry=90;
Student.prototype.getTotalMarks=function()
{
    return this.maths+this.physics+this.chemistry;
}
let s=new Student();
console.log(s.__proto__);
console.log(s.maths,s.physics,s.chemistry);
console.log(s.getTotalMarks());
*/
/*In this code, the Student constructor function is defined and its prototype property is used to add properties and methods that are associated with all the instances of the student object. The properties maths, physics, and chemistry are added to the prototype object*/
/*
let Animal=function(type)
{
    this.type=type;
};
Animal.prototype.makeSound=function()
{
    return `The ${this.type} makes a sound`;
};
let Dog=function(breed)
{
    Animal.call(this,'dog');
    this.breed=breed;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark=function()
{
    return `The ${this.breed} barks`;
};
let dog=new Dog("Labrador");
console.log(dog);
console.log(dog.type);
console.log(dog.breed);
console.log(dog.makeSound());
console.log(dog.bark());
*/
/**/
/*
function Person()
{

}
Person.prototype.personName="Teena";
Person.prototype.age=32;
Person.prototype.getDetails=function()
{
    return `Person Name:${this.personName}, Age:${this.age}`;
}
function Teacher()
{
    this.city="Bangalore";
}
Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.mainSubject="Biology";
let teacher=new Teacher();
console.log(Person.prototype);
console.log(Object.create(Person.prototype));
console.log(Object.create(Person.prototype).__proto__);
console.log(Teacher.prototype);
console.log(new Teacher());
console.log(new Teacher().__proto__);
console.log(teacher.__proto__.__proto__);
console.log(teacher.mainSubject);
console.log(teacher.city);
console.log(teacher.personName);
console.log(teacher.age);
console.log(teacher.getDetails());
*/
//Abstract Constructor function:- An abstract constructor function is a special type of constructor function in javascript that can't be instantiated.
/*
let Shape= function ()
{
    if(this.constructor===Shape)
    {
        throw new Error('Cannot instantiate abstract class Shape');
    }
}
Shape.prototype.x=0;
Shape.prototype.y=0;
//Shape.prototype.move=function(dx,dy)
//{this.x+=dx;this.y+=dy;
//};
let Rectangle=function(width,height)
{
    Shape.call(this);
    this.width=width;
    this.height=height;
}
Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor=Rectangle;
Rectangle.prototype.area=function()
{
    return this.width*this.height;
}
let rectangle=new Rectangle(10,20);
console.log(rectangle.area());
*/
/*have to complete
function Person()
{
    throw new Error("The Person is an abstract constructor function and can't be instantiated");
}
Person.prototype.personName="John";
Person.prototype.age=32;
Person.prototype.getDetails=function()
{
    return `Person Name:${this.personName}, Age:${this.age}`;
}
function Teacher()
{
    
}
Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.mainSubject="Medicine";
Teacher.prototype.getDetails=function()
{
    return `${this.__proto__.getDetails()}, Main subject:${}`
}
*/