// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
var JetCopy;
(function (JetCopy) {
    "use strict";

    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;

        function onDeviceReady() {
            var ref = window.open('http://www.jetcopy.co.il', '_self', 'location=yes');
            //ref.addEventListener('loadstart', function (event) { alert('start: ' + event.url); });
            //ref.addEventListener('loadstop', function (event) { alert('stop: ' + event.url); });
            //ref.addEventListener('loaderror', function (event) { alert('error: ' + event.message); });
            //ref.addEventListener('exit', onBackKeyDown, false);
            //ref.addEventListener("backbutton", onBackKeyDown, false);
        }
    })(JetCopy.Application || (JetCopy.Application = {}));
    var Application = JetCopy.Application;

    window.onload = function () {
        Application.initialize();
    };
})(JetCopy || (JetCopy = {}));
//# sourceMappingURL=index.js.map
