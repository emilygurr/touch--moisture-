let moistureReading = 0
let buttontouch = 0
basic.showIcon(IconNames.Heart)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeString("ready")
basic.forever(function () {
    buttontouch = pins.digitalReadPin(DigitalPin.P0)
    moistureReading = pins.analogReadPin(AnalogPin.P1)
    if (buttontouch == 0) {
        serial.writeValue("value", moistureReading)
        basic.pause(500)
        if (moistureReading <= 50) {
            music.playTone(262, music.beat(BeatFraction.Double))
        }
        if (moistureReading > 50) {
            music.playMelody("G A E G G - - - ", 120)
        }
    } else {
        serial.writeString("not.  ")
    }
    basic.pause(100)
})
basic.forever(function () {
	
})
