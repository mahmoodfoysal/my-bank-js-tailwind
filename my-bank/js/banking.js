// handle deposite button event 
document.getElementById('deposite-button').addEventListener('click', function(){
    // console.log('Deposite button clicked');
    // get the amount deposited 
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value
    const newdepositeAmount = parseFloat(newDepositeAmountText);
    const depositeTotal =document.getElementById('deposite-total');
    const previousDepositetext = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositetext);
    const newDepositeTotal = previousDepositeAmount+ newdepositeAmount; 
    depositeTotal.innerText = newDepositeTotal;



    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal+newdepositeAmount;
    balanceTotal.innerText=newBalanceTotal;
    // clear the input field
    depositeInput.value = '';
});

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // clear withdraw input
    withdrawInput.value = '';


    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

})