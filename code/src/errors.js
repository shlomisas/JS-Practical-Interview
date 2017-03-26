/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

(()=> {
    try{
        setTimeout(()=>{
            JSON.parse('bla bla bla');
        })
    }catch(e){
        helper.error(e);
    }

    // What's the problem and how to fix it?
})();
