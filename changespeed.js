document.addEventListener('DOMContentLoaded', function() {
  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', function() {
    var inp = document.getElementsByTagName('input')[0];
    inp.value = 1;
    browser.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate = 1;"});
  },false);
  var plusButton = document.getElementById('plus');
  plusButton.addEventListener('click', function() {
    var inp = document.getElementsByTagName('input')[0];
    inp.value = (parseFloat(inp.value)+.25);
    browser.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate += .25;"});
  },false);
  var minusButton = document.getElementById('minus');
  minusButton.addEventListener('click', function() {
    var inp = document.getElementsByTagName('input')[0];
    var count = (parseFloat(inp.value)-.25);
    if (count < .25){ count = .25}
    else {browser.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate -= .25;"})};
    inp.value = count;
  },false);
  var speedButton = document.getElementById('speed');
  speedButton.addEventListener('change', function() {
    var inp = document.getElementsByTagName('input')[0];
    var count = parseFloat(inp.value);
    if (count < .25){
      count = .25
      browser.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate = .25; "});
    } else {
      browser.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate =" + inp.value + ";"});
    }
    inp.value = count;
  },false);
}, false);
