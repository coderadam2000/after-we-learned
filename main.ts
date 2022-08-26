controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(assets.image`bullet`, mySprite, Bullet_x, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`bunnyduck lright`)
    Bullet_x = 100
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`bunnyduck lright`)
    Bullet_x = 100
})
let Bullet_x = 0
let bullet: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`bunnyduck lright`, SpriteKind.Player)
mySprite.ay = 80
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`Sky`)
info.setLife(5)
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(60)
