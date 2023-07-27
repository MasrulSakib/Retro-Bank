document.getElementById('btn-Depo').addEventListener('click', function () {

    const deposit = document.getElementById('deposit-field');
    const prevDepositValueStr = deposit.value;
    const prevDepositValue = parseFloat(prevDepositValueStr);

    deposit.value = '';

    if (isNaN(prevDepositValue)) {
        alert('Please provide a valid number')
        return;
    }



    const depositText = document.getElementById('deposit-text');
    const newDepositTotalStr = depositText.innerText;
    const newDepositTotal = parseFloat(newDepositTotalStr);

    const currentDepositTotal = newDepositTotal + prevDepositValue;
    depositText.innerText = currentDepositTotal;

    const balance = document.getElementById('balance-text');
    const prevBalanceTotalStr = balance.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalStr);
    const newBalanceTotal = prevBalanceTotal + prevDepositValue;

    balance.innerText = newBalanceTotal;





})