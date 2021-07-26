(function(win, doc) {
  var keyHandler = function (e) {
      'use strict';

      if( !doc.forms.length ) return;

      if (e.keyCode === 27) {
          var reset = doc.createEvent('Event');
          reset.initEvent('reset', true, false);
          doc.forms[0].dispatchEvent(reset);
      }
  };
  win.addEventListener('keypress', keyHandler, true);
  win.addEventListener('keydown', keyHandler, true);
})( window, document )
