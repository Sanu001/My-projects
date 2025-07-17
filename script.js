const form = document.getElementById('expense-form'); 
const expenseName = document.getElementById('expense-name'); 
const expenseAmount = document.getElementById('expense-amount'); 
const expenseList = document.getElementById('expense-list'); 
const totalAmount = document.getElementById('total-amount'); 
let total = 0; 
form.addEventListener('submit', function(e) { 
e.preventDefault(); 
const name = expenseName.value.trim(); 
const amount = parseFloat(expenseAmount.value); 
if (name === '' || isNaN(amount) || amount <= 0) { 
alert('Please enter a valid name and amount.'); 
return; 
} 
const li = document.createElement('li'); 
li.innerHTML = `${name} - $${amount.toFixed(2)} <button onclick="removeExpense(this, 
${amount})">X</button>`; 
expenseList.appendChild(li); 
total += amount; 
totalAmount.textContent = total.toFixed(2); 
expenseName.value = ''; 
expenseAmount.value = ''; 
}); 
function removeExpense(button, amount) { 
total -= amount; 
totalAmount.textContent = total.toFixed(2); 
button.parentElement.remove(); 
}