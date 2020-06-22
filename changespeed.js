document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('reset');
  checkPageButton.addEventListener('click', function() {
    var inp = document.getElementsByTagName('input')[0];
    inp.value = 1;
    chrome.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate = 1;"});
  },false);
  var checkPageButton = document.getElementById('plus');
  checkPageButton.addEventListener('click', function() {
    var inp = document.getElementsByTagName('input')[0];
    inp.value = (parseFloat(inp.value)+.25);
    chrome.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate += .25;"});
  },false);
  var checkPageButton = document.getElementById('minus');
  checkPageButton.addEventListener('click', function() {
    var inp = document.getElementsByTagName('input')[0];
    var count = (parseFloat(inp.value)-.25);
    if (count < .25){ count = .25}
    else {chrome.tabs.executeScript({code: "var vid = document.querySelectorAll('video')[0];  vid.playbackRate -= .25;"})};
    inp.value = count;
  },false);
}, false);
