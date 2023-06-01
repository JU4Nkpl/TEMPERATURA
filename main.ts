input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(input.temperature())
})
let humedad = 0
radio.setGroup(115)
basic.forever(function () {
    humedad = 0
})
