/**
 * Created by Shlomi on 05/09/2015.
 */

(()=> {
    try{
        setTimeout(()=>{
            JSON.parse('bla bla bla');
        })
    }catch(e){
        console.error(e);
    }

    // What's the problem and how to fix it?
})();
