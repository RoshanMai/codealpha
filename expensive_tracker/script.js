function editExpense(id) {
    const expenseToEdit = expenses.find(expense => expense.id === id);
  
    document.getElementById('expense-type').value = expenseToEdit.type;
    document.getElementById('expense-name').value = expenseToEdit.name;
    document.getElementById('expense-amount').value = expenseToEdit.amount;
  
    // Assuming there's a hidden input field for the expense ID
    document.getElementById('expense-id').value = expenseToEdit.id;
  }
  
  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const expenseId = parseInt(document.getElementById('expense-id').value);
    const expenseType = document.getElementById('expense-type').value;
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
  
    const editedExpense = {
      id: expenseId,
      type: expenseType,
      name: expenseName,
      amount: expenseAmount
    };
  
    // Find the index of the expense to edit
    const expenseIndex = expenses.findIndex(expense => expense.id === expenseId);
    // Replace the old expense with the edited one
    expenses[expenseIndex] = editedExpense;
    // Update localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
  
    // Re-render expenses
    renderExpenses();
  
    // Reset the form
    expenseForm.reset();
  });
  