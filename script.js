let botao = document.getElementById("btnClassificar");

botao.addEventListener("click", consultar);

function consultar(){
    console.log("Consultar Idade");

    let idade = parseFloat(document.getElementById("idade").value);

    let classificacao = (idade < 5) ? "Bebe"
        : (idade < 11) ? "Criança"
        : (idade < 18) ? "Adolescente"
        : (idade < 60) ? "Adulto"
        : (idade > 60) ? "Idoso"
        : "Invalido";

    document.getElementById("resultado").innerHTML = classificacao;
}