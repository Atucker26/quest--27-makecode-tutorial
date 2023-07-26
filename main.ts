input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello! Let's dance.")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("- G A G G A F C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.showIcon(IconNames.EighthNote)
