function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('Erro! verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        if (fsex[0].checked){

            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //menino
                img.setAttribute('src', 'menino.png')
            }else if( idade < 21){
                //jovemh
                img.setAttribute('src', 'jovemh.png')
            }else if (idade < 50){
                //homem
                img.setAttribute('src','homem.png')
            }else{
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked){

            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //menina
                img.setAttribute('src', 'menina.png')
            }else if( idade < 21){
                //jovemm
                img.setAttribute('src','jovemm.png')
            }else if (idade < 50){
                //mulher
                img.setAttribute('src','mulher.png')
            }else{
                //idosa
                img.setAttribute('src','idosa.png')
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)

    }
}