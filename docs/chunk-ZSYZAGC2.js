import{A as n,B as t,C as q,D as e,E as u,G,H,J as V,N as $,O as Y,P as z,Q as W,l as c,s as d,u as a,v as p,w as B,x as U,y as R,z as _}from"./chunk-K25ZZ6HC.js";var Q=o=>[o],X=()=>({exact:!0});function Z(o,l){if(o&1&&(n(0,"p",14)(1,"span",15),e(2),t(),n(3,"span",16),e(4),t()()),o&2){let i=l.$implicit;_("routerLink",H(4,Q,i.path))("routerLinkActiveOptions",G(6,X)),d(2),u(i.icon),d(2),u(i.title)}}function ee(o,l){if(o&1&&(n(0,"small",13),e(1),t(),U(2,Z,5,7,"p",14,B)),o&2){let i=l.$implicit;d(),u(i.groupTitle),d(),R(i.items)}}var x=class o{navGroups=[{groupTitle:"Basics",items:[{title:"Intro",path:"intro",icon:"info"},{title:"Comments",path:"comments",icon:"comment"},{title:"Variables",path:"variables",icon:"variable_add"},{title:"Data Types",path:"datatypes",icon:"data_object"},{title:"Operators",path:"operators",icon:"calculate"},{title:"Conditionals",path:"conditionals",icon:"rule"},{title:"Loops",path:"loops",icon:"repeat"},{title:"Functions",path:"functions",icon:"functions"},{title:"Arrays",path:"array",icon:"view_list"},{title:"Objects",path:"objects",icon:"inventory_2"}]},{groupTitle:"Core Concepts",items:[{title:"Template Literals",path:"template-literals",icon:"text_fields"},{title:"Conversion & Coercion",path:"conversion-coercion",icon:"swap_horiz"},{title:"Truthy & Falsy",path:"truthy-falsy",icon:"check_circle"},{title:"Equality Operator",path:"equality-operator",icon:"balance"},{title:"Statements & Expressions",path:"statements-expressions",icon:"article"},{title:"prompt()",path:"prompt",icon:"keyboard"},{title:"If Else",path:"if-else",icon:"account_tree"},{title:"Switch Case",path:"switch",icon:"toggle_on"}]},{groupTitle:"Advanced",items:[{title:"What is JS?",path:"what-is-js",icon:"psychology"},{title:"this keyword",path:"this-keyword",icon:"target"},{title:"Regular vs Arrow Function",path:"arrow-function",icon:"trending_flat"},{title:"Primitive vs Object",path:"primitive-vs-object",icon:"layers"}]}];static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-javascript"]],standalone:!1,decls:23,vars:0,consts:[[1,"app-body"],["cssFusionNav","",1,"navbar-box"],[1,"navbar-set01"],["id","navLeft-tigger",1,"material-symbols-outlined","nav-icon-trigger"],[1,"navbar-set02"],[1,"navbar-set03"],[1,"user"],[1,"material-symbols-outlined","user-img"],[1,"user-info","nav-txt"],[1,"user-info-name"],[1,"user-info-desc"],[1,"material-symbols-outlined","more-icon"],[1,"app-content"],[1,"nav-menu"],["routerLinkActive","navbar-active",1,"navbar-link",3,"routerLink","routerLinkActiveOptions"],[1,"material-symbols-outlined","nav-icon"],[1,"nav-txt"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"nav",1)(2,"div",2)(3,"h3"),e(4,"Javascript"),t(),n(5,"span",3),e(6," keyboard_double_arrow_left "),t()(),n(7,"div",4),U(8,ee,4,1,null,null,B),t(),n(10,"div",5)(11,"div",6)(12,"span",7),e(13,"account_circle"),t(),n(14,"div",8)(15,"h3",9),e(16,"User Name"),t(),n(17,"p",10),e(18,"Ui/Ux Developer"),t()()(),n(19,"span",11),e(20," steppers "),t()()(),n(21,"div",12),q(22,"router-outlet"),t()()),i&2&&(d(8),R(s.navGroups))},dependencies:[$,Y,z],encapsulation:2})};var f=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-intro"]],standalone:!1,decls:60,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-text"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Intro"),t(),n(4,"p",3),e(5,"Intro about Js"),t()(),n(6,"div",4)(7,"h2",5),e(8,"JavaScript Overview"),t(),n(9,"ul",6)(10,"li"),e(11," JavaScript is a versatile programming language primarily used for "),n(12,"strong"),e(13,"client-side"),t(),e(14," scripting in web development. "),t(),n(15,"li"),e(16," It enables developers to add interactivity, dynamic content, and event-driven behavior to web pages. "),t(),n(17,"li"),e(18," With JavaScript, you can respond to user actions, modify page content in real-time, and create engaging user experiences without reloading the entire page. "),t(),n(19,"li"),e(20," It is also used for server-side programming, mobile app development, and game development. "),t()()(),n(21,"div",4)(22,"h2",5),e(23,"Releases"),t(),n(24,"p",7),e(25," ES5("),n(26,"code"),e(27,"ECMAScript"),t(),e(28,") \u2192 ES6("),n(29,"code"),e(30,"ES2015"),t(),e(31,") \u2192 ES7("),n(32,"code"),e(33,"ES2016"),t(),e(34,") \u2192 ES8("),n(35,"code"),e(36,"ES2017"),t(),e(37,") \u2192 ES9("),n(38,"code"),e(39,"ES2018"),t(),e(40,") \u2192 ES10("),n(41,"code"),e(42,"ES2019"),t(),e(43,") \u2192 ES11("),n(44,"code"),e(45,"ES2020"),t(),e(46,") "),t()(),n(47,"div",4)(48,"h2",5),e(49,"Strict Mode"),t(),n(50,"ul",6)(51,"li"),e(52," Strict is a special mode that we activate in JavaScript which makes it easier to write secure code. "),t(),n(53,"li"),e(54,"This line must be the first line of the JavaScript code."),t(),n(55,"li"),e(56,"It creates visible errors in the developer console."),t()(),n(57,"pre",8)(58,"code"),e(59,"'use strict'"),t()()()())},encapsulation:2})};var E=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-comments"]],standalone:!1,decls:18,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Comments"),t(),n(4,"p",3),e(5," There are two types of code comments in JavaScript "),t()(),n(6,"div",4)(7,"h2",5),e(8,"Single line comment"),t(),n(9,"pre",6)(10,"code"),e(11,`// Prints 5 to the console
let num = 5;
console.log(num);

console.log(num);  // Prints 5`),t()()(),n(12,"div",4)(13,"h2",5),e(14,"Multi-line comment"),t(),n(15,"pre",6)(16,"code"),e(17,`/*
This is all commented
console.log(10);
*/
console.log(/*IGNORED!*/ 5);`),t()()()())},encapsulation:2})};var S=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-variables"]],standalone:!1,decls:89,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-text"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Variable"),t(),n(4,"p",3),e(5," Variables are containers used to store data values in JavaScript. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"What is a Variable?"),t(),n(9,"ul",6)(10,"li"),e(11,"A variable is like a container that holds a value."),t(),n(12,"li"),e(13,"The value can be changed later in the program."),t(),n(14,"li"),e(15,"Used to store numbers, strings, booleans, objects, arrays, etc."),t()()(),n(16,"div",4)(17,"h2",5),e(18,"Declaring Variables"),t(),n(19,"p",7),e(20," In JavaScript, variables can be declared using "),n(21,"code"),e(22,"var"),t(),e(23,", "),n(24,"code"),e(25,"let"),t(),e(26,", and "),n(27,"code"),e(28,"const"),t(),e(29,". "),t(),n(30,"pre",8)(31,"code"),e(32,`// using var (old way)
var name = "Tom";

// using let (recommended)
let age = 24;

// using const (constant value)
const country = "India";`),t()()(),n(33,"div",4)(34,"h2",5),e(35,"Rules for Naming Variables"),t(),n(36,"ul",6)(37,"li"),e(38,"Must start with a letter, "),n(39,"code"),e(40,"_"),t(),e(41,", or "),n(42,"code"),e(43,"$"),t()(),n(44,"li"),e(45,"Cannot start with a number"),t(),n(46,"li"),e(47,"Cannot use reserved keywords (example: "),n(48,"code"),e(49,"if"),t(),e(50,", "),n(51,"code"),e(52,"class"),t(),e(53,")"),t(),n(54,"li"),e(55,"Use meaningful names (example: "),n(56,"code"),e(57,"userName"),t(),e(58,", "),n(59,"code"),e(60,"totalPrice"),t(),e(61,")"),t(),n(62,"li"),e(63,"JavaScript is case-sensitive ("),n(64,"code"),e(65,"age"),t(),e(66," and "),n(67,"code"),e(68,"Age"),t(),e(69," are different)"),t()()(),n(70,"div",4)(71,"h2",5),e(72,"Difference: var vs let vs const"),t(),n(73,"ul",6)(74,"li")(75,"strong"),e(76,"var"),t(),e(77,": function scoped, can be re-declared (avoid using)"),t(),n(78,"li")(79,"strong"),e(80,"let"),t(),e(81,": block scoped, can be re-assigned \u2705"),t(),n(82,"li")(83,"strong"),e(84,"const"),t(),e(85,": block scoped, cannot be re-assigned \u2705"),t()(),n(86,"pre",8)(87,"code"),e(88,`let score = 10;
score = 20; // \u2705 allowed

const pi = 3.14;
// pi = 3.15; \u274C error`),t()()()())},encapsulation:2})};var h=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-datatypes"]],standalone:!1,decls:80,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Data Types"),t(),n(4,"p",3),e(5," Data types define what kind of value a variable can hold in JavaScript. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"Two Main Categories"),t(),n(9,"ul",6)(10,"li")(11,"strong"),e(12,"Primitive Data Types"),t(),e(13," \u2192 Stores single value (immutable) "),t(),n(14,"li")(15,"strong"),e(16,"Non-Primitive / Reference Types"),t(),e(17," \u2192 Stores complex data structures (mutable) "),t()()(),n(18,"div",4)(19,"h2",5),e(20,"Primitive Data Types"),t(),n(21,"ul",6)(22,"li")(23,"code"),e(24,"String"),t(),e(25," \u2192 Text values"),t(),n(26,"li")(27,"code"),e(28,"Number"),t(),e(29," \u2192 Numbers (integer & decimal)"),t(),n(30,"li")(31,"code"),e(32,"Boolean"),t(),e(33," \u2192 true / false"),t(),n(34,"li")(35,"code"),e(36,"Undefined"),t(),e(37," \u2192 Variable declared but not assigned"),t(),n(38,"li")(39,"code"),e(40,"Null"),t(),e(41," \u2192 Intentional empty value"),t(),n(42,"li")(43,"code"),e(44,"BigInt"),t(),e(45," \u2192 Large integers"),t(),n(46,"li")(47,"code"),e(48,"Symbol"),t(),e(49," \u2192 Unique identifiers"),t()(),n(50,"pre",7)(51,"code"),e(52,`let userName = "Tom";   // String
let age = 24;                // Number
let isAdmin = false;         // Boolean

let city;                    // Undefined
let address = null;          // Null

let bigNumber = 12345678901234567890n; // BigInt`),t()()(),n(53,"div",4)(54,"h2",5),e(55,"Non-Primitive (Reference) Types"),t(),n(56,"ul",6)(57,"li")(58,"code"),e(59,"Object"),t()(),n(60,"li")(61,"code"),e(62,"Array"),t()(),n(63,"li")(64,"code"),e(65,"Function"),t()()(),n(66,"pre",7)(67,"code"),e(68,`let person = {
  name: "Tom",
  age: 24
};

let numbers = [10, 20, 30];

function greet() {
  console.log("Hello!");
}`),t()()(),n(69,"div",4)(70,"h2",5),e(71,"typeof Operator"),t(),n(72,"p",8),e(73," JavaScript provides the "),n(74,"code"),e(75,"typeof"),t(),e(76," operator to check the data type of a value. "),t(),n(77,"pre",7)(78,"code"),e(79,`console.log(typeof "Hello");   // "string"
console.log(typeof 10);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"

console.log(typeof null);      // "object" \u2705 (this is a known JS bug)`),t()()()())},encapsulation:2})};var g=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-operators"]],standalone:!1,decls:145,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Operators"),t(),n(4,"p",3),e(5," Operators are symbols used to perform operations on values and variables. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"1) Arithmetic Operators"),t(),n(9,"ul",6)(10,"li")(11,"code"),e(12,"+"),t(),e(13," Addition"),t(),n(14,"li")(15,"code"),e(16,"-"),t(),e(17," Subtraction"),t(),n(18,"li")(19,"code"),e(20,"*"),t(),e(21," Multiplication"),t(),n(22,"li")(23,"code"),e(24,"/"),t(),e(25," Division"),t(),n(26,"li")(27,"code"),e(28,"%"),t(),e(29," Modulus (Remainder)"),t(),n(30,"li")(31,"code"),e(32,"**"),t(),e(33," Exponentiation"),t(),n(34,"li")(35,"code"),e(36,"++"),t(),e(37," Increment"),t(),n(38,"li")(39,"code"),e(40,"--"),t(),e(41," Decrement"),t()(),n(42,"pre",7)(43,"code"),e(44,`let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

a++;
b--;`),t()()(),n(45,"div",4)(46,"h2",5),e(47,"2) Assignment Operators"),t(),n(48,"ul",6)(49,"li")(50,"code"),e(51,"="),t(),e(52," Assign"),t(),n(53,"li")(54,"code"),e(55,"+="),t(),e(56,", "),n(57,"code"),e(58,"-="),t(),e(59,", "),n(60,"code"),e(61,"*="),t(),e(62,", "),n(63,"code"),e(64,"/="),t(),e(65," Update and assign"),t()(),n(66,"pre",7)(67,"code"),e(68,`let x = 10;

x += 5;  // x = 15
x -= 2;  // x = 13
x *= 2;  // x = 26
x /= 2;  // x = 13`),t()()(),n(69,"div",4)(70,"h2",5),e(71,"3) Comparison Operators"),t(),n(72,"ul",6)(73,"li")(74,"code"),e(75,"=="),t(),e(76," Equal (checks value only)"),t(),n(77,"li")(78,"code"),e(79,"==="),t(),e(80," Strict equal (checks value + type) \u2705"),t(),n(81,"li")(82,"code"),e(83,"!="),t(),e(84," Not equal"),t(),n(85,"li")(86,"code"),e(87,"!=="),t(),e(88," Strict not equal \u2705"),t(),n(89,"li")(90,"code"),e(91,">"),t(),e(92,", "),n(93,"code"),e(94,"<"),t(),e(95,", "),n(96,"code"),e(97,">="),t(),e(98,", "),n(99,"code"),e(100,"<="),t()()(),n(101,"pre",7)(102,"code"),e(103,`console.log(5 == "5");   // true  \u2705 value only
console.log(5 === "5");  // false \u2705 type mismatch

console.log(10 > 5);     // true
console.log(10 <= 9);    // false`),t()()(),n(104,"div",4)(105,"h2",5),e(106,"4) Logical Operators"),t(),n(107,"ul",6)(108,"li")(109,"code"),e(110,"&&"),t(),e(111," AND"),t(),n(112,"li")(113,"code"),e(114,"||"),t(),e(115," OR"),t(),n(116,"li")(117,"code"),e(118,"!"),t(),e(119," NOT"),t()(),n(120,"pre",7)(121,"code"),e(122,`let age = 20;
let hasId = true;

console.log(age >= 18 && hasId); // true

console.log(age < 18 || hasId);  // true

console.log(!hasId); // false`),t()()(),n(123,"div",4)(124,"h2",5),e(125,"5) Ternary Operator"),t(),n(126,"p",8),e(127," A short way to write an "),n(128,"code"),e(129,"if...else"),t(),e(130,". "),t(),n(131,"pre",7)(132,"code"),e(133,`let marks = 45;

let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);`),t()()(),n(134,"div",4)(135,"h2",5),e(136,"6) String Operators"),t(),n(137,"p",8),e(138," You can use "),n(139,"code"),e(140,"+"),t(),e(141," to concatenate strings. "),t(),n(142,"pre",7)(143,"code"),e(144,`let firstName = "Tom";
let lastName = "G";

console.log(firstName + " " + lastName); // Tom G`),t()()()())},encapsulation:2})};var v=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-conditionals"]],standalone:!1,decls:83,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-text"],[1,"note-code"],[1,"note-list"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Conditional Statements"),t(),n(4,"p",3),e(5," Conditional statements are used to make decisions based on conditions. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"1) if Statement"),t(),n(9,"p",6),e(10," Executes a block of code only if the condition is "),n(11,"strong"),e(12,"true"),t(),e(13,". "),t(),n(14,"pre",7)(15,"code"),e(16,`let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
}`),t()()(),n(17,"div",4)(18,"h2",5),e(19,"2) if...else Statement"),t(),n(20,"p",6),e(21," Runs one block if condition is true, otherwise runs the "),n(22,"code"),e(23,"else"),t(),e(24," block. "),t(),n(25,"pre",7)(26,"code"),e(27,`let marks = 35;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}`),t()()(),n(28,"div",4)(29,"h2",5),e(30,"3) else if Ladder"),t(),n(31,"p",6),e(32," Used to test multiple conditions one by one. "),t(),n(33,"pre",7)(34,"code"),e(35,`let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}`),t()()(),n(36,"div",4)(37,"h2",5),e(38,"4) switch Statement"),t(),n(39,"p",6),e(40," Used when you want to compare one value with many cases. "),t(),n(41,"pre",7)(42,"code"),e(43,`let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}`),t()()(),n(44,"div",4)(45,"h2",5),e(46,"5) Truthy & Falsy Values"),t(),n(47,"p",6),e(48," In JavaScript, some values are treated as "),n(49,"strong"),e(50,"false"),t(),e(51," even though they are not the boolean "),n(52,"code"),e(53,"false"),t(),e(54,". "),t(),n(55,"ul",8)(56,"li")(57,"strong"),e(58,"Falsy values:"),t(),n(59,"code"),e(60,"false"),t(),e(61,", "),n(62,"code"),e(63,"0"),t(),e(64,", "),n(65,"code"),e(66,'""'),t(),e(67,", "),n(68,"code"),e(69,"null"),t(),e(70,", "),n(71,"code"),e(72,"undefined"),t(),e(73,", "),n(74,"code"),e(75,"NaN"),t()(),n(76,"li")(77,"strong"),e(78,"Truthy values:"),t(),e(79," Everything else \u2705"),t()(),n(80,"pre",7)(81,"code"),e(82,`let userName = "";

if (userName) {
  console.log("Username exists");
} else {
  console.log("Username is empty"); // \u2705 runs
}`),t()()()())},encapsulation:2})};var y=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-loops"]],standalone:!1,decls:70,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-text"],[1,"note-code"],[1,"note-list"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Loops"),t(),n(4,"p",3),e(5," Loops are used to execute a block of code repeatedly until a condition is met. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"1) for Loop"),t(),n(9,"p",6),e(10," Used when you know how many times you want to repeat the code. "),t(),n(11,"pre",7)(12,"code"),e(13,`for (let i = 1; i <= 5; i++) {
  console.log(i);
}`),t()()(),n(14,"div",4)(15,"h2",5),e(16,"2) while Loop"),t(),n(17,"p",6),e(18," Executes the block while the condition is "),n(19,"strong"),e(20,"true"),t(),e(21,". "),t(),n(22,"pre",7)(23,"code"),e(24,`let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}`),t()()(),n(25,"div",4)(26,"h2",5),e(27,"3) do...while Loop"),t(),n(28,"p",6),e(29," Runs the code at least once even if the condition is false. "),t(),n(30,"pre",7)(31,"code"),e(32,`let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 3);`),t()()(),n(33,"div",4)(34,"h2",5),e(35,"4) break and continue"),t(),n(36,"ul",8)(37,"li")(38,"code"),e(39,"break"),t(),e(40," \u2192 stops the loop completely"),t(),n(41,"li")(42,"code"),e(43,"continue"),t(),e(44," \u2192 skips current iteration"),t()(),n(45,"pre",7)(46,"code"),e(47,`for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop at 5
  console.log(i);
}`),t()()(),n(48,"div",4)(49,"h2",5),e(50,"5) for...of Loop"),t(),n(51,"p",6),e(52," Best for iterating over "),n(53,"strong"),e(54,"arrays"),t(),e(55,". "),t(),n(56,"pre",7)(57,"code"),e(58,`let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}`),t()()(),n(59,"div",4)(60,"h2",5),e(61,"6) for...in Loop"),t(),n(62,"p",6),e(63," Best for iterating over "),n(64,"strong"),e(65,"object keys"),t(),e(66,". "),t(),n(67,"pre",7)(68,"code"),e(69,`let user = {
  name: "Tom",
  age: 24
};

for (let key in user) {
  console.log(key, user[key]);
}`),t()()()())},encapsulation:2})};var b=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-functions"]],standalone:!1,decls:81,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Functions"),t(),n(4,"p",3),e(5," Functions are reusable blocks of code designed to perform a specific task. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"What is a Function?"),t(),n(9,"ul",6)(10,"li"),e(11,"A function allows you to reuse logic without writing it again and again."),t(),n(12,"li"),e(13,"You can pass values into a function using "),n(14,"strong"),e(15,"parameters"),t(),e(16,"."),t(),n(17,"li"),e(18,"The function can return an output using "),n(19,"code"),e(20,"return"),t(),e(21,"."),t()()(),n(22,"div",4)(23,"h2",5),e(24,"1) Function Declaration"),t(),n(25,"pre",7)(26,"code"),e(27,`function greet() {
  console.log("Hello Tom!");
}

greet();`),t()()(),n(28,"div",4)(29,"h2",5),e(30,"2) Function with Parameters"),t(),n(31,"pre",7)(32,"code"),e(33,`function add(a, b) {
  console.log(a + b);
}

add(10, 5);`),t()()(),n(34,"div",4)(35,"h2",5),e(36,"3) Function with Return"),t(),n(37,"pre",7)(38,"code"),e(39,`function multiply(x, y) {
  return x * y;
}

let result = multiply(5, 4);
console.log(result);`),t()()(),n(40,"div",4)(41,"h2",5),e(42,"4) Function Expression"),t(),n(43,"p",8),e(44," Functions can also be stored in variables. "),t(),n(45,"pre",7)(46,"code"),e(47,`const sayHi = function () {
  console.log("Hi!");
};

sayHi();`),t()()(),n(48,"div",4)(49,"h2",5),e(50,"5) Arrow Functions (ES6)"),t(),n(51,"p",8),e(52," Arrow functions are shorter syntax for writing functions. "),t(),n(53,"pre",7)(54,"code"),e(55,`// Normal function
function subtract(a, b) {
  return a - b;
}

// Arrow function
const subtractArrow = (a, b) => {
  return a - b;
};

// One-liner arrow function
const square = (n) => n * n;`),t()()(),n(56,"div",4)(57,"h2",5),e(58,"6) Default Parameters"),t(),n(59,"pre",7)(60,"code"),e(61,`function welcome(name = "Guest") {
  console.log("Welcome " + name);
}

welcome();       // Guest
welcome("Sam");  // Sam`),t()()(),n(62,"div",4)(63,"h2",5),e(64,"7) Rest Parameters"),t(),n(65,"p",8),e(66," Rest operator "),n(67,"code"),e(68,"..."),t(),e(69," collects multiple arguments into an array. "),t(),n(70,"pre",7)(71,"code"),e(72,`function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4));`),t()()(),n(73,"div",4)(74,"h2",5),e(75,"8) Callback Function (Basic)"),t(),n(76,"p",8),e(77," A callback is a function passed into another function as an argument. "),t(),n(78,"pre",7)(79,"code"),e(80,`function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

greetUser("Tom", function () {
  console.log("Welcome to JavaScript!");
});`),t()()()())},encapsulation:2})};var w=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-array"]],standalone:!1,decls:100,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Arrays"),t(),n(4,"p",3),e(5," Arrays are used to store multiple values in a single variable. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"What is an Array?"),t(),n(9,"ul",6)(10,"li"),e(11,"An array holds a collection of values."),t(),n(12,"li"),e(13,"Array values are stored in index positions (starting from "),n(14,"code"),e(15,"0"),t(),e(16,")."),t(),n(17,"li"),e(18,"Arrays can store different data types together."),t()(),n(19,"pre",7)(20,"code"),e(21,`let numbers = [10, 20, 30];
let mixed = ["Tom", 24, true];`),t()()(),n(22,"div",4)(23,"h2",5),e(24,"Accessing Array Elements"),t(),n(25,"pre",7)(26,"code"),e(27,`let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango`),t()()(),n(28,"div",4)(29,"h2",5),e(30,"Updating Array Elements"),t(),n(31,"pre",7)(32,"code"),e(33,`let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]`),t()()(),n(34,"div",4)(35,"h2",5),e(36,"Array Length"),t(),n(37,"pre",7)(38,"code"),e(39,`let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length); // 3`),t()()(),n(40,"div",4)(41,"h2",5),e(42,"Common Array Methods"),t(),n(43,"ul",6)(44,"li")(45,"code"),e(46,"push()"),t(),e(47," \u2192 adds item at end"),t(),n(48,"li")(49,"code"),e(50,"pop()"),t(),e(51," \u2192 removes last item"),t(),n(52,"li")(53,"code"),e(54,"unshift()"),t(),e(55," \u2192 adds item at start"),t(),n(56,"li")(57,"code"),e(58,"shift()"),t(),e(59," \u2192 removes first item"),t(),n(60,"li")(61,"code"),e(62,"includes()"),t(),e(63," \u2192 checks if value exists"),t(),n(64,"li")(65,"code"),e(66,"indexOf()"),t(),e(67," \u2192 returns index of value"),t()(),n(68,"pre",7)(69,"code"),e(70,`let fruits = ["Apple", "Banana"];

fruits.push("Mango");     // ["Apple","Banana","Mango"]
fruits.pop();             // ["Apple","Banana"]

fruits.unshift("Orange"); // ["Orange","Apple","Banana"]
fruits.shift();           // ["Apple","Banana"]

console.log(fruits.includes("Banana")); // true
console.log(fruits.indexOf("Apple"));   // 0`),t()()(),n(71,"div",4)(72,"h2",5),e(73,"Looping Through Arrays"),t(),n(74,"pre",7)(75,"code"),e(76,`let nums = [10, 20, 30];

// for loop
for (let i = 0; i <  nums.length; i++) {
  console.log(nums[i]);
}

// for...of loop
for (let num of nums) {
  console.log(num);
}`),t()()(),n(77,"div",4)(78,"h2",5),e(79,"Important Array Methods (ES6+)"),t(),n(80,"ul",6)(81,"li")(82,"code"),e(83,"map()"),t(),e(84," \u2192 transforms array"),t(),n(85,"li")(86,"code"),e(87,"filter()"),t(),e(88," \u2192 filters based on condition"),t(),n(89,"li")(90,"code"),e(91,"reduce()"),t(),e(92," \u2192 reduces to single value"),t(),n(93,"li")(94,"code"),e(95,"find()"),t(),e(96," \u2192 returns first matching element"),t()(),n(97,"pre",7)(98,"code"),e(99,`let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2,4,6,8,10]

let even = numbers.filter((n) => n % 2 === 0);
console.log(even); // [2,4]

let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

let firstBig = numbers.find((n) => n > 3);
console.log(firstBig); // 4`),t()()()())},encapsulation:2})};var j=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-objects"]],standalone:!1,decls:72,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Objects"),t(),n(4,"p",3),e(5," Objects store data in "),n(6,"strong"),e(7,"key : value"),t(),e(8," pairs. "),t()(),n(9,"div",4)(10,"h2",5),e(11,"What is an Object?"),t(),n(12,"ul",6)(13,"li"),e(14,"Objects represent real-world entities (example: user, product, car)."),t(),n(15,"li"),e(16,"Data is stored using properties (keys) and values."),t(),n(17,"li"),e(18,"Objects can store strings, numbers, booleans, arrays, functions, etc."),t()(),n(19,"pre",7)(20,"code"),e(21,`let user = {
  name: "Tom",
  age: 24,
  isAdmin: false
};`),t()()(),n(22,"div",4)(23,"h2",5),e(24,"Accessing Object Properties"),t(),n(25,"ul",6)(26,"li")(27,"strong"),e(28,"Dot notation"),t(),e(29," \u2705 (most common)"),t(),n(30,"li")(31,"strong"),e(32,"Bracket notation"),t(),e(33," \u2705 (useful for dynamic keys)"),t()(),n(34,"pre",7)(35,"code"),e(36,`let user = {
  name: "Tom",
  age: 24
};

console.log(user.name);     // Tom
console.log(user["age"]);   // 24`),t()()(),n(37,"div",4)(38,"h2",5),e(39,"Updating / Adding Properties"),t(),n(40,"pre",7)(41,"code"),e(42,`let user = {
  name: "Tom"
};

user.age = 24;           // add
user.name = "Sam";       // update

user["country"] = "India";

console.log(user);`),t()()(),n(43,"div",4)(44,"h2",5),e(45,"Deleting Properties"),t(),n(46,"pre",7)(47,"code"),e(48,`let user = {
  name: "Tom",
  age: 24
};

delete user.age;

console.log(user);`),t()()(),n(49,"div",4)(50,"h2",5),e(51,"Object with Methods"),t(),n(52,"p",8),e(53," An object can contain functions. These are called "),n(54,"strong"),e(55,"methods"),t(),e(56,". "),t(),n(57,"pre",7)(58,"code"),e(59,`let user = {
  name: "Tom",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

user.greet();`),t()()(),n(60,"div",4)(61,"h2",5),e(62,"Looping Through Object"),t(),n(63,"pre",7)(64,"code"),e(65,`let user = {
  name: "Tom",
  age: 24,
  country: "India"
};

for (let key in user) {
  console.log(key, user[key]);
}`),t()()(),n(66,"div",4)(67,"h2",5),e(68,"Object.keys / values / entries"),t(),n(69,"pre",7)(70,"code"),e(71,`let user = {
  name: "Tom",
  age: 24
};

console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Tom", 24]
console.log(Object.entries(user));// [["name","Tom"], ["age",24]]`),t()()()())},encapsulation:2})};var J=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-templateliterals"]],standalone:!1,decls:43,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Template Literals"),t(),n(4,"p",3),e(5," Template literals make string creation easier using backticks and interpolation. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"What are Template Literals?"),t(),n(9,"ul",6)(10,"li"),e(11,"Template literals use backticks: "),n(12,"code"),e(13,"`...`"),t()(),n(14,"li"),e(15," They support variable interpolation using "),n(16,"code"),e(17,"${variable}"),t()(),n(18,"li"),e(19,"They support multi-line strings easily \u2705"),t()()(),n(20,"div",4)(21,"h2",5),e(22,"String Concatenation vs Template Literals"),t(),n(23,"pre",7)(24,"code"),e(25,`// Old way (concatenation)
const firstName = "Tom";
const job = "Developer";
const year = 2026;

const msg1 = "I'm " + firstName + ", a " + job + " in " + year;
console.log(msg1);

// Template literals (recommended)
const msg2 = \`I'm \${firstName}, a \${job} in \${year}\`;
console.log(msg2);`),t()()(),n(26,"div",4)(27,"h2",5),e(28,"Multi-line Strings"),t(),n(29,"pre",7)(30,"code"),e(31,`// Using template literals
const multiLine = \`Hello Tom,
Welcome to JavaScript!
Enjoy learning \u{1F604}\`;

console.log(multiLine);`),t()()(),n(32,"div",4)(33,"h2",5),e(34,"Expressions inside ${ }"),t(),n(35,"p",8),e(36," You can write any valid expression inside "),n(37,"code"),e(38,"${ }"),t(),e(39,". "),t(),n(40,"pre",7)(41,"code"),e(42,"const a = 10;\nconst b = 20;\n\nconsole.log(`Sum is ${a + b}`);         // 30\nconsole.log(`Is a greater? ${a > b}`);  // false"),t()()()())},encapsulation:2})};var C=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-conversioncoercion"]],standalone:!1,decls:75,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Conversion & Coercion"),t(),n(4,"p",3),e(5," Learn the difference between manual type conversion and automatic coercion in JavaScript. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"Type Conversion (Manual)"),t(),n(9,"ul",6)(10,"li")(11,"strong"),e(12,"Conversion"),t(),e(13," means we convert a value from one type to another "),n(14,"strong"),e(15,"manually"),t(),e(16,". "),t(),n(17,"li"),e(18," Common conversion functions: "),n(19,"code"),e(20,"Number()"),t(),e(21,", "),n(22,"code"),e(23,"String()"),t(),e(24,", "),n(25,"code"),e(26,"Boolean()"),t()()(),n(27,"pre",7)(28,"code"),e(29,`// String to Number
console.log(Number("10"));      // 10
console.log(Number("Tom"));// NaN

// Number to String
console.log(String(25));        // "25"

// Any value to Boolean
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(""));       // false
console.log(Boolean("Hi"));     // true`),t()()(),n(30,"div",4)(31,"h2",5),e(32,"Type Coercion (Automatic)"),t(),n(33,"ul",6)(34,"li")(35,"strong"),e(36,"Coercion"),t(),e(37," means JavaScript automatically converts types behind the scenes. "),t(),n(38,"li"),e(39,"Usually happens with operators like "),n(40,"code"),e(41,"+"),t(),e(42,", "),n(43,"code"),e(44,"-"),t()()(),n(45,"pre",7)(46,"code"),e(47,`// + converts to string if one operand is string
console.log("10" + 5);   // "105"

// - converts to number if possible
console.log("10" - 5);   // 5

console.log("10" * 2);   // 20
console.log("10" / 2);   // 5`),t()()(),n(48,"div",4)(49,"h2",5),e(50,"Common Coercion Examples"),t(),n(51,"pre",7)(52,"code"),e(53,`console.log("5" + 1);     // "51"
console.log("5" - 1);     // 4
console.log("5" * "2");   // 10

console.log(true + 1);    // 2  (true becomes 1)
console.log(false + 1);   // 1  (false becomes 0)`),t()()(),n(54,"div",4)(55,"h2",5),e(56,"NaN (Not a Number)"),t(),n(57,"p",8)(58,"code"),e(59,"NaN"),t(),e(60," is a number type, but it represents an invalid numeric result. "),t(),n(61,"pre",7)(62,"code"),e(63,`console.log(Number("abc")); // NaN
console.log(typeof NaN);    // "number"`),t()()(),n(64,"div",4)(65,"h2",5),e(66,"Best Practice \u2705"),t(),n(67,"ul",6)(68,"li"),e(69,"Prefer explicit conversion instead of relying on coercion."),t(),n(70,"li"),e(71,"Use "),n(72,"code"),e(73,"==="),t(),e(74," for comparisons to avoid unexpected results."),t()()()())},encapsulation:2})};var N=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-truthyfalsy"]],standalone:!1,decls:100,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-text"],[1,"note-subheading"],[1,"note-list"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Truthy & Falsy + Boolean Logic"),t(),n(4,"p",3),e(5," Understand how JavaScript evaluates values in conditions and how logical operators work. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"Truthy & Falsy"),t(),n(9,"p",6),e(10," In JavaScript, values are converted to "),n(11,"code"),e(12,"true"),t(),e(13," or "),n(14,"code"),e(15,"false"),t(),e(16," automatically when used inside conditions. "),t(),n(17,"h3",7),e(18,"Falsy values \u2705"),t(),n(19,"ul",8)(20,"li")(21,"code"),e(22,"false"),t()(),n(23,"li")(24,"code"),e(25,"0"),t()(),n(26,"li")(27,"code"),e(28,'""'),t(),e(29," (empty string)"),t(),n(30,"li")(31,"code"),e(32,"null"),t()(),n(33,"li")(34,"code"),e(35,"undefined"),t()(),n(36,"li")(37,"code"),e(38,"NaN"),t()()(),n(39,"h3",7),e(40,"Truthy values \u2705"),t(),n(41,"p",6),e(42,"Everything else is truthy (example: "),n(43,"code"),e(44,'"0"'),t(),e(45,", "),n(46,"code"),e(47,"[]"),t(),e(48,", "),n(49,"code"),e(50,"{}"),t(),e(51,")."),t(),n(52,"pre",9)(53,"code"),e(54,`console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("Hello")); // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true`),t()()(),n(55,"div",4)(56,"h2",5),e(57,"Truthy/Falsy in if Condition"),t(),n(58,"pre",9)(59,"code"),e(60,`const money = 0;

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!"); // \u2705 runs
}`),t()()(),n(61,"div",4)(62,"h2",5),e(63,"Boolean Logic (AND / OR / NOT)"),t(),n(64,"ul",8)(65,"li")(66,"code"),e(67,"&&"),t(),e(68," AND \u2192 all conditions must be true"),t(),n(69,"li")(70,"code"),e(71,"||"),t(),e(72," OR \u2192 at least one condition must be true"),t(),n(73,"li")(74,"code"),e(75,"!"),t(),e(76," NOT \u2192 reverses boolean value"),t()(),n(77,"pre",9)(78,"code"),e(79,`const hasLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasLicense && hasGoodVision); // true
console.log(hasLicense || hasGoodVision); // true
console.log(!hasLicense);                 // false`),t()()(),n(80,"div",4)(81,"h2",5),e(82,"Example: Can Drive?"),t(),n(83,"pre",9)(84,"code"),e(85,`const hasLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasLicense && hasGoodVision && !isTired) {
  console.log("\u2705 You can drive!");
} else {
  console.log("\u274C Someone else should drive!");
}`),t()()(),n(86,"div",4)(87,"h2",5),e(88,"Short-circuiting (Bonus \u2705)"),t(),n(89,"p",6),e(90," Logical operators don\u2019t always return "),n(91,"code"),e(92,"true"),t(),e(93,"/"),n(94,"code"),e(95,"false"),t(),e(96,". They return the actual value that made the result. "),t(),n(97,"pre",9)(98,"code"),e(99,`// OR returns the first truthy value
console.log("" || "Tom");     // "Tom"

// AND returns the first falsy value
console.log(0 && "Hello");         // 0`),t()()()())},encapsulation:2})};var k=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-equalityoperator"]],standalone:!1,decls:62,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Equality Operator"),t(),n(4,"p",3),e(5," JavaScript has loose and strict equality operators. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"Loose Equality (==)"),t(),n(9,"ul",6)(10,"li")(11,"code"),e(12,"=="),t(),e(13," compares only the "),n(14,"strong"),e(15,"value"),t()(),n(16,"li"),e(17," It performs "),n(18,"strong"),e(19,"type coercion"),t(),e(20," automatically \u26A0\uFE0F "),t()(),n(21,"pre",7)(22,"code"),e(23,`console.log(5 == "5");     // true  \u2705 (string "5" becomes number 5)
console.log(true == 1);    // true
console.log(false == 0);   // true`),t()()(),n(24,"div",4)(25,"h2",5),e(26,"Strict Equality (===) \u2705 Recommended"),t(),n(27,"ul",6)(28,"li")(29,"code"),e(30,"==="),t(),e(31," compares both "),n(32,"strong"),e(33,"value + type"),t()(),n(34,"li"),e(35," No type coercion happens \u2705 "),t()(),n(36,"pre",7)(37,"code"),e(38,`console.log(5 === "5");    // false \u2705 different types
console.log(true === 1);   // false
console.log(false === 0);  // false`),t()()(),n(39,"div",4)(40,"h2",5),e(41,"Not Equal Operators (!= vs !==)"),t(),n(42,"pre",7)(43,"code"),e(44,`console.log(5 != "5");     // false (because "5" coerces to 5)
console.log(5 !== "5");    // true  \u2705 strict check`),t()()(),n(45,"div",4)(46,"h2",5),e(47,"Best Practice \u2705"),t(),n(48,"ul",6)(49,"li"),e(50," Always prefer "),n(51,"code"),e(52,"==="),t(),e(53," and "),n(54,"code"),e(55,"!=="),t(),e(56," for clean and predictable code. "),t(),n(57,"li"),e(58," Avoid "),n(59,"code"),e(60,"=="),t(),e(61," unless you intentionally want coercion. "),t()()()())},encapsulation:2})};var T=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-statementsexpressions"]],standalone:!1,decls:53,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-text"],[1,"note-list"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Statements & Expressions"),t(),n(4,"p",3),e(5," Understand the difference between expressions (produce values) and statements (perform actions). "),t()(),n(6,"div",4)(7,"h2",5),e(8,"Expressions \u2705"),t(),n(9,"p",6),e(10," An "),n(11,"strong"),e(12,"expression"),t(),e(13," is a piece of code that produces a value. "),t(),n(14,"ul",7)(15,"li"),e(16,"Expressions can be stored in variables."),t(),n(17,"li"),e(18,"Expressions can be logged to console."),t(),n(19,"li"),e(20,"Expressions can be used inside template literals."),t()(),n(21,"pre",8)(22,"code"),e(23,`// Examples of expressions
3 + 4
1991
true && false
"Hello"

// expression can be stored
const age = 2026 - 2002;

console.log(age);`),t()()(),n(24,"div",4)(25,"h2",5),e(26,"Statements \u2705"),t(),n(27,"p",6),e(28," A "),n(29,"strong"),e(30,"statement"),t(),e(31," performs an action but does not produce a value directly. "),t(),n(32,"pre",8)(33,"code"),e(34,`// if statement
if (age >= 18) {
  console.log("Adult");
}

// for loop statement
for (let i = 1; i <= 3; i++) {
  console.log(i);
}`),t()()(),n(35,"div",4)(36,"h2",5),e(37,"Where Expressions are Used"),t(),n(38,"pre",8)(39,"code"),e(40,`const firstName = "Tom";
const job = "Developer";
const birthYear = 2002;

// Expressions inside template literals
const info = \`I'm \${firstName}, a \${job}. Age: \${2026 - birthYear}\`;
console.log(info);`),t()()(),n(41,"div",4)(42,"h2",5),e(43,"Quick Summary"),t(),n(44,"ul",7)(45,"li")(46,"strong"),e(47,"Expression"),t(),e(48," \u2192 produces a value \u2705"),t(),n(49,"li")(50,"strong"),e(51,"Statement"),t(),e(52," \u2192 performs an action \u2705"),t()()()())},encapsulation:2})};var A=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-prompt"]],standalone:!1,decls:59,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"prompt()"),t(),n(4,"p",3)(5,"code"),e(6,"prompt()"),t(),e(7," is used to get input from the user through a popup box. "),t()(),n(8,"div",4)(9,"h2",5),e(10,"What is prompt()?"),t(),n(11,"ul",6)(12,"li")(13,"code"),e(14,"prompt()"),t(),e(15," displays a dialog box with an input field. "),t(),n(16,"li"),e(17," It returns the user input as a "),n(18,"strong"),e(19,"string"),t(),e(20,". "),t(),n(21,"li"),e(22," If user clicks "),n(23,"strong"),e(24,"Cancel"),t(),e(25,", it returns "),n(26,"code"),e(27,"null"),t(),e(28,". "),t()(),n(29,"pre",7)(30,"code"),e(31,`const name = prompt("What is your name?");
console.log(name);`),t()()(),n(32,"div",4)(33,"h2",5),e(34,"Example: Convert input to Number \u2705"),t(),n(35,"p",8),e(36," Since prompt returns a string, we usually convert it using "),n(37,"code"),e(38,"Number()"),t(),e(39,". "),t(),n(40,"pre",7)(41,"code"),e(42,`const ageInput = prompt("Enter your age:");
const age = Number(ageInput);

console.log(age);
console.log(typeof age);`),t()()(),n(43,"div",4)(44,"h2",5),e(45,"Example: Simple Check"),t(),n(46,"pre",7)(47,"code"),e(48,`const favNumber = Number(prompt("Enter your favourite number:"));

if (favNumber === 7) {
  console.log("\u{1F389} Cool! 7 is a lucky number!");
} else {
  console.log("Nice choice!");
}`),t()()(),n(49,"div",4)(50,"h2",5),e(51,"Note \u26A0\uFE0F"),t(),n(52,"ul",6)(53,"li")(54,"code"),e(55,"prompt()"),t(),e(56," works only in browsers (not in Node.js). "),t(),n(57,"li"),e(58," It blocks execution until the user enters input. "),t()()()())},encapsulation:2})};var D=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-ifelse"]],standalone:!1,decls:44,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"If else"),t(),n(4,"p",3)(5,"code"),e(6,"if"),t(),e(7,", "),n(8,"code"),e(9,"else if"),t(),e(10,", and "),n(11,"code"),e(12,"else"),t(),e(13," are used to execute code based on conditions. "),t()(),n(14,"div",4)(15,"h2",5),e(16,"1) Simple if"),t(),n(17,"pre",6)(18,"code"),e(19,`const age = 19;

if (age >= 18) {
  console.log("\u2705 You are an adult");
}`),t()()(),n(20,"div",4)(21,"h2",5),e(22,"2) if...else"),t(),n(23,"pre",6)(24,"code"),e(25,`const age = 15;

if (age >= 18) {
  console.log("\u2705 You can vote");
} else {
  console.log("\u274C You cannot vote");
}`),t()()(),n(26,"div",4)(27,"h2",5),e(28,"3) else if Ladder"),t(),n(29,"pre",6)(30,"code"),e(31,`const marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}`),t()()(),n(32,"div",4)(33,"h2",5),e(34,"4) Multiple Conditions"),t(),n(35,"pre",6)(36,"code"),e(37,`const hasId = true;
const age = 20;

if (age >= 18 && hasId) {
  console.log("\u2705 Entry allowed");
} else {
  console.log("\u274C Entry not allowed");
}`),t()()(),n(38,"div",4)(39,"h2",5),e(40,"5) Nested if (Example)"),t(),n(41,"pre",6)(42,"code"),e(43,`const isLoggedIn = true;
const role = "admin";

if (isLoggedIn) {
  if (role === "admin") {
    console.log("\u2705 Welcome Admin");
  } else {
    console.log("\u2705 Welcome User");
  }
} else {
  console.log("\u274C Please login");
}`),t()()()())},encapsulation:2})};var I=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-switch"]],standalone:!1,decls:45,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-code"],[1,"note-text"],[1,"note-list"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Switch Case"),t(),n(4,"p",3)(5,"code"),e(6,"switch"),t(),e(7," is used to compare a value against multiple cases. "),t()(),n(8,"div",4)(9,"h2",5),e(10,"Basic switch Example"),t(),n(11,"pre",6)(12,"code"),e(13,`const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend \u{1F604}");
    break;

  default:
    console.log("Not a valid day!");
}`),t()()(),n(14,"div",4)(15,"h2",5),e(16,"Why break is important?"),t(),n(17,"p",7),e(18," Without "),n(19,"code"),e(20,"break"),t(),e(21,", the execution continues into the next case (this is called "),n(22,"strong"),e(23,"fall-through"),t(),e(24,"). "),t(),n(25,"pre",6)(26,"code"),e(27,`const num = 1;

switch (num) {
  case 1:
    console.log("One");
    // no break \u2192 continues
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Unknown");
}

// Output:
// One
// Two`),t()()(),n(28,"div",4)(29,"h2",5),e(30,"switch vs if...else"),t(),n(31,"ul",8)(32,"li"),e(33," Use "),n(34,"code"),e(35,"switch"),t(),e(36," when comparing the "),n(37,"strong"),e(38,"same variable"),t(),e(39," with many exact values. "),t(),n(40,"li"),e(41," Use "),n(42,"code"),e(43,"if...else"),t(),e(44," when conditions involve ranges or complex logic. "),t()()()())},encapsulation:2})};var M=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-whatisjs"]],standalone:!1,decls:74,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-translation"],[1,"note-subheading"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"What is JS"),t(),n(4,"p",3),e(5,"Brief Overview"),t()(),n(6,"div",4)(7,"h2",5),e(8,"High level program"),t(),n(9,"ul",6)(10,"li"),e(11," Every program that runs on a computer needs some hardware resources such as memory, CPU, mouse, keyboard to do its work. "),t(),n(12,"li")(13,"strong"),e(14,"Languages:"),t(),e(15," JS & Python"),t(),n(16,"li"),e(17,"We don\u2019t need to manage resources manually."),t(),n(18,"li"),e(19," These languages have abstractions that take the work away from us. "),t(),n(20,"li"),e(21," The program that takes memory management away from us is called "),n(22,"strong"),e(23,"Garbage Collection"),t(),e(24,". "),t(),n(25,"li"),e(26," Inside the JS engine, garbage collection automatically removes old, unused objects from memory. "),t()(),n(27,"div",7)(28,"h3",8),e(29,"Translation"),t(),n(30,"ul",6)(31,"li"),e(32," Computer la run aagura ella program kum edho oru hardware theva padum like memory, CPU, mouse, keyboard adhoda velaiya seiradhukaga. "),t(),n(33,"li")(34,"strong"),e(35,"Languages:"),t(),e(36," JS & Python"),t(),n(37,"li"),e(38," Program run aaguradhuku theva padura ellathaum namba manual ah manage pana vendam. "),t(),n(39,"li"),e(40," Idhu mathri run aagura program ellam abstractions nu soluvanga \u2014 namba kitta velaiya kudukama adhuve pathukum. "),t(),n(41,"li"),e(42," Memory management ah adhuve pathukura program ah "),n(43,"strong"),e(44,"garbage-collection"),t(),e(45," soluvanga. "),t(),n(46,"li"),e(47," JS engine palaya use aagadha objects ah adhuvave automatic ah computer memory la irundhu remove panikum. "),t()()()(),n(48,"div",4)(49,"h2",5),e(50,"Low level language"),t(),n(51,"ul",6)(52,"li"),e(53,"We need to manually manage these resources."),t(),n(54,"li"),e(55," Example: Ask the computer for memory to create a new variable. "),t()(),n(56,"div",7)(57,"h3",8),e(58,"Translation"),t(),n(59,"ul",6)(60,"li"),e(61," Program run aaguradhuku theva padura ellathaum nambalave dha manage pananum. "),t(),n(62,"li"),e(63," Example: Computer kita ketu oru variable create panradhuku memory create pana solanum. "),t()()()(),n(64,"div",4)(65,"h2",5),e(66,"Computer processor"),t(),n(67,"ul",6)(68,"li"),e(69,"It only understands zeroes and ones (0101001)."),t(),n(70,"li"),e(71,"It is not possible to write code in 0 & 1."),t(),n(72,"li"),e(73,"We simply write human-readable JS code."),t()()()())},encapsulation:2})};var F=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-thiskeyword"]],standalone:!1,decls:105,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-subcard"],[1,"note-subheading"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"this keyword"),t(),n(4,"p",3)(5,"code"),e(6,"this"),t(),e(7," depends on how a function is called. "),t()(),n(8,"div",4)(9,"h2",5),e(10,"Basics"),t(),n(11,"ul",6)(12,"li"),e(13,"If we set "),n(14,"code"),e(15,"x = 5"),t(),e(16,", then "),n(17,"code"),e(18,"x"),t(),e(19," will always be "),n(20,"code"),e(21,"5"),t(),e(22,"."),t(),n(23,"li"),e(24," But the "),n(25,"code"),e(26,"this"),t(),e(27," keyword depends on the way in which a function is called. "),t()()(),n(28,"div",4)(29,"h2",5),e(30,"4 different ways functions can be called"),t(),n(31,"div",7)(32,"h3",8),e(33,"1) Method (Object)"),t(),n(34,"ul",6)(35,"li"),e(36,"Calling a function attached to an object is called a "),n(37,"strong"),e(38,"method"),t(),e(39,"."),t(),n(40,"li"),e(41," When calling a method, "),n(42,"code"),e(43,"this"),t(),e(44," points to the "),n(45,"strong"),e(46,"object"),t(),e(47," on which the method is called. "),t()(),n(48,"pre",9)(49,"code"),e(50,`const jonas = {
  userName: "Jonas",
  year: 1998,
  calcAge: function () {
    return 2023 - this.year;
  }
};

jonas.calcAge();
/*
calcAge - Method
this - jonas
year - 1998
*/`),t()()(),n(51,"div",7)(52,"h3",8),e(53,"2) Regular Function"),t(),n(54,"ul",6)(55,"li")(56,"code"),e(57,"this"),t(),e(58," \u2192 "),n(59,"code"),e(60,"undefined"),t(),e(61," (in "),n(62,"strong"),e(63,"strict mode"),t(),e(64,")"),t(),n(65,"li"),e(66," In non-strict mode, "),n(67,"code"),e(68,"this"),t(),e(69," points to the "),n(70,"strong"),e(71,"global object"),t(),e(72," (in browser it is "),n(73,"code"),e(74,"window"),t(),e(75,"). "),t()()(),n(76,"div",7)(77,"h3",8),e(78,"3) Arrow Function"),t(),n(79,"ul",6)(80,"li"),e(81,"Arrow functions do "),n(82,"strong"),e(83,"not"),t(),e(84," get their own "),n(85,"code"),e(86,"this"),t(),e(87,"."),t(),n(88,"li"),e(89,"They inherit "),n(90,"code"),e(91,"this"),t(),e(92," from the parent scope."),t()()(),n(93,"div",7)(94,"h3",8),e(95,"4) Event Listener"),t(),n(96,"ul",6)(97,"li"),e(98," When a function is called as an event listener, "),n(99,"code"),e(100,"this"),t(),e(101," points to the "),n(102,"strong"),e(103,"DOM element"),t(),e(104," that the handler is attached to. "),t()()()()())},encapsulation:2})};var O=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-primitivevsobject"]],standalone:!1,decls:128,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-text"],[1,"note-code"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Primitive vs Object"),t(),n(4,"p",3),e(5," Understand how primitive values and reference values behave in JavaScript. "),t()(),n(6,"div",4)(7,"h2",5),e(8,"Primitive Types \u2705"),t(),n(9,"ul",6)(10,"li"),e(11,"Primitive values store the "),n(12,"strong"),e(13,"actual value"),t(),e(14,"."),t(),n(15,"li"),e(16,"Copied by "),n(17,"strong"),e(18,"value"),t(),e(19,"."),t(),n(20,"li"),e(21,"Immutable (value itself cannot be changed, only replaced)."),t()(),n(22,"p",7)(23,"strong"),e(24,"Examples:"),t()(),n(25,"ul",6)(26,"li")(27,"code"),e(28,"Number"),t()(),n(29,"li")(30,"code"),e(31,"String"),t()(),n(32,"li")(33,"code"),e(34,"Boolean"),t()(),n(35,"li")(36,"code"),e(37,"Undefined"),t()(),n(38,"li")(39,"code"),e(40,"Null"),t()(),n(41,"li")(42,"code"),e(43,"BigInt"),t()(),n(44,"li")(45,"code"),e(46,"Symbol"),t()()(),n(47,"pre",8)(48,"code"),e(49,`let age = 24;
let oldAge = age;

age = 25;

console.log(age);     // 25
console.log(oldAge);  // 24 \u2705 oldAge not affected`),t()()(),n(50,"div",4)(51,"h2",5),e(52,"Reference Types (Objects) \u2705"),t(),n(53,"ul",6)(54,"li"),e(55,"Objects store a "),n(56,"strong"),e(57,"reference (address)"),t(),e(58," in memory."),t(),n(59,"li"),e(60,"Copied by "),n(61,"strong"),e(62,"reference"),t(),e(63," (not by value)."),t(),n(64,"li"),e(65,"If you change one, the other also changes (same reference)."),t()(),n(66,"pre",8)(67,"code"),e(68,`const me = {
  name: "Tom",
  age: 24
};

const friend = me;

friend.age = 25;

console.log(me.age);      // 25 \u2705 changed
console.log(friend.age);  // 25`),t()()(),n(69,"div",4)(70,"h2",5),e(71,"Stack vs Heap (Concept)"),t(),n(72,"ul",6)(73,"li")(74,"strong"),e(75,"Stack"),t(),e(76," stores primitive values and references."),t(),n(77,"li")(78,"strong"),e(79,"Heap"),t(),e(80," stores the actual object data."),t(),n(81,"li"),e(82," For objects, the variable points to the object in heap using a reference. "),t()()(),n(83,"div",4)(84,"h2",5),e(85,"Fix: Copy an Object \u2705 (Shallow Copy)"),t(),n(86,"p",7),e(87," If you want to copy an object without affecting the original object, create a new object using spread operator or "),n(88,"code"),e(89,"Object.assign()"),t(),e(90,". "),t(),n(91,"pre",8)(92,"code"),e(93,`// Using spread operator
const me = {
  name: "Tom",
  age: 24
};

const copy = { ...me };
copy.age = 30;

console.log(me.age);   // 24 \u2705 not changed
console.log(copy.age); // 30`),t()(),n(94,"pre",8)(95,"code"),e(96,`// Using Object.assign()
const me2 = {
  name: "Tom",
  age: 24
};

const copy2 = Object.assign({}, me2);
copy2.name = "Sam";

console.log(me2.name);   // Tom \u2705
console.log(copy2.name); // Sam`),t()()(),n(97,"div",4)(98,"h2",5),e(99,"\u26A0\uFE0F Shallow Copy Limitation (Nested Objects)"),t(),n(100,"p",7),e(101," Spread / Object.assign creates only a "),n(102,"strong"),e(103,"shallow copy"),t(),e(104,". Nested objects/arrays still share the same reference. "),t(),n(105,"pre",8)(106,"code"),e(107,`const user = {
  name: "Tom",
  skills: ["JS", "Angular"]
};

const userCopy = { ...user };

userCopy.skills.push("React");

console.log(user.skills);     // ["JS","Angular","React"] \u274C affected
console.log(userCopy.skills); // ["JS","Angular","React"]`),t()()(),n(108,"div",4)(109,"h2",5),e(110,"\u2705 Summary"),t(),n(111,"ul",6)(112,"li")(113,"strong"),e(114,"Primitive"),t(),e(115," \u2192 copied by value \u2705"),t(),n(116,"li")(117,"strong"),e(118,"Object"),t(),e(119," \u2192 copied by reference \u2705"),t(),n(120,"li")(121,"strong"),e(122,"Shallow Copy"),t(),e(123," works only for top-level properties \u2705"),t(),n(124,"li")(125,"strong"),e(126,"Nested objects"),t(),e(127," need deep copy methods \u26A0\uFE0F"),t()()()())},encapsulation:2})};var P=class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=a({type:o,selectors:[["app-js-arrowfunction"]],standalone:!1,decls:109,vars:0,consts:[[1,"note-section"],[1,"note-header"],[1,"note-title"],[1,"note-subtitle"],[1,"note-card"],[1,"note-heading"],[1,"note-list"],[1,"note-code"],[1,"note-text"]],template:function(i,s){i&1&&(n(0,"section",0)(1,"header",1)(2,"h1",2),e(3,"Regular & Arrow Function"),t(),n(4,"p",3),e(5," Arrow functions do not have their own "),n(6,"code"),e(7,"this"),t(),e(8," and behave differently from regular functions. "),t()(),n(9,"div",4)(10,"h2",5),e(11,"Arrow Function and "),n(12,"code"),e(13,"this"),t()(),n(14,"ul",6)(15,"li"),e(16," Arrow function does "),n(17,"strong"),e(18,"not"),t(),e(19," get its own "),n(20,"code"),e(21,"this"),t(),e(22,". "),t(),n(23,"li"),e(24," It uses "),n(25,"code"),e(26,"this"),t(),e(27," from its surrounding scope (parent scope). "),t(),n(28,"li"),e(29," If arrow function is used inside an object method, parent scope could be the global scope \u2192 wrong "),n(30,"code"),e(31,"this"),t(),e(32,". "),t()(),n(33,"pre",7)(34,"code"),e(35,`const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(\`Hey \${this.firstName}\`)
};

jonas.greet();`),t()(),n(36,"p",8),e(37," \u2705 This is an "),n(38,"strong"),e(39,"object literal"),t(),e(40," (a way of defining objects directly). "),t()(),n(41,"div",4)(42,"h2",5),e(43,"\u274C Never use an Arrow Function as a Method"),t(),n(44,"pre",7)(45,"code"),e(46,`// Never use a arrow function as a method
var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(\`Hey \${this.firstName}\`)
};

jonas.greet();`),t()(),n(47,"p",8),e(48," The arrow function does not bind "),n(49,"code"),e(50,"this"),t(),e(51," to the object. It tries to use global "),n(52,"code"),e(53,"this"),t(),e(54," (so it can print wrong name). "),t()(),n(55,"div",4)(56,"h2",5),e(57,"\u2705 Correct Way (Regular Method)"),t(),n(58,"pre",7)(59,"code"),e(60,`var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: function () {
    console.log(\`Hey \${this.firstName}\`);
  }
};

jonas.greet();`),t()()(),n(61,"div",4)(62,"h2",5),e(63,"Function inside a Method (Problem)"),t(),n(64,"p",8),e(65," Inside a regular function call, "),n(66,"code"),e(67,"this"),t(),e(68," becomes "),n(69,"code"),e(70,"undefined"),t(),e(71," in strict mode. "),t(),n(72,"pre",7)(73,"code"),e(74,`const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillennial = function () {
      // here this is undefined in strict mode
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  }
};

jonas.calcAge();

// Output: Cannot read property 'year' of undefined`),t()()(),n(75,"div",4)(76,"h2",5),e(77,"Fix 1: Before ES6 (self = this)"),t(),n(78,"pre",7)(79,"code"),e(80,`const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this; // \u2705 store this in a variable

    const isMillennial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillennial();
  }
};

jonas.calcAge();

// Output: true`),t()()(),n(81,"div",4)(82,"h2",5),e(83,"Fix 2: ES6 (Arrow Function)"),t(),n(84,"p",8),e(85," Arrow function inherits "),n(86,"code"),e(87,"this"),t(),e(88," from parent scope (method scope), so it works properly. "),t(),n(89,"pre",7)(90,"code"),e(91,`const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  }
};

jonas.calcAge();

// Output: true`),t()()(),n(92,"div",4)(93,"h2",5),e(94,"Arguments Keyword"),t(),n(95,"ul",6)(96,"li"),e(97," The "),n(98,"code"),e(99,"arguments"),t(),e(100," keyword is only available in "),n(101,"strong"),e(102,"regular functions"),t(),e(103,". "),t(),n(104,"li"),e(105," It helps when a function receives more arguments than defined parameters. "),t()(),n(106,"pre",7)(107,"code"),e(108,`const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 3, 4);

// Output: arguments(2) [2, 5]
// Output: arguments(4) [2, 5, 3, 4]`),t()()()())},encapsulation:2})};var te=[{path:"",component:x,children:[{path:"",pathMatch:"full",redirectTo:"intro"},{path:"intro",component:f},{path:"comments",component:E},{path:"variables",component:S},{path:"datatypes",component:h},{path:"operators",component:g},{path:"conditionals",component:v},{path:"loops",component:y},{path:"functions",component:b},{path:"array",component:w},{path:"objects",component:j},{path:"template-literals",component:J},{path:"conversion-coercion",component:C},{path:"truthy-falsy",component:N},{path:"equality-operator",component:k},{path:"statements-expressions",component:T},{path:"prompt",component:A},{path:"if-else",component:D},{path:"switch",component:I},{path:"what-is-js",component:M},{path:"this-keyword",component:F},{path:"primitive-vs-object",component:O},{path:"arrow-function",component:P}]}],L=class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=p({type:o});static \u0275inj=c({imports:[W.forChild(te),W]})};var K=class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=p({type:o});static \u0275inj=c({imports:[V,L]})};export{K as JavascriptModule};
