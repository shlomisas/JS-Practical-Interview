(() => {
    // Assume:

    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        });
    }

    /**
     * The task:
     * 1. What will be the output?
     * 2. How to fix that?
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

    const foo = (a) => {
        console.log(a);
    };

    let counter = 0;

    foo('a');
    foo('b');
    foo('c');
    foo('d');
    foo('e');

    console.log(counter); // expect counter to be 5

    /**
     * The task: increase `counter` every time `console.log` invokes, in this example `counter` should be 5
     */
})();
