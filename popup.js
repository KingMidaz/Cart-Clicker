let runForeverBtn = document.getElementById('runForever');
let runOnceBtn = document.getElementById('runOnce');
let runTestBtn = document.getElementById('runTest');
let stopBtn = document.getElementById('stop');

runForeverBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'runForever();'});
      });
});

runOnceBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'runOnce();'});
      });
});

stopBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'clearInterval(x);'});
      });
});

runTestBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'runTest();'});
      });
});