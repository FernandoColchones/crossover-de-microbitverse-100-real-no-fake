input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("worm")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "smile") {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedString == "sad") {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedString == "worm") {
        basic.showIcon(IconNames.Rollerskate)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("sad")
})
radio.setGroup(911)
