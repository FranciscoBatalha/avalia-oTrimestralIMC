respostas = []

function limpar() {
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
}

function calcularIMC(){
peso = document.getElementById("peso").value
altura = document.getElementById("altura").value
imc = document.getElementById("imc").value

if (peso == '' || altura == ''){
    alert("Preencha os campos corretamente!")
} else {
    calculo = (peso/altura**2).toFixed(2)

    document.getElementById('imc').value = calculo

    respostas.push(calculo)
}
console.log(respostas);
}