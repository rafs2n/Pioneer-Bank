const trxArea = document.getElementById('transaction-area');
trxArea.style.display = 'block'

const btnClick = document.getElementById('login');
btnClick.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    trxArea.style.display = 'block';
})

// Deposit event handler

const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function () {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    document.getElementById('deposit-amount').value = "";
    const currentDeposit = parseFloat(document.getElementById('current-deposit').innerText);
    const totalDeposit = depositAmount + currentDeposit;
    document.getElementById('current-deposit').innerText = totalDeposit;

})
