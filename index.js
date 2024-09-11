let person={
    name:"jack",
    mark:700
}
console.log(person)
person.mark=800
person["name"]="rose"
console.log(person)
console.log(Object.keys(person))
console.log(Object.entries(person))
let colors = ["red","blue"];
colors[1]="yellow";
console.log(colors);

colors.push("green");
console.log(colors);
colors.pop()
console.log(colors);

colors.shift()
console.log(colors);
colors.unshift("black");
console.log(colors);
console.log(colors.length);

function greet(params){
    console.log('function greet')
}

function sum(a,b){
    return a + b;
}

greet();
let result = sum(1, 2);
console.log(result)

console.log(sum(2,5));
// let input = prompt("Enter input");

// input=parseInt(input)
// alert(typeof input);



let input1 = prompt("enter input1");
let input2 = prompt("enter input2");
let input3 = prompt("enter input3");
input1 = parseInt(input1);
input2 = parseInt(input2);
switch (input3) {
  case "+":
    alert(input1 + input2);
    break;
  case "-":
    alert(input1 - input2);
    break;
  case "*":
    alert(input1 * input2);
    break;
  case "/":
    alert(input1 / input2);
    break;
  case "%":
    alert(input1 % input2);
    break;
  default:
}

const laptop = {
  brand: "vignan",
  processor: "it",
  price: 2600000,
  os: "R22",
};
for (let k in laptop) {
  console.log(k);
  console.log(the key is ${k} and value is ${laptop[k]});
}