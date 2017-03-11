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

    var prevTime, timer;

    return function (...args) {
        var context = this_argument || this,
            now = +new Date();

        if (!prevTime || now >= prevTime + wait) {
            prevTime = now;
            return call_back.apply(context, args);
        }

        clearTimeout(timer);

        timer = setTimeout(() =>{
            prevTime = now;
            call_back.apply(context, args);
        }, wait);
    };
}

window.addEventListener("mousemove", throttle(function () {
    console.log("I am being throttled!");
}, 200));
