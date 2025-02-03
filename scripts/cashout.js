document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById("input-cash-out");

    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    if (isNaN(cashOut)) {
      alert("Failed to CashOut");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      if (balance < cashOut) {
        alert("You Do not have enough money to cash-out");
        return;
      }

      const newBalance = balance - cashOut;

      setElementById("account-balance", newBalance);

      // Add To Transaction History
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
        <h4 class='text-2xl font-bold'>Cash Out</h4>
        <p>${cashOut} TK withdraw. New Balance ${newBalance}</p>
        `;
      document.getElementById("transaction-container").appendChild(div);

      document.getElementById('input-cash-out-pin').value = '';
      document.getElementById('input-cash-out').value = '';
    } else {
      alert("Please Try Again");
    }
  });


    document.getElementById('deleteAll').addEventListener('click', () => {
      document.getElementById('transaction-container').innerHTML = `
      <p class="text-2xl mt-4 ">History Cleared</p>
      `
    })
