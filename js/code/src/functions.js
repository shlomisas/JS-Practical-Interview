/**
 * Created by Shlomi on 05/09/2015.
 */


import helper from './utils/helper';

(()=> {
    // Assume:

    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    // What's the problem in that code and How to fix (in ES5 and ES6)?
})();

(()=> {
    // Assume:

    let a = {
        a: 5,
        foo: function(){
            helper.log('a = '+this.a);
        }
    };

    setTimeout(a.foo, 1000);

    // What's the problem in this code and how to fix that?
})();
