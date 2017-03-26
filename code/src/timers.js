/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

(()=> {

    let a = {
        interval: 1000,
        startTimer(cb){
            setInterval(cb, this.interval);
        }
    };

    a.startTimer(()=>{
        helper.log('A first has ticked!');
    });

    a.startTimer(()=>{
        helper.log('A second has ticked!');
    });

    // How to make sure A's instances won't hold more that 1 active timer?
})();

(()=> {

    // Assume:

    setInterval(function(){
        helper.fakeAjax('/log').then(()=>{
            helper.log('Log has received!');
        })
    }, 1000);

    // What's the (timing) problem and how to fix that?
})();