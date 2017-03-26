/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

(()=>{
    // Assume:

    function load(val, cb){
        setTimeout(()=>{
            if(val === this.val) return cb();
            cb(new Error('Not equal'));
        }, 1000);
    }

    // Promisify `load` function
})();

(()=>{
    // Assume:

    function load1(){
        return helper.fakeAjax('/a');
    }

    function load2(){
        return helper.fakeAjax('/b');
    }

    function load3(){
        return helper.fakeAjax('/c');
    }

    // Use the 3 promisified functions in series and in parallel, make sure you're catching errors as well
})();

