(() => {

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

(() => {

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

(() => {

    const axios = require('axios');

    class A {

        constructor({ server }) {
            this.server = server;
        }

        async load(evt) {
            try {
                const id = evt.target.getAttribute('data-id');
                const {data} = await axios.get(`${this.server}/resource/${id}`);

                document.querySelector('.myContainer').innerHTML = JSON.stringify(data, null, 2);
            } catch (e) {
                console.error(e);
            }
        }
    }

    const a = new A({
        server: 'https://someapi.com'
    });

    const buttons = document.querySelectorAll('.myButton');

    for (const button of buttons) {
        button.on('click', a.load.bind(a));
    }

    /**
     * The task:
     * 1. What are the performance challenge(s) here?
     * 2. Why?
     */
})();



