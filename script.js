const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPercentage = Number(tipInput.value) / 100
    const tipAmount = bill*tipPercentage
    const total = tipAmount + bill
    const perPersonTotal = total / numberOfPeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

const decreasePeople = () => {
    // this is a gaurd clause i.e. it stops the further line of codes if the condition is true
    if (numberOfPeople <= 1) {
        return
    }

    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}