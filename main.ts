input.onButtonPressed(Button.A, function () {
    ActiveColor = 0
})
input.onButtonPressed(Button.AB, function () {
    ActiveColor = 2
})
input.onButtonPressed(Button.B, function () {
    ActiveColor = 1
})
let RedPin = 0
let GreenPin = 0
let Green = 0
let BluePin = 0
let ActiveColor = 0
let Red = 0
let Blue = 0
Red = 0
ActiveColor = 0
basic.forever(function () {
    if (ActiveColor == 0) {
        Blue = 0
        BluePin = pins.map(
        Blue,
        0,
        1023,
        0,
        225
        )
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P3))
    } else if (ActiveColor == 1) {
        Green = pins.analogReadPin(AnalogPin.P3)
        GreenPin = pins.map(
        Green,
        0,
        1023,
        0,
        225
        )
        pins.analogWritePin(AnalogPin.P1, GreenPin)
    } else if (ActiveColor == 2) {
        Red = pins.analogReadPin(AnalogPin.P3)
        RedPin = pins.map(
        Red,
        0,
        1023,
        0,
        225
        )
        pins.analogWritePin(AnalogPin.P0, RedPin)
    }
})
