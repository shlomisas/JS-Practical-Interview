/**
 * Created by Shlomi on 04/09/2015.
 */

import helper from './utils/helper';

// ### Common conditions

(()=>{
    // Assume:
    let a = 6, foo = function(){/* maybe with some heavy logic */};

    // What's looks better way to write your code, this:
    if (foo() && a === 5) {}
    // OR:
    if (a === 5 && foo()) {}
    // Why?
})();


// ### Async condition
(()=>{

    let data;

    let load = function(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('some data');
            }, 1000);
        });
    };

    let after = function(data){
        helper.log('The data is: ' + data);
    };

    if('undefined' === data){
        load().then(after);
    }else{
        after(data);
    }

    // How to make this `async condition` without use the `after` function?
})();


