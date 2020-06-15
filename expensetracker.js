let myAccount = {
	name: "Katelyn Dever",
	expenses: 0,
	income: 0
}

let addExpense = function (account, amount) {
	account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function (account, amount) {
	account.income = account.income + amount
}

// resetAccount
let resetAccount = function (account) {
	account.expenses = 0
	account.income = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
	let balance = account.income - account.expenses
	return `Account for ${account.name} has $${balance}.  $${account.income} in income and ${account.expenses} in expenses`
}

addExpense(myAccount, 2.50)
addIncome(myAccount, 500)
addExpense(myAccount, 2.50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))