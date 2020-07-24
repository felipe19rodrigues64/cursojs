
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(numero) {
    // window.alert('Chamou isNumero(numero)')
    if(Number(numero) >= 1 && Number(numero) <=100) {
        // window.alert('É um numero')
        return true
    } else {
        window.alert('Não é um numero entre 1 e 100!')
        return false
    }
}

function inLista(numero, lista) {
    // window.alert('Chamou inLista(numero, lista)')
    if (lista.indexOf(Number(numero)) != -1) {
        // window.alert('Está na lista')
        return true
    } else {
        // window.alert('Não está na lista')
        return false
    }
}

function adicionar() {
    // window.alert('Chamou adicionar()')
    if(isNumero(num.value) && !inLista(num.value, valores)){
        // window.alert('Tudo ok!')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()

}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')  
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }

        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${total} números cadastrados`
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p> A media dos valores digitados é ${media} </p>`


    }
}

