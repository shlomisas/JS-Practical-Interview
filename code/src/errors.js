/**
 * Created by Shlomi on 05/09/2015.
 */

(async ()=> {

    /**
     * The task:
     * 1. What's the problem?
     * 2. How to fix that?
     */

    const foo = () => {};
    const boo = () => {};
    const moo = () => {};

    const zoo = async () => {
        setTimeout(()=>{
            JSON.parse('bla bla bla');
        });
    }

    try{

        foo();
        boo();
        moo();

        await zoo();
    }catch(e){
        console.error(e);
    }

})();

(async() => {

    /**
     * The task:
     * 1. What's the problem?
     * 2. How to fix that?
     */

    try {
        new Promise((resolve, reject) => {
            reject(new Error('something went wrong..'));
        });
    } catch (e) {
        console.error(e);
    }

})();

(async() => {

    const EventEmitter = require('events');

    class A extends EventEmitter{
        foo(){}
        boo(){}
        moo(){}
        async run(){
            setImmediate(() => {
                this.emit('something');
            });
        }
    }

    /**
     * The task:
     * 1. What's the problem?
     * 2. How to fix that?
     */

    try {

        const a = new A();

        a.on('something', () => {
            throw new Error('something went wrong..');
        });

        a.foo();
        a.boo();
        a.moo();
        await a.run();

    } catch (e) {
        console.error(e);
    }

})();
