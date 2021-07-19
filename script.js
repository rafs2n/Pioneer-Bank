const trxArea = document.getElementById('transaction-area');
trxArea.style.display = 'none';
const invalidFeed = document.getElementById('invalid');
invalidFeed.style.display = 'none';

const btnClick = document.getElementById('login');
btnClick.addEventListener('click', function () {
    const user = document.getElementById('usr').value;
    const pass = document.getElementById('pwd').value;
    if (user !== "" && pass !== "") {
        const loginArea = document.getElementById('login-area');
        invalidFeed.style.display = 'none';
        loginArea.style.display = 'none';
        trxArea.style.display = 'block';
    }
    else {
        invalidFeed.style.display = 'block';
    }
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
    if (depositAmount > 0 && depositAmount !== "") {
        // Total Deposit Update
        replaceSpan('current-deposit', depositAmount);

        // Total Balance update
        replaceSpan('old-balance', depositAmount);
    }
    else {
        alert('Please enter a valid amount!');
    }


})

// Keyboard Event for deposit

document.getElementById('deposit-amount').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
        document.getElementById('deposit-amount').value = "";
        if (depositAmount > 0 && depositAmount !== "") {
            // Total Deposit Update
            replaceSpan('current-deposit', depositAmount);

            // Total Balance update
            replaceSpan('old-balance', depositAmount);
        }
        else {
            alert('Please enter a valid amount!');
        }
    }
})


// Withdraw event handler

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {

    const newWithdraw = parseFloat(document.getElementById('withdraw-amount').value);
    document.getElementById('withdraw-amount').value = "";

    if (newWithdraw > 0 && newWithdraw !== "") {
        replaceSpan('withdraw', newWithdraw)

        const oldBalance = parseFloat(document.getElementById('old-balance').innerText);
        const newBalance = oldBalance - newWithdraw;
        document.getElementById('old-balance').innerText = newBalance;
    }
    else {
        alert('Please enter a valid amount!');
    }

})

// Keyboard Event for withdraw
document.getElementById('withdraw-amount').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const newWithdraw = parseFloat(document.getElementById('withdraw-amount').value);
        document.getElementById('withdraw-amount').value = "";
        if (newWithdraw > 0 && newWithdraw !== "") {
            replaceSpan('withdraw', newWithdraw)

            const oldBalance = parseFloat(document.getElementById('old-balance').innerText);
            const newBalance = oldBalance - newWithdraw;
            document.getElementById('old-balance').innerText = newBalance;
        }
        else {
            alert('Please enter a valid amount!');
        }
    }
})