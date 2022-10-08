/* console.log("Hello world");
const ourPlanetName = 'Земля';
console.log(ourPlanetName);
let TimeUser = '12:19';
console.log(TimeUser);
const number = '15';
console.log (number);
let optionPay = "Оплата";
console.log (optionPay);
const UserName = 'Александра';
console.log (UserName);
const SurnameUser = 'Мышакина';
console.log (SurnameUser);
const UserName_2 = 'Евгеньевна';
console.log (UserName_2);

const age = 26;
console.log (typeof ageToString);

const nullValue =null;
console.log (Number(nullValue));

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));

console.log (typeof +45);
console.log (typeof Number("45"));

const name = "Ivan";
name != "Alex";
 */
/* console.log (2 == 3);
console.log (2 == 2);
console.log (2 != 2);
console.log (2 < 3);
console.log (2 > 3);

console.log (2 + "3");
console.log ("2" + 3);
console.log ("2" + "3");
console.log (2 + 3);
 */

/* console.log (2 + 2 + "3");
console.log ("2" + 2 + 3); */

/* console.log ("3" - "1"); */

/* console.log(2 === 2); */

/* Практика №3 */

/* console.log(5 > 4); /* верно */
console.log("ананас" > "яблоко"); /* сравниваем по символам */
console.log("2" > 12);
console.log(undefined == null); 
console.log(undefined === null); /* строгое стравнение */
console.log(null == "\n0\n"); /* равен только себе и undefined */
console.log(null == +"\n0\n");
console.log("" +1 +0); /* '' - строка = 0 + 1 + 0 = 10 */
console.log(true + false); 
console.log(6/"3"); /* 6/0 */
console.log("2" * "3");
console.log(4 + 5 +"px");
console.log("$" + 4 + 5); /* 45$ */
console.log("4" - 2);
console.log("4px" - 2); 
console.log(7/0); /* NaN */
console.log(" -9 " + 5);  
console.log(" -9 " - 5); 
console.log(null + 1);
console.log(undefined + 1);
console.log("\t\n" - 2);  


/* const towns = ["Moscow", "Paris", "London", "NN"];
console.log(towns.length);
towns[1] = "Milan";
towns[4] = "St.Peterburg";
towns[9] = "Berlin";
console.log(towns.length); */


/* const towns = ["Moscow", "Paris", "London", "NN"];
towns[1] = "Milan";
towns.push ("St.Peterburg");
towns[towns.length] = "Orel";
console.log(towns);
 */

/* const films = ["Один дома", "Властелин Колец", "Интерстеллар"];
console.log (films[1]);
films.push ("Великий Гэтсби");
console.log (films);
console.log (films [3]); */


/* const a = 1;
const b = 20;
const c = 3;

if (a < b) {
  b < c ? console.log("C самый большой") : console.log("B самый большой");
} else {
  a < c ? console.log("C самый большой") : console.log("A самый большой");
}
 */

/* const a = 1;
const b = 2;
const c = 3;

if (a < b) {
  b < c
    ? console.log("C самый большой")
    : console.log(console.log("B самый большой"));
} else {
  a < c
    ? console.log("C самый большой")
    : console.log(console.log("C самый большой"));
}



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

} */


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








