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

(async () => {

    /**
     *  The task: Enhance localStorage to support TTL
     */

    // So when doing:
    localStorage.setItem('key', 'value', 1000);

    // And waiting 1+ second..
    await new Promise((resolve) => setTimeout(resolve, 1001));

    // The expected output: null
    console.log(localStorage.getItem('key'));
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