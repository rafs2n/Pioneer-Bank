const trxArea = document.getElementById('transaction-area');
trxArea.style.display = 'none'

const btnClick = document.getElementById('login');
btnClick.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    trxArea.style.display = 'block';
})

function replaceSpan(id, depositAmount) {
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    const totalBalance = depositAmount + currentBalance;
    document.getElementById(id).innerText = totalBalance;
}

// Deposit event handler

const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function () {

    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    document.getElementById('deposit-amount').value = "";

    // Total Deposit Update
    replaceSpan('current-deposit', depositAmount);

    // Total Balance update
    replaceSpan('old-balance', depositAmount);
})

// Keyboard Event for deposit
document.getElementById('deposit-amount').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
        document.getElementById('deposit-amount').value = "";

        // Total Deposit Update
        replaceSpan('current-deposit', depositAmount);

        // Total Balance update
        replaceSpan('old-balance', depositAmount);
    }
})




// Withdraw event handler

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {

    const newWithdraw = parseFloat(document.getElementById('withdraw-amount').value);
    document.getElementById('withdraw-amount').value = "";

    replaceSpan('withdraw', newWithdraw)

    const oldBalance = parseFloat(document.getElementById('old-balance').innerText);
    const newBalance = oldBalance - newWithdraw;
    document.getElementById('old-balance').innerText = newBalance;
})

// Keyboard Event for withdraw
document.getElementById('withdraw-amount').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const newWithdraw = parseFloat(document.getElementById('withdraw-amount').value);
        document.getElementById('withdraw-amount').value = "";

        replaceSpan('withdraw', newWithdraw)

        const oldBalance = parseFloat(document.getElementById('old-balance').innerText);
        const newBalance = oldBalance - newWithdraw;
        document.getElementById('old-balance').innerText = newBalance;
    }
})