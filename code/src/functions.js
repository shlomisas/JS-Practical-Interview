(() => {
    // Assume:

    for (var i = 0; i < 5; i++) {
        Promise.resolve().then(() => {
            console.log(i);
        });
    }

    /**
     * The task: the output will be 5 times 5
     * How to fix it so it'll be 0, 1, 2, 3, 4?
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

    /**
     * The task: every time Math.round has been called, log whether the rounded number is even or odd in a single place
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
     * The task: make a common logic so every time an event is received log `[${Date.now()}]: ${eventName}`
     */

    obj.emit('task:add');
    obj.emit('task:update', { data: { id: 5 } });
    obj.emit('task:remove', { data: { id: 5 } });
})(new (require('events'))());

(async () => {

    /**
     *  The task: Enhance localStorage to support TTL
      */

    // When doing:
    localStorage.setItem('key', 'value', 1000);

    // After 1+ second
    await new Promise((resolve) => setTimeout(resolve, 1001));

    // Expected output: null
    console.log(localStorage.getItem('key'));
})();