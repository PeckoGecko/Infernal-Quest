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
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile22`, function (sprite, location) {
    testAttack.destroy()
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
        . . 5 f 2 f . . . f 2 f 5 . . . 
        . . 4 5 f . . . . . f 5 4 . . . 
        . . 2 4 5 5 5 5 5 5 5 4 2 . . . 
        . . f 2 4 4 4 4 4 4 4 2 f . . . 
        . . 8 f 2 2 2 2 2 2 2 f 8 . . . 
        . . . 8 f f f f f f f 8 . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Character.setStayInScreen(true)
    Character.setPosition(96, 86)
    for (let index = 0; index < 1; index++) {
        scene.centerCameraAt(94, 92)
    }
}
function startIsOver () {
    started = 1
}
function rangeAttack () {
    if (facingUp == true) {
        testAttack = sprites.create(img`
            . . . 2 2 2 . . 
            . . 2 4 4 4 2 . 
            . . 2 4 5 4 2 . 
            . . 2 4 5 4 2 . 
            . . . 2 4 2 . . 
            . . . 2 4 2 . . 
            . . . . 2 4 2 . 
            . . . . . 2 2 . 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(0, -50)
        testAttack.setPosition(Character.x, Character.y)
        animation.runImageAnimation(
        testAttack,
        assets.animation`fireball`,
        50,
        true
        )
    }
    if (facingDown == true) {
        testAttack = sprites.create(img`
            . . . 2 2 2 . . 
            . . 2 4 4 4 2 . 
            . . 2 4 5 4 2 . 
            . . 2 4 5 4 2 . 
            . . . 2 4 2 . . 
            . . . 2 4 2 . . 
            . . . . 2 4 2 . 
            . . . . . 2 2 . 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(0, 50)
        testAttack.setPosition(Character.x, Character.y)
        animation.runImageAnimation(
        testAttack,
        assets.animation`fireball`,
        50,
        true
        )
    }
    if (facingRight == true) {
        testAttack = sprites.create(img`
            . . . 2 2 2 . . 
            . . 2 4 4 4 2 . 
            . . 2 4 5 4 2 . 
            . . 2 4 5 4 2 . 
            . . . 2 4 2 . . 
            . . . 2 4 2 . . 
            . . . . 2 4 2 . 
            . . . . . 2 2 . 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(50, 0)
        testAttack.setPosition(Character.x, Character.y)
        animation.runImageAnimation(
        testAttack,
        assets.animation`fireball`,
        50,
        true
        )
    }
    if (facingLeft == true) {
        testAttack = sprites.create(img`
            . . . 2 2 2 . . 
            . . 2 4 4 4 2 . 
            . . 2 4 5 4 2 . 
            . . 2 4 5 4 2 . 
            . . . 2 4 2 . . 
            . . . 2 4 2 . . 
            . . . . 2 4 2 . 
            . . . . . 2 2 . 
            `, SpriteKind.Projectile)
        testAttack.setStayInScreen(false)
        testAttack.setFlag(SpriteFlag.AutoDestroy, true)
        testAttack.setVelocity(-50, 0)
        testAttack.setPosition(Character.x, Character.y)
        animation.runImageAnimation(
        testAttack,
        assets.animation`fireball`,
        50,
        true
        )
    }
    pause(100)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    levelTwo()
})
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
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    testAttack.destroy()
})
function levelTwo () {
    Character.setPosition(94, 92)
    demon = sprites.create(img`
        f . . . . . . . . . . f . . . . 
        f f . . . . . . . . f f . . . . 
        f f f . . . . . . f f f . . . . 
        . f f f . . . . f f f . . . . . 
        . . f f f 2 2 f f f . . . . . . 
        . . 2 f f 2 2 f f 2 . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        . 2 2 2 f 2 2 f 2 2 2 . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        . 2 2 2 f f f f 2 2 2 . . . . . 
        . . 2 f 2 2 2 2 f 2 . . . . . . 
        f . . . . f f . . . . f . . . . 
        . f f f f f f f f f f . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f . . f . . . . . . . . 
        . . . . f . . f . . . . . . . . 
        `, SpriteKind.Enemy)
    for (let index = 0; index < 1; index++) {
        scene.centerCameraAt(94, 92)
    }
    tiles.setTilemap(tilemap`level3`)
}
let demon: Sprite = null
let Character: Sprite = null
let startSprite: Sprite = null
let testAttack: Sprite = null
let facingDown = false
let facingRight = false
let facingLeft = false
let facingUp = false
let started = 0
tiles.setTilemap(tilemap`level1`)
startGame()
started = 0
let mySprite = sprites.create(img`
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
    `, SpriteKind.Enemy)
forever(function () {
    if (controller.B.isPressed() && started == 0) {
        levelOne()
        startIsOver()
    } else if (controller.B.isPressed() && started == 1) {
        rangeAttack()
    }
    controller.moveSprite(Character, 100, 100)
    if (facingUp == true) {
        animation.runImageAnimation(
        Character,
        assets.animation`Character_Idle`,
        500,
        true
        )
    }
    if (facingDown == true) {
        animation.runImageAnimation(
        Character,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e d e . . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . d 7 8 7 7 d . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e d e . . . . . . 
            . . . . . . f d d f . . . . . . 
            . . . . . 8 d d d d 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . d 8 8 8 8 d . . . . . 
            . . . . . . 7 8 7 7 . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (facingLeft == true) {
        animation.runImageAnimation(
        Character,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . f d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . f d d d . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (facingRight == true) {
        animation.runImageAnimation(
        Character,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . d d d f . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . d d d f . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
})
