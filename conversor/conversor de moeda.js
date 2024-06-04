

document.getElementById("btcalcular").addEventListener ("click", function(event){
    event.preventDefault()
});

    function converter (){
let de =document.formulario.de.value;
let para = document.formulario.para.value;
let valor = document.formulario.valor.value;
if (valor=="") {
    alert(" Atenção !!  você precisa informar o valor " );
    return false;
}
if (de == para){
    alert("Por favor, informe moedas diferentes!")
    return false
}

if (de == "real" && para == "dolar") resultado = valor /5;
else if (de == "dolar" && para == "real" ) resultado=valor*5;
else if (de == "real" && para== "euro") resultado=valor /5.5;
else if (de == "euro" && para== "real") resultado=valor *5.5;
else if (de == "dolar"&& para== "euro")  resultado=valor /0.9;
else if (de == "euro"&& para== "dolar") resultado=valor *1.1;

document.formulario.resultado.value = resultado;
return true;

}

