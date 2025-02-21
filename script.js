const label = document.getElementById("box");

function getnum(maxNum, minNum) {
    return Math.floor(Math.random() * (maxNum- minNum + 1) + minNum)
}

const answers = ["Si", "No", "Tal vez", "Puede ser", "Si y no",
     "No deberia", "No lo se", "Tu ta loco/a", "Oye ahora", "Decansaaa"];

function getAnswer() {
    label.textContent = answers[getnum(answers.length - 1, 0)];
}