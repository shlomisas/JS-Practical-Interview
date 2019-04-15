/**
 * Created by Shlomi on 05/09/2015.
 */

(() => {
    // Assume:

    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }

    /**
     * The task:
     * 1. What will be the output?
     * 2. How to fix that?
     */
})();

(() => {
    // Assume:

    let a = {
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
     * The task: after running this code, `counter` should be 5
     */
})();
