/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

(() => {
    // Assume:

    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            helper.log(i);
        }, 1000);
    }

    // What will be the output and how to fix that?
})();

(() => {
    // Assume:

    let a = {
        a: 5,
        foo: function () {
            helper.log('a = ' + this.a);
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
    // Bonus: Track `console.log` and check how many times it's called
})();
