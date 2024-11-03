/* 
Add event handler
prevent page load
get money to be added to the balance
*/


document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // Get The Pin Number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
});