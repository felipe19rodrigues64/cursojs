// 5f = 5 * 4 * 3 * 2 * 1

function fatorial(numero) {
    var fat = 1
    for (var c = numero; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
