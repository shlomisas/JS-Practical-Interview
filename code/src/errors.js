/**
 * Created by Shlomi on 05/09/2015.
 */

(async() => {

    // What's the problem and how to fix it?

    try {
        new Promise((resolve, reject) => {
            reject(new Error('something went wrong..'));
        });
    } catch (e) {
        console.error(e);
    }

})();

(async ()=> {

    function foo(){}
    function boo(){}
    function moo(){}

    function zoo(){
        setTimeout(()=>{
            JSON.parse('bla bla bla');
        });
    }

    try{

        foo();
        boo();
        moo();

        zoo();
    }catch(e){
        console.error(e);
    }

    // What's the problem and how to fix it?
})();
