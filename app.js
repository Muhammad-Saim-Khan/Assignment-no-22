function display(value) {
  document.getElementById("result").value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function root() {
  var inputNum1 = document.getElementById("result").value;
  var result = Math.sqrt(inputNum1);
  document.getElementById("result").value = result;
}

function Back() {
  var back = document.getElementById("result");
  back.value = back.value.slice(0, -1);
}

function calculate() {
  var value1 = document.getElementById("result").value;
  var operator = value1.includes("+")
    ? "+"
    : value1.includes("-")
    ? "-"
    : value1.includes("*")
    ? "*"
    : value1.includes("/")
    ? "/"
    : value1.includes("%")
    ? "%"
    : null;

  if (operator === null) {
    return;
  }

  var operands = value1.split(operator);
  var num1 = parseFloat(operands[0]);
  var num2 = parseFloat(operands[1]);

  var result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "%") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      document.getElementById("result").value = "wrong value";
      return;
    }
    result = num1 / num2;
  }

  document.getElementById("result").value = result;
}
