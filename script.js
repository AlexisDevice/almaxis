const label = document.getElementById("box");
var count = 0;

function getnum(maxNum, minNum) {
    return Math.floor(Math.random() * (maxNum- minNum + 1) + minNum)
}

const answers = ["Si", "No", "Tal vez", "Puede ser", "Si y no",
     "No deberia", "No lo se"];

function getAnswer() {
    count++;
    label.textContent = `${count}. ` + answers[getnum(answers.length - 1, 0)];
}