input.onButtonPressed(Button.A, function () {
    if (proceed1 == 0) {
        if (count != 9) {
            count = count + 1
            basic.showNumber(count)
        }
    }
    if (proceed1 == 1) {
        if (count2 != 3) {
            count2 = count2 + 1
        }
        if (count2 == 0) {
            basic.showString("+")
        }
        if (count2 == 1) {
            basic.showString("-")
        }
        if (count2 == 2) {
            basic.showString("/")
        }
        if (count2 == 3) {
            basic.showString("*")
        }
    }
    if (proceed1 == 2) {
        if (count3 != 9) {
            count3 = count3 + 1
            basic.showNumber(count3)
        }
    }
    if (proceed1 == 3) {
        if (count2 == 0) {
            basic.showNumber(count + count3)
        }
        if (count2 == 1) {
            basic.showNumber(count - count3)
        }
        if (count2 == 2) {
            basic.showNumber(count % count3)
        }
        if (count2 == 3) {
            basic.showNumber(count * count3)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (proceed1 == 0) {
        if (count != 0) {
            count = count - 1
            basic.showNumber(count)
        }
    }
    if (proceed1 == 1) {
        if (count2 != 0) {
            count2 = count2 - 1
        }
        if (count2 == 0) {
            basic.showString("+")
        }
        if (count2 == 1) {
            basic.showString("-")
        }
        if (count2 == 2) {
            basic.showString("/")
        }
        if (count2 == 3) {
            basic.showString("*")
        }
    }
    if (proceed1 == 2) {
        if (count3 != 0) {
            count3 = count3 - 1
            basic.showNumber(count3)
        }
    }
    if (proceed1 == 3) {
        if (count2 == 0) {
            basic.showNumber(count + count3)
        }
        if (count2 == 1) {
            basic.showNumber(count - count3)
        }
        if (count2 == 2) {
            basic.showNumber(count % count3)
        }
        if (count2 == 3) {
            basic.showNumber(count * count3)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    proceed1 = proceed1 + 1
})
let count2 = 0
let count = 0
let proceed1 = 0
let count3 = 0
let halt = 0
count3 = 0