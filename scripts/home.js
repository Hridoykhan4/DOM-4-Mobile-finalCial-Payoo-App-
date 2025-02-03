document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    if (isNaN(addMoney)) {
      alert("Failed To Add Money");
      return;
    }

    // Verify Pin Number
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      const newBalance = addMoney + balance;

      setElementById("account-balance", newBalance);

      const p = document.createElement("p");


      p.className = 'bg-gray-700/20 font-medium text-xl px-3 text-center border-y-2 border'


      /* 
        const history = document.getElementById('transaction-container');
        const p = document.createElement('p');
        p.className = 'bg-gray-700/20 font-medium text-xl px-3 text-center border-y-2 border'

        p.innerHTML = `
        ${cashOutNumber} Tk has withdraw from your account,new balance ${newBalance}
        `
        history.appendChild(p)
      */


      p.innerText = `
    Added: ${addMoney} TK. New Balance : ${newBalance}
    `;
      document.getElementById("transaction-container").appendChild(p);

      document.getElementById("input-add-money").value = "";
      document.getElementById("input-pin-number").value = "";
    } else {
      alert("Please Try Again");
    }
  });
