$(document).ready(function() {
  // global variables
  var sessionLength = 25;
  var breakLength = 5;
  // start clock
    // hide settings
    // do pomodoro
    // start break
    // after one session, reset
  $('#start-btn').click(function() {

  });
  // stop clock
  $('#stop-btn').click(function() {

  });
  // reset clock
    // show settings
  $('#reset-btn').click(function() {

  });
  // increase session time
  $('#session-plus').click(function() {
    sessionLength++;
    if(sessionLength <= 60) {
      $('#session-length').html(sessionLength);
    }
  });
  // decrease session time
  $('#session-minus').click(function() {
    sessionLength--;
    if(sessionLength >= 1) {
      $('#session-length').html(sessionLength);
    }
  });
  // increase break time
  $('#break-plus').click(function() {
    breakLength++;
    if(breakLength <= 30) {
      $('#break-length').html(breakLength);
    }
  });
  // decrease break time
  $('#break-minus').click(function() {
    breakLength--;
    if(breakLength >= 1) {
      $('#break-length').html(breakLength);
    }
  });
});