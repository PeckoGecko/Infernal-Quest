namespace SpriteKind {
    export const speech = SpriteKind.create()
    export const test = SpriteKind.create()
    export const downAttack = SpriteKind.create()
    export const upAttack = SpriteKind.create()
    export const rightAttack = SpriteKind.create()
    export const leftAttack = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.downAttack, assets.tile`myTile15`, function (sprite, location) {
    downAttack.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = true
    facingLeft = false
    facingRight = false
    facingDown = false
})
scene.onHitWall(SpriteKind.downAttack, function (sprite, location) {
    downAttack.destroy()
})
function damageTaken () {
    healthBar.value += -1
    Character.setPosition(Character.x, Character.x + 8)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    Character.destroy()
    demon.destroy()
    levelOne()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = true
    facingRight = false
    facingDown = false
})
function levelOne () {
    tiles.setTilemap(tilemap`level2`)
    Character = sprites.create(assets.image`CharacterStill`, SpriteKind.Player)
    Character.setStayInScreen(true)
    Character.setPosition(96, 86)
    for (let index = 0; index < 1; index++) {
        scene.centerCameraAt(96, 92)
    }
}
scene.onHitWall(SpriteKind.upAttack, function (sprite, location) {
    upAttack.destroy()
})
scene.onOverlapTile(SpriteKind.upAttack, assets.tile`myTile22`, function (sprite, location) {
    upAttack.destroy()
})
function startIsOver () {
    started = 1
}
function rangeAttack () {
    timer.throttle("action", 500, function () {
        if (facingUp == true) {
            upAttack = sprites.create(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . f . 2 4 . f . 
                . f f f f f f . 
                . . . f f . . . 
                . . . f f . . . 
                . . . f f . . . 
                . . . . . . . . 
                `, SpriteKind.upAttack)
            upAttack.setStayInScreen(false)
            upAttack.setFlag(SpriteFlag.AutoDestroy, true)
            upAttack.setPosition(Character.x - 8, Character.y - 8)
            animation.runImageAnimation(
            upAttack,
            assets.animation`fireball`,
            75,
            false
            )
            blockMenu.setControlsEnabled(false)
            pause(700)
            blockMenu.setControlsEnabled(true)
            upAttack.destroy()
        }
        if (facingDown == true) {
            downAttack = sprites.create(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . f . 2 4 . f . 
                . f f f f f f . 
                . . . f f . . . 
                . . . f f . . . 
                . . . f f . . . 
                . . . . . . . . 
                `, SpriteKind.downAttack)
            downAttack.setStayInScreen(false)
            downAttack.setFlag(SpriteFlag.AutoDestroy, true)
            downAttack.setPosition(Character.x - 8, Character.y - 8)
            animation.runImageAnimation(
            downAttack,
            assets.animation`fireball`,
            75,
            false
            )
            pause(700)
            downAttack.destroy()
        }
        if (facingRight == true) {
            attackingRight = sprites.create(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . f . 2 4 . f . 
                . f f f f f f . 
                . . . f f . . . 
                . . . f f . . . 
                . . . f f . . . 
                . . . . . . . . 
                `, SpriteKind.rightAttack)
            attackingRight.setStayInScreen(false)
            attackingRight.setFlag(SpriteFlag.AutoDestroy, true)
            attackingRight.setPosition(Character.x - 8, Character.y - 5)
            animation.runImageAnimation(
            attackingRight,
            assets.animation`fireball`,
            75,
            false
            )
            pause(700)
            attackingRight.destroy()
        }
        if (facingLeft == true) {
            attackingLeft = sprites.create(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . . . 2 4 . . . 
                . f . 2 4 . f . 
                . f f f f f f . 
                . . . f f . . . 
                . . . f f . . . 
                . . . f f . . . 
                . . . . . . . . 
                `, SpriteKind.leftAttack)
            attackingLeft.setStayInScreen(false)
            attackingLeft.setFlag(SpriteFlag.AutoDestroy, true)
            attackingLeft.setPosition(Character.x - 8, Character.y - 5)
            animation.runImageAnimation(
            attackingLeft,
            assets.animation`fireball`,
            75,
            false
            )
            pause(700)
            attackingLeft.destroy()
        }
    })
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
sprites.onOverlap(SpriteKind.upAttack, SpriteKind.Enemy, function (sprite, otherSprite) {
    demon.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = false
    facingLeft = false
    facingRight = false
    facingDown = true
})
scene.onOverlapTile(SpriteKind.upAttack, assets.tile`myTile15`, function (sprite, location) {
    upAttack.destroy()
})
function levelTwo () {
    Character.setPosition(150, 86)
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
        scene.centerCameraAt(96, 92)
    }
    tiles.setTilemap(tilemap`level3`)
}
scene.onOverlapTile(SpriteKind.downAttack, assets.tile`myTile22`, function (sprite, location) {
    downAttack.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    damageTaken()
})
let attackingLeft: Sprite = null
let attackingRight: Sprite = null
let upAttack: Sprite = null
let demon: Sprite = null
let Character: Sprite = null
let healthBar: StatusBarSprite = null
let facingDown = false
let facingRight = false
let facingLeft = false
let facingUp = false
let downAttack: Sprite = null
let started = 0
tiles.setTilemap(tilemap`level1`)
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
let textSprite = textsprite.create("Press B to start", 0, 2)
textSprite.setPosition(75, 90)
forever(function () {
    if (controller.B.isPressed() && started == 0) {
        levelOne()
        startIsOver()
        facingLeft = true
        textSprite.destroy()
        healthBar = statusbars.create(15, 3, StatusBarKind.Health)
        healthBar.attachToSprite(Character)
    } else if (controller.A.isPressed() && started == 1) {
        rangeAttack()
    }
    controller.moveSprite(Character, 100, 100)
    if (facingUp == true && started == 1) {
        character.loopFrames(
        Character,
        assets.animation`CharacterUpIdle`,
        500,
        character.rule(Predicate.NotMoving, Predicate.FacingUp)
        )
        character.loopFrames(
        Character,
        assets.animation`CharacterUpWalking`,
        500,
        character.rule(Predicate.Moving, Predicate.FacingUp)
        )
    }
    if (facingDown == true && started == 1) {
        character.loopFrames(
        Character,
        assets.animation`CharacterDownIdle`,
        500,
        character.rule(Predicate.NotMoving, Predicate.FacingDown)
        )
        character.loopFrames(
        Character,
        assets.animation`CharacterDownWalking`,
        500,
        character.rule(Predicate.Moving, Predicate.FacingDown)
        )
    }
    if (facingLeft == true && started == 1) {
        character.loopFrames(
        Character,
        assets.animation`CharacterRightIdle`,
        500,
        character.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        character.loopFrames(
        Character,
        assets.animation`CharacterRightWalking`,
        500,
        character.rule(Predicate.Moving, Predicate.FacingRight)
        )
    }
    if (facingRight == true && started == 1) {
        character.loopFrames(
        Character,
        assets.animation`CharacterLeftIdle`,
        500,
        character.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        character.loopFrames(
        Character,
        assets.animation`CharacterLeftWalking`,
        500,
        character.rule(Predicate.Moving, Predicate.FacingLeft)
        )
    }
})
