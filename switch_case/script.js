/*
syntax of switch case:-
switch(variable)
{
    case value1:statements;
                break;
    case value2:statements;
                break;
    case valueN:statements;
                break; 
    default:statements;
                break;                    
}
*/
//by default prompt() takes string type input
let day=prompt("Please type any day from Monday to Sunday");//prompt() method is used to take user input and show that in console of browser
switch(day)
{
    case "Monday":console.log("Monday Food Preparation");
                  console.log("Alu govi");
                  console.log("Rice");
                  break;
    case "Tuesday":console.log("Monday Food Preparation");
                  console.log("Alu govi");
                  console.log("Rice");
                  break;
    case "Wednesday":console.log("Monday Food Preparation");
                  console.log("Alu govi");
                  console.log("Rice");
                  break;
    case "Thursday":console.log("Monday Food Preparation");
                  console.log("Alu govi");
                  console.log("Rice");
                  break;
    case "Friday":console.log("Monday Food Preparation");
                  console.log("Alu govi");
                  console.log("Rice");
                  break;
    case "Satday":console.log("Monday Food Preparation");
                  console.log("Alu govi");
                  console.log("Rice");
                  break;
    case "Sunday":console.log("Monday Food Preparation");
                  console.log("Alu govi");
                  console.log("Rice");
                  break; 
    default:
                  console.log("Not a valid day");     
}