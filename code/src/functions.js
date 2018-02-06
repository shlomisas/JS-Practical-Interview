/**
 * Created by Shlomi on 05/09/2015.
 */

(() => {
    // Assume:

    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        });
    }

    // What will be the output and how to fix that?
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

    // What will be the output and how to fix that?
})();

(() => {
    // Assume:

    let a = {
        counter: 0,
        foo(flag){

            this.counter++;

            if (flag) {
                this.foo();
            }
            console.log(this.counter);
        }
    };

    a.foo();
    a.foo();
    a.foo(true);
    a.foo();
    a.foo();

    // What will be the output and how to fix that?
})();

(() => {
    let counter = 0;

    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);

    console.log(counter); // supposed to be 5
})();
