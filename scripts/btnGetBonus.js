document.getElementById('get-bonus').addEventListener('click', function(){
        const couponCodeInput = document.getElementById('secret-code').value;
        if(couponCodeInput === 'love420'){
            const balance = getTextFieldValueById("account-balance");

            const newBalance = balance + 200;
            setElementById('account-balance',newBalance)

            document.getElementById('secret-code').value = '';


            const div = document.createElement("div");
      div.classList.add("bg-red-100");
      div.innerHTML = `
        <h4 class='text-2xl font-bold'>Bonus</h4>
        <p>Congrats!!! <br> You have got 200 TK bonus. New Balance ${newBalance}</p>
        `;
      document.getElementById("transaction-container").appendChild(div);


        }
        else{
            alert("Wrong Code!!!Enter correct coupon")
            return
        }
    })