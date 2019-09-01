/**
 * Created by Shlomi on 05/09/2015.
 */

(async ()=>{
    // Assume:

    function load(val, cb){
        setTimeout(()=>{
            // Randomly throw an error
            if(Math.random() >= 0.5) {
                return cb(new Error(`${val} is wrong..`));
            }

            return cb(`${val} is sababa..`);
        }, 1000);
    }

    // Old way..
    load(5, (err, data) => {
        if(err) return cosnole.log(err);
        console.log(data);
    });

    // Modern way..
    try{
        const data = await loadP(5);
        console.log(data);
    }catch(e){
        console.log(e);
    }

    /**
     * The task: implement `loadP` that promisified `load`
     */
})();

(async ()=>{

    function fakeAjax(path){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // Randomly throw an error
                if(Math.random() >= 0.5) {
                    return reject(new Error(`${path} went wrong..`));
                }

                return resolve(`${path} went sababa..`);
            });
        });
    }

    /**
     * The task:
     * 1. Call `fakeAjax` 3 times in parallel
     * 2. Call `fakeAjax` 3 times in serial
     * 3. Catch errors but only for failed executions
     */
})();

