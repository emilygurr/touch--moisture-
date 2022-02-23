let moistureReading = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    moistureReading = Math.map(pins.digitalReadPin(DigitalPin.P1), 0, 750, 0, 3)
    basic.pause(100)
    if (1 == pins.digitalReadPin(DigitalPin.P2)) {
        if (moistureReading <= 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (moistureReading > 1 && moistureReading <= 2) {
            basic.showLeds(`
                . # . # .
                . # . # .
                # . . . #
                . # # # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . # . # .
                # . . . #
                # . . . #
                . # # # .
                `)
        }
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        basic.showIcon(IconNames.SmallSquare)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
basic.forever(function () {
	
})
