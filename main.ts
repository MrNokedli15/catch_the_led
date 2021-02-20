function ujlabda () {
    if (labda.get(LedSpriteProperty.Y) == 0) {
        labda.set(LedSpriteProperty.X, randint(0, 4))
    }
}
input.onButtonPressed(Button.A, function () {
    ütő.move(-1)
})
input.onButtonPressed(Button.B, function () {
    ütő.move(1)
})
function sikeresütés () {
    if (labda.isTouching(ütő)) {
        game.addScore(1)
    }
}
function játékvége () {
    if (labda.get(LedSpriteProperty.Y) == 4) {
        if (labda.get(LedSpriteProperty.X) != ütő.get(LedSpriteProperty.X)) {
            game.gameOver()
        }
    }
}
let labda: game.LedSprite = null
let ütő: game.LedSprite = null
game.setScore(0)
ütő = game.createSprite(2, 4)
labda = game.createSprite(randint(0, 4), 0)
labda.turn(Direction.Right, 90)
basic.forever(function () {
    labda.move(1)
    labda.ifOnEdgeBounce()
    basic.pause(200)
    sikeresütés()
    ujlabda()
    játékvége()
})
