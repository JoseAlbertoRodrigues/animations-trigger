const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 700

const explosions = []
let canvasPosition = canvas.getBoundingClientRect() // retorna informações sobre o tamanho de um elemento
// console.log(canvasPosition)


class Explosion {
    constructor(x, y) {
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.7
        this.height = this.spriteHeight * 0.7
        this.x = x // - this.width / 2 // para a seta ficar no centro da imagem
        this.y = y // - this.height / 2 // para a seta ficar no centro da imagem

        // fica mais limpo colocar essa image aqui
        this.image = new Image()
        this.image.src = '../image/boom.png'
        this.frame = 0
        this.timer = 0
        this.angle = Math.random() * 6.2
        this.sound = new Audio()
        this.sound.src = '../audio/boom.wav'
    }

    update() {
        if (this.frame === 0) {
            this.sound.play()
        }
        this.timer++
        if (this.timer % 10 === 0) { // aumentar de 10 em 10 frame, (10 vezes mais lenta )
            this.frame++
        }
    }

    draw() {
        c.save()
        c.translate(this.x, this.y) // ponto central da rotação
        c.rotate(this.angle)
        c.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            0,
            this.spriteWidth,
            this.spriteHeight,
            0 - this.width/2, // this.x, para poder usar o translate melhor
            0 - this.height/2, // this.y, para poder usar o translate melhor
            this.width,
            this.height
        )
        c.restore()
    }
}

// mouse click
addEventListener('click', function(e) {
    createAnimation(e)
})
// movimento de mouse
/*
addEventListener('mousemove', function(e) {
    createAnimation(e)
})
*/

// evitar repetição de código
function createAnimation(e) {
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top

    explosions.push(new Explosion(positionX, positionY))
    // console.log(explosions)
}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    for( let i = 0; i < explosions.length; i++) {
        explosions[i].update()
        explosions[i].draw()
        // remover o objeto de imagem quando ele for maior do que 5( MANEIRA SIMPLES)
        if ( explosions[i].frame > 5) {
            explosions.splice(i, 1)
            i--
        }

    }
}

animate()










/*
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 700

const explosions = []
let canvasPosition = canvas.getBoundingClientRect() // retorna informações sobre o tamanho de um elemento
// console.log(canvasPosition)


class Explosion {
    constructor(x, y) {
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.7
        this.height = this.spriteHeight * 0.7
        this.x = x - this.width / 2 // para a seta ficar no centro da imagem
        this.y = y - this.height / 2 // para a seta ficar no centro da imagem

        // fica mais limpo colocar essa image aqui
        this.image = new Image()
        this.image.src = '../image/boom.png'
        this.frame = 0
        this.timer = 0
        this.angle = Math.random() * 6.2
    }

    update() {
        this.timer++
        if (this.timer % 10 === 0) { // aumentar de 10 em 10 frame, (10 vezes mais lenta )
            this.frame++
        }
    }

    draw() {
        c.save()
        c.translate(this.x, this.y) // ponto central da rotação
        c.rotate(this.angle)
        c.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        )
        c.restore()
    }
}

// mouse click
addEventListener('click', function(e) {
    createAnimation(e)
})
// movimento de mouse
addEventListener('mousemove', function(e) {
    createAnimation(e)
})

// evitar repetição de código
function createAnimation(e) {
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top

    explosions.push(new Explosion(positionX, positionY))
    // console.log(explosions)
}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    for( let i = 0; i < explosions.length; i++) {
        explosions[i].update()
        explosions[i].draw()
        // remover o objeto de imagem quando ele for maior do que 5( MANEIRA SIMPLES)
        if ( explosions[i].frame > 5) {
            explosions.splice(i, 1)
            i--
        }

    }
}

animate()
*/








// addEventListener('click', function(e) {
//     // console.log(e)
//     let positionX = e.x - canvasPosition.left
//     let positionY = e.y - canvasPosition.top
//     c.fillStyle = 'white'
//     c.fillRect(positionX - 25, positionY - 25, 50, 50)
// })



// const explosion = new Explosion(100, 100)

// function animate() {
//     requestAnimationFrame(animate)
//     // explosion.update()
//     explosion.draw()
// }

// animate()
