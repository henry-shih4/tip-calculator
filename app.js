let percentageTip = document.getElementById("percent");
let percentDisplay = document.getElementById("percent-display");
percentDisplay.innerHTML = `${percentageTip.value}%`;
let cost = document.getElementById("cost").value;
let costInput = document.getElementById("cost");
let tip = document.getElementById("tip-value");
let bill = document.getElementById("bill-value");
let clearBtn = document.getElementById("clear-btn");

percentageTip.addEventListener("input", function () {
  let cost = parseFloat(document.getElementById("cost").value);
  let percentNum = this.value;
  let tipNum = cost * (percentNum / 100);
  let total = cost + tipNum;
  if (isNaN(tipNum)) {
    errorMsg();
  } else {
    percentDisplay.innerHTML = `${percentNum}%`;
    tip.innerHTML = `$${tipNum.toFixed(2)}`;
    bill.innerHTML = `$${total.toFixed(2)}`;
  }
});

costInput.addEventListener("input", function () {
  let pattern = /[a-z]/i;
  let cost = parseFloat(document.getElementById("cost").value);
  if (pattern.test(cost)) {
    errorMsg();
    clearValues();
  } else {
    let percentNum = percentageTip.value;
    let tipNum = cost * (percentNum / 100);
    let total = cost + tipNum;
    percentDisplay.innerHTML = `${percentNum}%`;
    tip.innerHTML = `$${tipNum.toFixed(2)}`;
    bill.innerHTML = `$${total.toFixed(2)}`;
  }
});

clearBtn.addEventListener("click", clearValues);

function clearValues() {
  costInput.value = "";
  percentageTip.value = "10";
  percentDisplay.innerHTML = `${percentageTip.value}%`;
  tip.innerHTML = "0$";
  bill.innerHTML = "0$";
  console.log("reset fields");
}

function errorMsg() {
  alert("Please enter a number!");
}
