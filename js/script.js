let conta = document.getElementById('iconta');
let gorgeta = document.getElementById('igorgeta');
let pessoas = document.getElementById('ipessoas');
let resultado = document.getElementById('resultado')

function DivisorDeValores(){
    if(conta.value == 0 || pessoas.value == 0){
        window.alert('[ERRO] - Os campos "total da conta" e "número de pessoas" são obrigatórios') 
    }else{
    let valorDaGorgeta = Number(conta.value) * Number(gorgeta.value) / 100;
    let valorTotal =  Number(valorDaGorgeta) + Number(conta.value) ;    
    let totalPorPessoas = valorTotal / Number(pessoas.value);
    resultado.innerHTML = 'Valor R$'+totalPorPessoas.toFixed(2)+' por pessoa';
    }
}
resultado.style.fontSize = '1.5em';
resultado.style.fontFamily = 'Roboto', sans-serif;