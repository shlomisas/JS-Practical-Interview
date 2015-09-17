/**
 * Created by Shlomi on 04/09/2015.
 */

import helper from './utils/helper';

// ### Common conditions

((a, foo)=>{

    if('function' !== typeof foo) return;

    // What's looks better way to write your code?

    // This:
    if (foo() && a === 5) {}
    // OR This:
    if (a === 5 && foo()) {}
    // Why?

    // This:
    if (foo() || a === 5) {}
    // OR This:
    if (a === 5 || foo()) {}
    // Why?
})();


// ### Async condition
((user)=>{

    function after(user){
        helper.log('Got user data: ' + user);
    }

    if('undefined' === typeof user){
        helper.loadFakeUserData().then(after);
    }else{
        after(user);
    }

    // How to make this `async condition` without use the `after` function way (hint: promises)?
})(/*helper.getFakeUserData(1, 'JRRT')*/);


