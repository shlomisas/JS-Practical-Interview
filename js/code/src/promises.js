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

    // Replace the code within A.load and a.load callback to use a promise?
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

    // After convereted all use promises (from previous) how to make sure all async promises are done without using this forEach loop?
})();

