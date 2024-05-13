datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    basic.pause(5000)
    datalogger.deleteLog()
    datalogger.setColumnTitles("Tempature")
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.Yes)
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles("Tempature")
loops.everyInterval(60000, function () {
    if (logging) {
        basic.showIcon(IconNames.Happy)
    }
})
