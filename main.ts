namespace SpriteKind {
    export const speech = SpriteKind.create()
    export const test = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = true
    facingLeft = false
    facingRight = false
    facingDown = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facingUp == true) {
        testAttack = sprites.create(img`
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f f f f f f f f f f f f f f f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(0, -50)
        testAttack.setPosition(Character.x, Character.y)
    }
    if (facingDown == true) {
        testAttack = sprites.create(img`
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f f f f f f f f f f f f f f f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(0, 50)
        testAttack.setPosition(Character.x, Character.y)
    }
    if (facingRight == true) {
        testAttack = sprites.create(img`
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f f f f f f f f f f f f f f f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(50, 0)
        testAttack.setPosition(Character.x, Character.y)
    }
    if (facingLeft == true) {
        testAttack = sprites.create(img`
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f f f f f f f f f f f f f f f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(-50, 0)
        testAttack.setPosition(Character.x, Character.y)
    }
})
function startGame () {
    startSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.speech)
    startSprite.setPosition(75, 90)
    startSprite.say("press B to start", 2000)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = true
    facingRight = false
    facingDown = false
})
function levelOne () {
    tiles.setTilemap(tilemap`level2`)
    Character = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f 2 f . . . f 2 f . . . . 
        . . . f 2 f . . . f 2 f . . . . 
        . . . f 2 f . . . f 2 f . . . . 
        . . . . f . . . . . f . . . . . 
        . . 2 . . . . . . . . . 2 . . . 
        . . f 2 . . . . . . . 2 f . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Character.setPosition(100, 90)
    Character.setStayInScreen(true)
    for (let index = 0; index < 1; index++) {
        scene.centerCameraAt(Character.x, Character.y)
    }
}
function startIsOver () {
    started = 1
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = false
    facingRight = true
    facingDown = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = false
    facingRight = false
    facingDown = true
})
let startSprite: Sprite = null
let Character: Sprite = null
let testAttack: Sprite = null
let facingDown = false
let facingRight = false
let facingLeft = false
let facingUp = false
let started = 0
tiles.setTilemap(tilemap`level1`)
startGame()
started = 0
forever(function () {
    if (controller.B.isPressed() && started == 0) {
        levelOne()
        startIsOver()
    } else if (controller.A.isPressed() && started == 1) {
    	
    }
    controller.moveSprite(Character, 100, 100)
})
