/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

(()=> {
    class A{
        registerTimer(cb){
            setInterval(cb, 1000)
        }
    }

    let a = new A();

    a.registerTimer(()=>{
        helper.log('A second has ticked!');
    });

    a.registerTimer(()=>{
        helper.log('A second has ticked!');
    });

    // How to make sure A's instances won't hold more that 1 active timer?
})();