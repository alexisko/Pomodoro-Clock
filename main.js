$(document).ready(function() {
  // global variables
  var sessionLength = 25;
  var breakLength = 5;
  var timerOn = false;
  var min, sec = 0, timer;

  // start clock
    // hide settings
    // do pomodoro
    // start break
    // after one session, reset
  $('#start-btn').click(function() {
    // pomodoro timer
    min = sessionLength;
    timerOn = true;
    startTimer();
    // break timer
    if(!timerOn) {
      console.log('hello');
      min = breakLength;
      sec = 0;
      timerOn = true;
      startTimer();
    }
    console.log('test');
  });

  function startTimer() {
    console.log(min, sec);
    timer = setTimeout(startTimer, 1000);
    if(min === 0 & sec === 0) {
      // timer is complete
      formatTime(min, sec);
      clearTimeout(timer);
      timerOn = false;
    } else {
      // timer is still running
      if(min > 0 && sec === 0) {
        min--;
        sec = 59;
        formatTime(min, sec);
      } else {
        sec--;
        formatTime(min, sec);
      }
    }
  }

  function formatTime(min, sec) {
    $('#timer').html(((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec));
  }

  // stop clock
  $('#stop-btn').click(function() {
    clearTimeout(timer);
  });
  // reset clock
    // show settings
  $('#reset-btn').click(function() {
    clearTimeout(timer);
    min = sessionLength;
    sec = 0;
    formatTime(min, sec);
  });
  // increase session time
  $('#session-plus').click(function() {
    if(sessionLength+1 <= 60) {
      sessionLength++;
      $('#session-length').html(sessionLength);
      formatTime(sessionLength, 0);
    }
  });
  // decrease session time
  $('#session-minus').click(function() {
    if(sessionLength-1 >= 1) {
      sessionLength--;
      $('#session-length').html(sessionLength);
      formatTime(sessionLength, 0);
    }
  });
  // increase break time
  $('#break-plus').click(function() {
    if(breakLength+1 <= 30) {
      breakLength++;
      $('#break-length').html(breakLength);
    }
  });
  // decrease break time
  $('#break-minus').click(function() {
    if(breakLength-1 >= 1) {
      breakLength--;
      $('#break-length').html(breakLength);
    }
  });
});