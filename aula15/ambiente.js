let num = [5,8,2,9,3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(num[0])
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}



/* 
console.log(`Nosso vetor é o ${num}`)
console.log(num)
num[5] = 4
console.log(num)
num.push(7)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)
 */