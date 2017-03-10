"use strict";

/**
 *
 * Invoke a given callback after debounce function
 * hasn't been called for a specified number of milliseconds
 *
 * usage:
 * debounce( call_back, 500 )( ..arg );
 *
 * @param {Function} call_back
 * @param {Number} wait
 * @param {Object} this_argument
 **/

function debounce(call_back, wait, this_argument) {

    var timer = null;

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var context = this_argument || this;

        window.clearTimeout(timer);

        timer = window.setTimeout(function () {
            timer = null;
            call_back.apply(context, args);
        }, wait);
    };
}

window.addEventListener("scroll", debounce(function () {
    console.log("I am being debounced!");
}, 200));
