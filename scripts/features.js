// Show the Cashout Section
/* document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });

document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });
 */

  document.getElementById('btn-show-add-money').addEventListener('click', function(){
       showASection('add-money-form');
  })

  document.getElementById('btn-show-cash-out').addEventListener('click', function(){
       showASection('cash-out-form');
  })

  

  document.getElementById('btn-show-transaction').addEventListener('click', function(){
       showASection('transaction-section');
  })

  