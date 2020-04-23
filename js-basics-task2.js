function firstFun(x) {
  let y = 2 * x + 4;
  return y;
}

function secondFun(x) {
  let y = x ^ 2;
  return y;
}

function thirdFun(x) {

  let y = firstFun(secondFun(x));
  return y;

}

function convertToNumber(num1, num2, num3) {
  let convert1 = Number(num1);
  let convert2 = Number(num2);
  let convert3 = Number(num3);
  const sum = convert1 + convert2 + convert3;

  return sum;
}

// creating a new function for arg4 to give me the 
// right result to use it in the performConsole function
function convertToNumberN(x) {
  let number = Number(x);
  return number;
}

function performConsole(arg1, arg2, arg3, arg4) {
  console.log('arg1: ' + firstFun(arg1));
  console.log('arg2: ' + secondFun(arg2));
  console.log('arg3: ' + thirdFun(arg3));
  console.log('arg4: ' + convertToNumberN(arg4));

}


function mathFunc(a, b) {
  return function (x) {
    let y = a * x + b;
    return y;
  }
}
//testing the mathFunc
// const generate = mathFunc(4, 6);
// console.log(generate(5));
