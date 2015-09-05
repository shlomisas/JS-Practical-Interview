/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

(()=> {

    let a = {
        interval: 1000,
        tick(cb){
            setInterval(cb, this.interval);
        }
    };

    a.tick(()=>{
        helper.log('A second has ticked!');
    });

    a.tick(()=>{
        helper.log('A second has ticked!');
    });

    // How to make sure A's instances won't hold more that 1 active timer?
})();

(()=> {
    setInterval(function(){
        // Assume helper.fakeAjax goes to some remote resource..
        helper.fakeAjax('/log').then(()=>{
            helper.log('Log read!');
        })
    }, 1000);

    // WHat's the (timing) problem and how to fix that?
})();