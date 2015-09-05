/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

// Assume:

class A{

    constructor(){
        this.a = 3;
    }

    render(){
        helper.log('In A.render, a = '+this.a);
    }
}

class B extends A{

    constructor(){
        super();
        this.a = 5;
    }

    render(){
        helper.log('In B.render, a = '+this.a);
    }
}

var b = new B();
setTimeout(b.render.bind(b), 1000);

// ### Few questions:

// 1. What will be the output of this?
// 2. How to output the A.render also?
// 3. What will be A.render output?

