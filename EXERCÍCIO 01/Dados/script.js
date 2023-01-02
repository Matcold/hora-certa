function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var now = new Date()
    var hora = now.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {

        img.src = 'dados/manhã.png'
        document.body.style.background = '#bfc775'

    } else if (hora >= 12 && hora < 18) {

        img.src = 'dados/tarde.png'
        document.body.style.background = '#d9843f'

    } else {

        img.src = 'dados/noite.png'
        document.body.style.background = '#002945'

    }

}