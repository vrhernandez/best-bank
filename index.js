const accounts = [
    {
        id: 1,
        title: "Main Account",
        balance: "6700.56",
        spendings: [
            {
                category: "Rent",
                spent: "1450"
            },
            {
                category: "Groceries",
                spent: "564"
            },
            {
                category: "Restaurants",
                spent: "123"
            },
            {
                category: "Transport",
                spent: "81"
            },
            {
                category: "Internet",
                spent: "50"
            }
        ]
    },
    {
        id: 2,
        title: "Expenses",
        balance: "5134.63",
        spendings: [
            {
                category: "Netflix",
                spent: "19.99"
            },
            {
                category: "HBO Max",
                spent: "14.99"
            },
            {
                category: "Setapp",
                spent: "9.99"
            }
        ]
    },
    {
        id: 3,
        title: "Savings",
        balance: "36500.12",
        spendings: []
    }
]

const acctsList = document.getElementById("accts-list")
const spendList = document.getElementById("spend-list")

renderAccount()
renderSpendings(0)



function renderAccount() {

    if(accounts.length !== 0) {
        for(let i=0; i<accounts.length; i++) {

            let account = accounts[i]

            acctsList.innerHTML += `
                <div id="${i}" onclick="renderSpendings(${i})" class="account bar dark-border" tabindex="0">
                    <p class="align-left">${account.title}</p>
                    <p class="align-right">$ ${account.balance}</p>
                </div>
            `
        }
    }
    else {
        acctsList.innerHTML += "<p>Nothing to see here...yet :)</p>"
    }
}

function renderSpendings(num) {

    let spendings = accounts[num].spendings
    let topSpend = getTopSpend(spendings)

    spendList.innerHTML = ""

    if(spendings.length !== 0) {

        for(let j=0; j<spendings.length; j++) {
            let spending = spendings[j]
            let barWidth = 40 + (spending.spent/topSpend)*60

            spendList.innerHTML += `
                <div class="spending bar" style="max-width:${barWidth}%;">
                    <p class="align-left">${spending.category}</p>
                    <p class="align-right">$ ${spending.spent}</p>
                </div>
            `
        }
    }
    else {
        spendList.innerHTML += "<p>Nothing to see here...yet :)</p>"
    }
}

function getTopSpend(spendings) {

    let top = 0

    for(let i=0; i<spendings.length; i++) {
        if (top < Number(spendings[i].spent)) {
            top = spendings[i].spent
        }
    }

    return top
}

document.addEventListener("click", function(e) {
    if (e.target.classList[0] === "account") {
        renderSpendings(e.target.id)
    }
})