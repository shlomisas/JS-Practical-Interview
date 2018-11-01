/**
 * Created by Shlomi on 04/09/2015.
 */

((a, foo)=>{

    if(typeof foo !== 'function') return;

    /**
     * The task: the condition has the same logic, what's looks better way to write your code?
     */

    // This:
    if (foo() && a === 5) {}

    // OR This:
    if (a === 5 && foo()) {}

    // Any why?
})();

((a, foo)=>{

    if(typeof foo !== 'function') return;

    /**
     * The task: the condition has the same logic, what's looks better way to write your code?
     */

    // This:
    if (foo() || a === 5) {}

    // OR This:
    if (a === 5 || foo()) {}

    // And why?
})();


