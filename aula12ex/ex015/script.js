function verificar() {
    //window.alert('Funcionou')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'fotocriancahomem.png')
            } else if (idade < 21 ) {
                //adolescente
                img.setAttribute('src', 'fotoadolescentehomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosohomem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'fotocriancamulher.png')
            } else if (idade < 21 ) {
                //adolescente
                img.setAttribute('src', 'fotoadolescentemulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadultomulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosomulher.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}

