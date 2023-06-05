input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(input.temperature())
})
radio.setGroup(115)
