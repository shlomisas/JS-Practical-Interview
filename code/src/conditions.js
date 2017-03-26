/**
 * Created by Shlomi on 04/09/2015.
 */

import helper from './utils/helper';

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


