var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  if (ip === "" || curr === "" || qty === "")
    outputBox.innerText = "All the 3 fields should be valid numbers";
  else if (Number(ip) <= 0 || Number(curr) <= 0 || Number(qty) <= 0)
    outputBox.innerText = "All the fields should be greater than 0";
  else calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = ((initial - current) / initial) * 100;

    showOutput(
      `Hey loss is ${loss} and the percent is ${lossPercentage.toFixed(
        2
      )}% 😥😥😥`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = ((current - initial) / initial) * 100;
    showOutput(
      `Hey profit is ${profit} and the percent is ${profitPercentage.toFixed(
        2
      )}%🥳🥳🥳`
    );
  } else {
    showOutput("No pain no gain and no gain no pain😐😐😐");
  }
}
function showOutput(message) {
  outputBox.innerHTML = message;
}
submitBtn.addEventListener("click", submitHandler);
