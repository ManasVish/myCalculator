let inputBtn = document.querySelectorAll("#input-keys button");
let opBtn = document.querySelectorAll("#operation button");
let btn = document.querySelectorAll("button");
let output = document.querySelector("#output");
let num1, num2;
let strSet = "";
let result;

let format = "=>";

for (let i of btn) {
  let store;

  i.addEventListener("click", () => {
    output.innerText = output.innerText + i.innerText;
    store = store + parseInt(i.innerText);
    console.log(parseInt(i.innerText));
    if (i.innerText == "=") {
      num2 = parseInt(output.innerText);
      console.log("number 1 = ", num1, "Number 2 = ", num2);
      if (strSet == "sum") {
        result = num1 + num2;
        output.innerText = format + result;
      } else if (strSet === "minus") {
        result = num1 - num2;
        output.innerText = format + result;
      } else if (strSet === "multiply") {
        result = num1 * num2;
        output.innerText = format + result;
      } else if (strSet === "divide") {
        result = num1 / num2;
        output.innerText = format + result;
      }
      setTimeout(()=>{
        output.innerText = "";
      },2000);
    }
    if (i.innerText == "+") {
      num1 = parseInt(output.innerText);
      strSet = "sum";
      output.innerText = "";
    } else if (i.innerText == "-") {
      num1 = parseInt(output.innerText);
      strSet = "minus";
      output.innerText = "";
    } else if (i.innerText == "*") {
      num1 = parseInt(output.innerText);
      strSet = "multiply";
      output.innerText = "";
    } else if (i.innerText == "/") {
      num1 = parseInt(output.innerText);
      strSet = "divide";
      output.innerText = "";
    } else if (i.innerText == "CL") {
      output.innerText = "";
    }
  });
}
