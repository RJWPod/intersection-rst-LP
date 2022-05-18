function Pedestrian_Crossing () {
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    GREEN()
    basic.pause(5000)
    for (let index = 0; index < 10; index++) {
        basic.pause(500)
        basic.showNumber(Pedestrian_Crossing_Time)
        Pedestrian_Crossing_Time += -1
    }
    Pedestrian_Crossing_Time = 10
    YELLOW()
    basic.pause(4000)
    basic.pause(2000)
    RED()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        Ambulance()
    }
})
function Sonar () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function RED () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Ambulance () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    GREEN()
    basic.pause(10000)
    YELLOW()
    basic.pause(4000)
    RED()
}
function Vehicle () {
    basic.showIcon(IconNames.No)
    GREEN()
    basic.pause(15000)
    YELLOW()
    basic.pause(3000)
    RED()
}
function GREEN () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Pedestrian_Crossing_VI () {
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    GREEN()
    basic.pause(5000)
    for (let index = 0; index < 10; index++) {
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        basic.pause(500)
        basic.showNumber(Pedestrian_Crossing_Time)
        Pedestrian_Crossing_Time += -1
    }
    Pedestrian_Crossing_Time = 10
    basic.pause(4000)
    YELLOW()
    basic.pause(1000)
    RED()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
function YELLOW () {
    range = Strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = Strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = Strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let Distance = 0
let Strip: neopixel.Strip = null
let Pedestrian_Crossing_Time = 0
let xyz = 1
Pedestrian_Crossing_Time = 10
Strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
Strip.setBrightness(20)
radio.setGroup(177)
basic.showIcon(IconNames.No)
RED()
basic.forever(function () {
    if (Distance > 4 && Distance < 6) {
        Vehicle()
    }
    if (input.buttonIsPressed(Button.A)) {
        Pedestrian_Crossing()
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Half))
        Pedestrian_Crossing_VI()
    }
})
