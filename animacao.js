const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const explosions = []
let canvasPosition = canvas.getBoundingClientRect()

class Explosion {
    constructor(x, y) {
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.7
        this.height = this.spriteHeight * 0.7
        this.x = x // usar assim para ser capturado no translate() // - this.width/2
        this.y = y // - this.height /2
        
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
        if (this.timer % 10 === 0) {
            this.frame++
        }
    }

    draw() {
        c.save()
        c.translate(this.x, this.y)
        c.rotate(this.angle)
        c.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            0,
            this.spriteWidth,
            this.spriteHeight,
            0 - this.width / 2, // tenho que usar assim porque ja está sendo usado na translate()
            0 - this.height / 2,
            this.width,
            this.height
        )
        c.restore()
    }
}

addEventListener('click', function(e) {
    createAnimation(e)
})
// addEventListener('mousemove', function(e) {
//     createAnimation(e)
// })

// evitar repetição de código
function createAnimation(e) {
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top

    explosions.push(new Explosion(positionX, positionY))
    // console.log(explosions)
}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let i = 0; i < explosions.length; i++) {
        explosions[i].update()
        explosions[i].draw()
        if (explosions[i].frame > 5) {
            explosions.splice(i, 1)
            i--
        }
        
    }
    requestAnimationFrame(animate)
}

animate()






/**
 * com a imagem no centro
 *
 const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const explosions = []
let canvasPosition = canvas.getBoundingClientRect()

class Explosion {
    constructor(x, y) {
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.7
        this.height = this.spriteHeight * 0.7
        this.x = x - this.width/2
        this.y = y - this.height /2
        
        this.image = new Image()
        this.image.src = '../image/boom.png'
        this.frame = 0
        this.timer = 0
    }

    update() {
        this.timer++
        if (this.timer % 10 === 0) {
            this.frame++
        }
    }

    draw() {
        c.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x, // 0 - this.width / 2,
            this.y, // 0 - this.height / 2,
            this.width,
            this.height
        )
    }
}

addEventListener('click', function(e) {
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top

    explosions.push(new Explosion(positionX, positionY))
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let i = 0; i < explosions.length; i++) {
        explosions[i].update()
        explosions[i].draw()
        
    }
    requestAnimationFrame(animate)
}

animate()
 */






/**
 * sem a imagem no centro do mouse
 *
 *
 * const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const explosions = []
let canvasPosition = canvas.getBoundingClientRect()

class Explosion {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.7
        this.height = this.spriteHeight * 0.7
        
        this.image = new Image()
        this.image.src = '../image/boom.png'
        this.frame = 0
        this.timer = 0
    }

    update() {
        this.timer++
        if (this.timer % 10 === 0) {
            this.frame++
        }
    }

    draw() {
        c.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x, //0 - this.width / 2, // this.x,
            this.y, //0 - this.height / 2, // this.y,
            this.width,
            this.height
        )
    }
}

addEventListener('click', function(e) {
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top

    explosions.push(new Explosion(positionX, positionY))
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let i = 0; i < explosions.length; i++) {
        explosions[i].update()
        explosions[i].draw()
        
    }
    requestAnimationFrame(animate)
}

animate()
 * 
 */






/**
 *  um exemplo
 *
 *
 const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const explosions = []
let canvasPosition = canvas.getBoundingClientRect()

class Explosion {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth / 2 // * 0.7
        this.height = this.spriteHeight / 2 // * 0.7

        this.image = new Image()
        this.image.src = '../image/boom.png'
        this.frame = 0
        this.time = 0
    }

    update() {
        this.frame++
    }

    draw() {
        c.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x, //0 - this.width / 2, // this.x,
            this.y, //0 - this.height / 2, // this.y,
            this.width,
            this.height
        )
    }
}

addEventListener('click', function(e) {
    let positionX = e.x - canvasPosition.left - 25
    let positionY = e.y - canvasPosition.top - 25

    c.fillStyle = 'white'
    c.fillRect(positionX, positionY, 50, 50)
})
 */