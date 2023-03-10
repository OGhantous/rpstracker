function updateScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 score:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 score:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    P1 += 1
    Rounds += 1
    updateScoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    updateScoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    P2 += 1
    Rounds += 1
    updateScoreboard()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    Rounds = 0
    P2 = 0
    P1 = 0
    Ties = 0
    OLED.writeStringNewLine("Shall we play a game")
    basic.pause(2000)
    updateScoreboard()
}
let Rounds = 0
let Ties = 0
let P2 = 0
let P1 = 0
Reset()
