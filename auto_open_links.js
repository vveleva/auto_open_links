window.addEventListener('keypress', function(e) {

  function openTabN(n) {
    var event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true,
      'metaKey': true
    });
    var cb = document.querySelector('#rso > div.srg > div:nth-child('+ n +') > div > h3 > a');
    cb.dispatchEvent(event);
  }

  var keys = {49: 1, 0: 2, 51: 3, 52: 4, 53: 5, 30: 6, 55: 7, 56: 8, 57: 9}

  if (e.ctrlKey && e.shiftKey && keys[e.keyCode]) {
    for (var i = 1; i <= keys[e.keyCode]; i++) { openTabN(i) }
  }

}, false);
