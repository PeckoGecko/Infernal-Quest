namespace SpriteKind {
    export const speech = SpriteKind.create()
    export const test = SpriteKind.create()
}
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
    startSprite.say("press B to start", 3000)
}
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
}
function startIsOver () {
    started = 1
}
let Character: Sprite = null
let startSprite: Sprite = null
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
