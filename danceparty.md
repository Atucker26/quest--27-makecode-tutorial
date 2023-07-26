# Danceparty

## Step 1 On button 

Delete the forever block and find the show Icon into the start block.
 look for the music note.
``` blocks 
basic.showIcon(IconNames.EighthNote)
```
## Step 2 On button 

Find and drag two on button pressed.It is under the input tab that is purple. Leave one as A and change the other two b.
``` blocks 
input.onButtonPressed(Button.A, function ()
})
input.onButtonPressed(Button.B, function ()
```
## Step 3 On A button 

Find  and add the show Icon into the on button a block.(it is found under the basic blue tab)
Then look for the stick figure icon.
``` blocks 
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
```
## Step 4 on B button
Find and add the Show string block found in the basic tab. 
You will write inside " Hello! Let's dance"
``` blocks
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello! Let's dance.")
 ```
 ## Step 5 on Shake
  Find the on shake button
``` blocks
input.onGesture(Gesture.Shake, function() {    
})
```
## Step 6 play melody
  Find the play melody button under music and pick which sounds you want to play.
  ( The sounds I picked were G A GG A F C5)
``` blocks
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("- G A G G A F C5 ", 120), music.PlaybackMode.UntilDone)
})
```

## All the code 
What the final code should look like.
``` blocks 
 {
    basic.showIcon(IconNames.StickFigure) 

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello! Let's dance.")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("- G A G G A F C5 ", 120), music.PlaybackMode.UntilDone)
})
```