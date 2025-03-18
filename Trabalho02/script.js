function limpar(){
    document.getElementById('display').innerText = "";
}

function insert(num){
    if(document.getElementById('display').innerText == "Hello World"){
        limpar();
    }
    var numero = document.getElementById('display').innerText;
    document.getElementById('display').innerText = numero + num;
}

function apagar(){
    var resultado = document.getElementById('display').innerText;
    document.getElementById('display').innerText = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('display').innerText;

    if (resultado) {
        limpar();


        if (resultado.includes("+")) {
            document.getElementById('display').innerText = soma(resultado);
        } else if (resultado.includes("-") && !resultado.startsWith("-")) {
            document.getElementById('display').innerText = subtracao(resultado);
        } else if (resultado.includes("*")) {
            document.getElementById('display').innerText = multiplicacao(resultado);
        } else if (resultado.includes("/")) {
            document.getElementById('display').innerText = divisao(resultado);
        } else {
            document.getElementById('display').innerText = "Erro!";
        }
    }
}
function soma(exp) {
    var valores = exp.split("+").map(Number);
    return parseFloat((valores[0] + valores[1]).toFixed(1));
}

function subtracao(exp) {
    var valores = exp.split("-").map(Number);
    return valores[0] - valores[1];
}

function multiplicacao(exp) {
    var valores = exp.split("*").map(Number);
    return valores[0] * valores[1];
}

function divisao(exp) {
    var valores = exp.split("/").map(Number);
    return valores[1] !== 0 ? (valores[0] / valores[1]) : "Erro!";
}