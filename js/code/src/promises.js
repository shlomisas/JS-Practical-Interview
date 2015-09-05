/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

class A{

    constructor(val){
        this.val = val;
    }

    load(val, cb){
        setTimeout(()=>{
            if(val === this.val) return cb();
            cb(new Error('Not equal'));
        }, 1000);
    }
}

(()=>{
    // Assume:

    let a = new A(5);

    a.load(5, (e)=>{
        if(e) return helper.error(e);
        helper.log('All is good..');
    });

    a.load(3, (e)=>{
        if(e) return helper.error(e);
        helper.log('All is good..');
    });

    // What modifications required so the code will be promise-able?
})();

(()=> {

    let arr = [];

    for(let i=0;i<10;i++){
        arr.push(new A(i));
    }

    arr.forEach((a, i)=>{
        a.load(i+1, (e)=>{
            if(e) return helper.error(e);
            helper.log('All is good..');
        });
    });

    // After converted all use promises (from previous) modify this code so all async promises will done without using the forEach loop?
})();

