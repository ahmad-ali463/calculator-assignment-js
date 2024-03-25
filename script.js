let result = document.getElementById("inputText");

// =========================       Clear      =======================
const clr = () => {
    result.value = "";
}
// =========================       Delete      =======================

const del = () => {
    result.value = result.value.slice(0 , -1)
}


let Result = () => {
    try{
         result.value = eval(result.value)
    }
    catch(err){
        alert('Please Enter valid Input')
        return
    }
}


// =========================       numbers      =======================
let calculate = (number) => {
    result.value += number
}