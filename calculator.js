var buttons = document.getElementsByClassName("button");
var display = document.getElementById("screen");
//  Three operand for performing the operation
var operand1 = null;
var operand2 = null;
var operator = null;

//  Make a comman function to make all calculation
function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

// Handling clicks on the buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // need to store the value of the buttton which is pressed
    var value = this.getAttribute("data-value");

    var text = display.textContent.trim();

    if (isOperator(value)) {
      // to handle whether an operator is clicked
      operator = value;
      operand1 = parseFloat(text);
      display.textContent = "";
    } else if (value == "%") {
      operand1 = parseFloat(text);
      operand1 = operand1 / 100;
      display.textContent = operand1;
    } else if (value == ".") {
      if (text.length && !text.includes(".")) {
        display.textContent = text + ".";
      }
    } else if (value == "Ac") {
      display.textContent = "";
    } else if (value == "sign") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      display.textContent = operand1;
    } else if (value == "=") {
      // Equal to operation.
      operand2 = parseFloat(text);
      // use eval to get result
      // show result on display
      var result = eval(operand1 + " " + operator + " " + operand2);
      //  display=result;
      if (result) {
        display.textContent = result;
        operand1 = result;
        operand2 = null;
        operator = null;
      }
    } else {
      display.innerText += value;
    }
  });
}
