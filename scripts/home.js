/* 
Add event handler
prevent page load
get money to be added to the balance
get the pin
Verify pin
*/

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();



    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");


    if(isNaN(addMoney)){
        alert('Failed To Add Money');
        return;
    }


    // Verify Pin Number
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      const newBalance = addMoney + balance;

    setElementById('account-balance', newBalance);
    
    // Add To Transaction History
    const p = document.createElement('p');
    p.innerText = `
    Added : ${addMoney} Tk. New Balance: ${newBalance};
    `
    console.log(p)

    // Should Be a common Function
    document.getElementById('transaction-container').appendChild(p);


    } else {
      alert("Please Try Again");
    }
  });

