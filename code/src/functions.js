(() => {
    // Assume:

    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }

    /**
     * The task: the output will 5 times 5
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
     * The task:
     * 1. What will be the output?
     * 2. How to fix that?
     */
})();

(() => {
    // Assume:

    let counter = 0;

    Math.round(2.33);
    Math.round(4/5);
    Math.round(3*2.4);
    Math.round(6.387);

    console.log(counter); // expect counter to be 4

    /**
     * The task: increase `counter` every time `Math.round` invokes, in this example `counter` should be 4
     */
})();
