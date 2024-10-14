console.log("Javascript carregado!")

function enviar() {
    console.log('Forms enviado!')
    let produto = document.getElementById("texto").value
    console.log(produto)
    let quantidade = document.getElementById("quantidade").value
    console.log(quantidade)
    generateHTML(quantidade,produto)
}

function generateHTML(quantidade,produto) {
    console.log('Adicionando itens...')
    let novo_texto = document.createElement("p")
    let novo_quant = document.createElement("p")
    novo_texto.textContent = produto
    novo_quant.textContent = quantidade
    let container_texto = document.getElementById("produtos")
    container_texto.appendChild(novo_texto)
    let container_quant = document.getElementById("quantidades")
    container_quant.appendChild(novo_quant)
    console.log('Itens adicionados a lista!')
}