function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        getPin();
    }
};
function generatePin() {
    let pin = getPin();
    const dis = document.getElementById('display-pin');
    dis.value = pin;
};
document.getElementById('calc-digits').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayer = document.getElementById('display');
    if (isNaN(number)) {
        if (number == 'C') {
            displayer.value = '';
        }
    }
    else {
        const preDisplay = displayer.value;
        displayer.value = preDisplay + number;
    }
});
function verify() {
    const generatedValue = document.getElementById('display-pin').value;
    const typedValue = document.getElementById('display').value;
    const pinMatch = document.getElementById('pin-matched');
    const pinUnmatch = document.getElementById('pin-unmatched');
    if (generatedValue == typedValue) {

        pinMatch.style.display = "block";
        pinUnmatch.style.display = "none";
    }
    else {
        pinMatch.style.display = "none";
        pinUnmatch.style.display = "block";
    }
};
