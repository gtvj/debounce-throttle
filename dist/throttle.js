"use strict";

/**
 * Invoke a given callback immediately and no more frequently than
 * every `wait` ms until this function stops being called
 *
 * usage:
 * throttle( call_back, 500 )( ..arg );
 *
 * @param {Function} call_back
 * @param {Number} wait
 * @param {Object} this_argument
 */
function throttle(call_back, wait, this_argument) {

    var last_call_timestamp, timer;

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var context = this_argument || this,
            now = +new Date();

        if (!last_call_timestamp || now >= last_call_timestamp + wait) {
            last_call_timestamp = now;
            return call_back.apply(context, args);
        }

        clearTimeout(timer);

        timer = setTimeout(function () {
            last_call_timestamp = now;
            call_back.apply(context, args);
        }, wait);
    };
}

window.addEventListener("scroll", throttle(function () {
    console.log("I am being throttled!");
}, 200));
