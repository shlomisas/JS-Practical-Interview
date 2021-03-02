/**
 * Created by Shlomi on 05/09/2015.
 */

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
    let counter = 0;

    console.log('a');
    console.log('b');
    console.log('c');
    console.log('d');
    console.log('e');

    console.log(counter);

    /**
     * The task: increase `counter` every time `consooe.log` invoke, in this example `counter` should be 5
     */
})();
