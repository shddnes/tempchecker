datalogger.onLogFull(function () {
    abl = 1
    for (let index = 0; index < 123123; index++) {
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 1023, 1023, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.play(music.createSoundExpression(WaveShape.Triangle, 1593, 0, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    datalogger.deleteLog()
})
let num = 0
let abl = 0
abl = 0
basic.forever(function () {
    datalogger.mirrorToSerial(true)
    basic.pause(1000)
    if (abl == 1) {
    	
    } else {
        num += 1
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 4672, 4753, 255, 255, 163, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        datalogger.log(datalogger.createCV("" + (input.temperature() * 1.8 + 32) + "", input.temperature() * 1.8 + 32))
    }
})
