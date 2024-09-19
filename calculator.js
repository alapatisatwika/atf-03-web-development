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