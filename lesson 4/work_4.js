if(true) {
  console.log("true"); 
}

if(false) {
  console.log ("false");
} 

/* const name = "Alex";
if (name === "Alex"); {
     console.log ("Привет {name}");
     else {
        console.log ("Привет Незнакомец");
     }
} */

/* const name = "Alex";
if (name === "Ivan") {
    console.log ("Привет" ${name});
} else if (name === "Alex");{
    console.log (Привет друг ${name}")
} else if (name === "Petr"); {

  console.log ("Hi ${name}");
} else {
        console.log ("Привет Незнакомец");
     }
} */


if (true) {
    if (true) {
        console.log ("true");
    } else {
        console.log ("false");
    }
}


const UserName = "Alex";

const result = UserName === "Alex" ? "Hello Alex" : "Hello User";
console.log (result);


const segment1 = 7;
const segment2 = 9;
const segment3 = 10;


/* if (segment1 < segment2) {
    console.log ("Большее значение {segment2}");
} else if (segment2 < segment3) {
    console.log ("Большее значение {segment3}");
} else if (segment3) {
    console.log ("Большее значение {segment3}");
} */


/* const a = 1;
const b = 2;
const c = 3;
 */
/* if (a < b) {
  b < c
    ? console.log("C самый большой")
    : console.log(console.log("B самый большой"));
} else {
  a < c
    ? console.log("C самый большой")
    : console.log(console.log("C самый большой"));
}
 */
const userRole = "user";

switch (userRole) {
    case "admin": 
    console.log ("Это админ, и он любит чай");
    break;

    case "user": 
    console.log ("Это юзер, и он любит колу");
    break;

    case "manager": 
    console.log ("Это менеджер, и он любит кофе");
    break;

} 


const a = 100;
const b = 20;
const c = 3;

if (a < b && b < c) {
  console.log("C самый большой");
} else if (a < b && b > c) {
  console.log("B самый большой");
} else if (a < c) {
  console.log("C самый большой");
} else {
  console.log("A самый большой");
}

const temp = -30;

if (temp <= -30) {
  console.log("оставайся дома");
} else if (temp > -30 && temp <= -10) {
  console.log("сегодня холодно");
} else if (temp > -10 && temp <= 5) {
  console.log("не холодно");
} else if (temp > 5 && temp <= 15) {
  console.log("тепло");
} else if (temp > 15 && temp <= 25) {
  console.log("очень тепло");
} else if (temp > 25 && temp < 35) {
  console.log("жарко");
} else {
  console.log("пекло");
}