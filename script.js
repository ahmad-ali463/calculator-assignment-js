// let result = document.getElementById("inputText");

// // =========================       Clear      =======================
// const clr = () => {
//     result.value = "";
// }
// // =========================       Delete      =======================

// const del = () => {
//     result.value = result.value.slice(0 , -1)
// }


// let Result = () => {
//     try{
//          result.value = eval(result.value)
//     }
//     catch(err){
//         alert('Please Enter valid Input')
//         return
//     }
// }


// =========================       numbers      =======================
// let calculate = (number) => {
//     result.value += number
// }
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}