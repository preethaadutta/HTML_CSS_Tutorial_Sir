/*In javascript class is called syntactic sugar and behind the scene functions are working*/
/*
class Employee//Employee is a class
{
    //properties
    empId;
    empName;
    salary;
    //methods
    getEmployeeName()
    {
        return this.empName;
    }
    hikeSalary(amount)
    {
        this.salary=this.salary+amount;
    }
}
//creating objects of Employee class and properties of each object has it's own value
let employee1=new Employee();//employee1 is an object of Employee class
employee1.empId=1101;
employee1.empName="Suresh";
employee1.salary=12000;
employee1.hikeSalary(200);//calling method
console.log(employee1);

let employee2=new Employee();//employee2 is another object of Employee class
employee2.empId=1102;
employee2.empName="Nilesh";
employee2.salary=14000;
employee2.hikeSalary(400);//calling method
console.log(employee2);
*/
/*
class Person//Employee is a class
{
    //constructor function
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    sayHello()
    {
        return `Hello, my name is ${this.name}`;
    }
}
//creating objects of Employee class
const person1=new Person("Rakesh", 45);
console.log(person1.sayHello());//calling method
const person2=new Person("Suresh", 42);
console.log(person2.sayHello());//calling method
*/
/*
//Accessor properties
//assigning values of private variables using set keyword and accessing private variables using get keyword
class Person
{
    //private variables
    #personName;
    #age;
    #title="Mr.";
    set PersonName(value)
    {
        if(value==null || value==undefined)
        {
            console.error("Null or undefined is not allowed for PersonName");//will give error
        }
        else
        {
            if(value.length>=30)
            {
                console.error("PersonName length can't be more than 30 characters");//will give error
            }
            else
            {
                this.#personName=value;//assinging value of private variable
            }
        }
    }
    //accessing private variable
    get PersonName()
    {
        return `${this.#title} ${this.#personName}`;
    }
    set Age(value)
    {
        if(value>=0 && value<=100)
        {
            this.#age=value;//assinging value of private variable
        }
        else
        {
            console.error("Age must be in between 0 to 100 only");//will give error
        }
    }
    //accessing private variable
    get Age()
    {
        return this.#age;
    }
}
let person1=new Person();
person1.PersonName=null;//will give error
person1.PersonName="adfbkkkllouiyygghjjkkklkklllkjjhhgfgdssehyhjjjjkkh";//will give error
*/
/*
class Customer
{
    customerId;
    customerName;
    #creditCardNumber;
    constructor(customerId,customerName,creditCardNumber)
    {
        this.customerId=customerId;
        this.customerName=customerName;
        this.#creditCardNumber=creditCardNumber;
        console.log(this.#getCreditCardNumber());
    }
    #getCreditCardNumber=function()
    {
        return this.#creditCardNumber;
    }
}
let customer1=new Customer(1101,"Rajiv",345577888);
console.log(customer1.customerId);
console.log(customer1.customerName);
//console.log(customer1.#getCreditCardNumber());//will give error because #creditCardNumber is a private variable
console.log(customer1);
*/
/*
//class inheritance
class Teacher//parent class
{
    teacherName;//property of parent class
    constructor(teacherName)
    {
        this.teacherName=teacherName;
    }
}
class PhysicsTeacher extends Teacher//child class
{
    mainSubject;//property of child class
    constructor(mainSubject)
    {
        super("Sam");//super keyword is used to call constructor of parent class
        this.mainSubject=mainSubject;
    }
    getDetails()
    {
        return `Teacher Name: ${this.teacherName}, Main Subject:${this.mainSubject}`;
    }
}
//if we create object of parent class then we can access only properties and methods of parent class.in this case it is not needed to write super()
//let teacher=new Teacher("Sam");//creating object of parent class
//console.log(teacher);
//if we create object of child class then we can access both properties and methods of parent class and properties and methods of child class.in this case we've to write super()
let physicsTeacher=new PhysicsTeacher("Physical Science");//creating object of child class
console.log(physicsTeacher);
console.log(physicsTeacher.getDetails());
*/
/*
class Vehicle//parent class
{
    constructor(make, model)
    {
        this.make=make;
        this.model=model;
    }
    getDetails()
    {
        return `This vehicle is a ${this.make} ${this.model}`;
    }
}
class Car extends Vehicle//child class
{
    constructor(make,model,year)//year is a property
    {
        super(make,model);//super keyword is used to call constructor of parent class
        this.year=year;
    }
    getDetails()
    {
        return `${super.getDetails()}, year:${this.year}`;//super.getDetails() is used to call getDetails() method of parent class 
    }
}
const myCar=new Car("Tesla","model X", 2022);//creating object of child class
console.log(myCar.getDetails());
*/
/*
//polymorphism in class
//polymorphism is the ability of a single method or property to take on multiple forms.It is achieved by using method overloading and method overriding.
//method overloading:-because same method name but they are taking different number of parameters
class Shape
{
    area(a,b)
    {
        if(b==undefined)
        {
            return Math.pow(a,2);//means a^2//pow() method is for power function
        }
        return a*b;
    }
}
class Circle extends Shape
{
    area(radius)
    {
        return Math.PI*Math.pow(radius,2);//PI*r^2
    }
}
let shape=new Shape();//creating object of parent class
console.log(shape.area(5));
let circle=new Circle();//creating object of child class
console.log(circle.area(5));
*/
/*
//method overriding:-because same method name but we are modifing the method of parent class
class Person
{
    personName;
    age;
    constructor(personName,age)
    {
        this.personName=personName;
        this.age=age;
    }
    getDetails()
    {
        return `Person Name: ${this.personName}, Age: ${this.age}`;
    }
}
class Teacher extends Person
{
    mainSubject;
    constructor(personName,age,mainSubject)
    {
        super(personName,age);
        this.mainSubject=mainSubject;
    }
    getDetails()
    {
        return `${super.getDetails()}, Main Subject:${this.mainSubject}`;
    }
}
let person=new Person("Sam",32);
console.log(person);
let teacher=new Teacher("Sam",24,"Maths");
console.log(teacher.getDetails());
*/
/*
//super keyword is used to access and call the method of parent class from within child class.
When a child class extends a parent class, it inherits all
*/
/*
class Parent
{
    method()
    {
        console.log("This is the method of parent class");
    }
}
class Child extends Parent
{
    method()
    {
        console.log("This is the method of child class");
        super.method();
    }
}
let child=new Child();
child.method();
*/
/*
The 'super' keyword can also be used to access the parent class's constructor by calling super(...args) in the child class constructor. This allows the child class to inherit properties defined in the parent class's constructor and set it's own properties.
*/
/*
//static properties and methods are class level properties and methods, they are not accessible on object instances but only on class itself.
class Rectangle
{
    static description='This is a rectangle';
    static getRectangleDescription()
    {
        return this.description;
    }
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }
    calculateArea()
    {
        return this.width*this.height;
    }
}
//as we've defined description property and getRectangleDescription() method as static so without creating object of that class we can access those properties and methods.
console.log(Rectangle.description);
console.log(Rectangle.getRectangleDescription());
//as width, height, calculateArea() are not static so we've to create object to access those
let myRectangle=new Rectangle(10,20);
console.log(myRectangle.width);
console.log(myRectangle.height);
console.log(myRectangle.calculateArea());
//accessing static property and method with the help of object of that class
console.log(myRectangle.description);//undefined
console.log(myRectangle.getRectangleDescription());//will give error
*/
/*
class Student
{
    studentName;
    marks;
    constructor(studentName,marks)
    {
        this.studentName=studentName;
        this.marks=marks;
        Student.studentCount++;
    }
    static compareStudentMarks(stud1,stud2)
    {
        return stud1.marks-stud2.marks;
    }
    static studentCount=0;
}
let firstStudent=new Student("Sam",90);
let secondStudent=new Student("Rita",80);
let thirdStudent=new Student("Geta",90);
console.log(Student.compareStudentMarks(thirdStudent,secondStudent));
console.log(Student.studentCount);
*/