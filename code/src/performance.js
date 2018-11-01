/**
 * Created by Shlomi on 04/09/2015.
 */

(function(){

    const EventEmitter = require('events');

    class A extends EventEmitter{}
    const a = new A();

    function init() {
        a.on('something', () => {});
    }

    init();
    init();
    init();
    init();
    // ...
    init();

    /**
     * The task:
     * 1. What's the logical problem?
     * 2. How to fix that?
     */
})();

(function(){

    const EventEmitter = require('events');

    class A extends EventEmitter{}

    function foo(){
        console.log('hi!');
    }

    const a = new A();

    a.on('event', foo.bind(a));
    a.off('event', foo);
    a.emit('event');

    /**
     * The task:
     * 1. Will the event be triggered?
     * 2. Why?
     */
})();


