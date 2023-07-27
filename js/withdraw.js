document.getElementById('btn-With').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueStr = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueStr);

    withdrawField.value = '';
    if (isNaN(withdrawValue)) {
        alert('Please provide a valid number')
        return;
    }

    const withdrawText = document.getElementById('withdraw-text');
    const withdrawTotalStr = withdrawText.innerText;
    const withdrawTotal = parseFloat(withdrawTotalStr);

    const balance = document.getElementById('balance-text');
    const prevBalanceTotalStr = balance.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalStr);

    if (withdrawValue > prevBalanceTotal) {
        alert('You can not withdraw more money than your balance')

        return;
    }


    const currentWithdrawTotal = withdrawTotal + withdrawValue;
    withdrawText.innerText = currentWithdrawTotal;

    const newBalanceTotal = prevBalanceTotal - withdrawValue;
    balance.innerText = newBalanceTotal;


})