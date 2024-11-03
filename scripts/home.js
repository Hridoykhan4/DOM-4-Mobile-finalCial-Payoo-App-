/* 
Add event handler
prevent page load
get money to be added to the balance
get the pin
Verify pin
*/


document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()

    const addMoneyInput = document.getElementById('input-add-money').value;
    

    // Get The Pin Number
    const pinNumberInput = document.getElementById('input-pin-number').value;
 
    // Verify Pin Number
    if(pinNumberInput === '1234'){

        // Step 4 Get the Current Balance
        const balance = document.getElementById('account-balance').innerText;

        
        // Step 5 Add addmoneyInput with main balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + balanceNumber
       
        // Step 6 Update the balance in UI
        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('Please Try Again')
    }

});