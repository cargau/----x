function chois () {
	
}
input.onButtonPressed(Button.A, function () {
    A = A + 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A - A)
    B = 0
    A = 0
})
input.onButtonPressed(Button.B, function () {
    B = B + 1
    basic.showNumber(B)
})
let A = 0
let B = 0
B = 0
A = 0
basic.forever(function () {
	
})
