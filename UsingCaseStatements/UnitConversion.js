var prompt = require('prompt-sync')();
console.log("ENTER WHICH OPERATION TO PERFORM");
choice = prompt();
switch(choice){
    case "1": console.log("FEET TO INCH")
            console.log("ENTER FEET VALUE");
            var feet = prompt();
            var inch = feet *12;
            console.log(inch);
            break;
    case "2": console.log("FEET TO METER");
            console.log("ENTER FEET VALUE");
            var feet = prompt();
            var meter = feet / 3.281;
            console.log(meter);
            break;
    case "3": console.log("INCH TO FEET");
            console.log("ENTER INCH VALUE");
            var inch = prompt();
            var feet= inch/12;
            console.log(feet);
            break;
    case "4": console.log("METER TO FEET");
            console.log("ENTER METER VALUE");
            var meter= prompt();
            var feet = meter * 3.281;
            console.log(feet);
            break;
}