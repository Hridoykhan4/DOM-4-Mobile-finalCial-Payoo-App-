document.getElementById("btn-transfer").addEventListener("click", (e) => {
  e.preventDefault();
  const inputAmount = getInputFieldValueById("input-transfer-amount");
  const pinNumber = getInputFieldValueById("input-transfer-pin");

  if (isNaN(inputAmount)) {
    return alert("Masodai No goris");
  }

  if (pinNumber === 1234) {
    const balance = getTextFieldValueById("account-balance");
    if (balance < inputAmount) {
      return alert(`You don't have enough money to transfer`);
    }

    const newBalance = balance - inputAmount;
    setElementById("account-balance", newBalance);

    const p = document.createElement("p");
    p.className = "bg-gray-600 text-white font-medium rounded-lg p-3";
    p.innerHTML = `
    ${inputAmount} Tk is sent... New Balance ${newBalance}
    `;
    document.getElementById("transaction-container").appendChild(p);
    document.getElementById("input-transfer-amount").value = "";
    document.getElementById("input-transfer-pin").value = "";
  }
});

/* 

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

      document.getElementById("input-cash-out-pin").value = "";
      document.getElementById("input-cash-out").value = "";
    } else {
      alert("Please Try Again");
    }
  });

document.getElementById("deleteAll").addEventListener("click", () => {
  document.getElementById("transaction-container").innerHTML = `
      <p class="text-2xl mt-4 ">History Cleared</p>
      `;
});

*/
