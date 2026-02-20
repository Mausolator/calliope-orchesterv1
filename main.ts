enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (Claim == receivedNumber) {
        while (Claim == receivedNumber) {
            Claim = randint(0, 2)
        }
    }
    basic.showString("Claim:")
    basic.showNumber(Claim)
})
let Claim = 0
radio.setGroup(87)
basic.pause(randint(0, 200))
Claim = randint(0, 2)
radio.sendMessage(Claim)
