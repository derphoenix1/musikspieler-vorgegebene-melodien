input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.showString("Mystery")
    music.playMelody("E B C5 A B G A F ", 120)
    basic.showIcon(IconNames.EighthNote)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showString("Scale")
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showIcon(IconNames.EighthNote)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.showString("Tokyo")
    music.playMelody("B A G A G F A C5 ", 120)
    basic.showIcon(IconNames.EighthNote)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.showString("Paris")
    music.playMelody("G F G A - F E D ", 120)
    basic.showIcon(IconNames.EighthNote)
})
basic.showIcon(IconNames.EighthNote)
