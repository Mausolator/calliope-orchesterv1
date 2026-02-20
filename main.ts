enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    while (Claim == receivedNumber) {
        Claim = randint(0, 2)
    }
    basic.showNumber(Claim)
    radio.sendNumber(Claim)
    if (Claim == receivedNumber) {
        while (Claim == receivedNumber) {
            Claim = randint(0, 2)
        }
    }
})
function Dirigent_Auswahl () {
	
}
let Claim = 0
radio.setGroup(87)
Claim = randint(0, 2)
basic.showNumber(Claim)
radio.sendNumber(Claim)
basic.showNumber(Claim)
