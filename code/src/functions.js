(() => {
    // Assume:

    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }

    /**
     * The task: the output will be 5 times 5
     * How to fix that?
     */
})();

(() => {
    // Assume:

    const a = {
        x: 5,
        foo() {
            console.log(`x = ${this.x}`);
        }
    };

    setTimeout(a.foo, 1000);

    /**
     * The task: the output will be `x = undefined`
     * How to fix that?
     */
})();

(() => {
    // Assume:
    let counter = 0;

    // File: a.js
    (() => {
        Math.round(2.33);
        Math.round(4 / 5);
    })();

    // File: b.js
    (() => {
        Math.round(3 * 2.4);
        Math.round(6.387);
    })();

    // expect counter to be 4
    console.log(counter);

    /**
     * The task: increase `counter` every time `Math.round` invokes, in this example `counter` should be 4
     */
})();

((obj) => {

    // Assume:
    obj.on('task:add', () => {
        console.log(`adding new task`);
    });

    obj.on('task:update', (event) => {
        const { id } = event?.data;
        console.log(`update task ${id}`);
    });

    obj.on('task:remove', (event) => {
        const { id } = event?.data;
        console.log(`removing task ${id}`);
    });

    /**
     * The task: make a common logic so every time an event is recevied log `[${Date.now()}]: ${eventName}`
     */

    obj.emit('task:add');
    obj.emit('task:update', { data: { id: 5 } });
    obj.emit('task:remove', { data: { id: 5 } });
})(new (require('events'))());
