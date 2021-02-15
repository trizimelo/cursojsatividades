function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    
    let hora = 15

    msg.innerHTML=`Agora são ${hora} horas <br>`
    if(hora >= 0 && hora < 12){
        //bomdia
        img.src = 'dia.png'
        msg.innerHTML += 'Bom dia!'
        document.body.style.backgroundColor= 'lightgreen'
    } else if(hora >= 12 && hora < 18 ){
        //boa tarde
        msg.innerHTML += 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.backgroundColor= '#FFB265'
    } else {
        //boa noite
        img.src = 'noite.png'
        msg.innerHTML += 'Boa noite!'
        document.body.style.backgroundColor= '#254296'
    }
}


