// alert("Hello World!");

function gomb() {
    document.getElementById("output").innerHTML = "Hello World!";

}

function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

