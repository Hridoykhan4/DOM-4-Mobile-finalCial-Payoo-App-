document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    showASection("add-money-form");
    removeAllBg()
    document.getElementById('btn-show-add-money').classList.remove('btn-ghost')
    document.getElementById('btn-show-add-money').classList.add('btn-primary')
    document.getElementById('btn-show-add-money').classList.remove('text-black')
    document.getElementById('btn-show-add-money').classList.add('text-white')

  });

document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    showASection("cash-out-form");
    removeAllBg()
    document.getElementById('btn-show-cash-out').classList.remove('btn-ghost')
    document.getElementById('btn-show-cash-out').classList.add('btn-primary')
    document.getElementById('btn-show-cash-out').classList.remove('text-black')
    document.getElementById('btn-show-cash-out').classList.add('text-white')


  });

document
  .getElementById("btn-show-transaction")
  .addEventListener("click", function () {
    showASection("transaction-section");
    removeAllBg()
    document.getElementById('btn-show-transaction').classList.remove('btn-ghost')
    document.getElementById('btn-show-transaction').classList.add('btn-primary')
    document.getElementById('btn-show-transaction').classList.remove('text-black')
    document.getElementById('btn-show-transaction').classList.add('text-white')


  });
