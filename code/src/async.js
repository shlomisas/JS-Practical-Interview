(async ()=>{
    // Assume:

    function load(val, cb){
        setTimeout(()=>{
            // Randomly throw an error
            if(Math.random() >= 0.5) {
                return cb(new Error(`${val} is wrong..`));
            }

            return cb(undefined, `${val} is sababa..`);
        }, 1000);
    }

    // Old way..
    load(5, (err, data) => {
        if(err) return console.log(err);
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

    const fakeAjax = async (path) => {
        // Randomly throw an error
        if(Math.random() >= 0.5) {
            throw new Error(`${path} went wrong..`);
        }

        return `${path} went sababa..`;
    }

    /**
     * The task:
     * 1. Call `fakeAjax` N times in sequence
     * 2. Call `fakeAjax` N times in parallel
     * 3. Catch errors but only for failed executions
     */
})();

(async() => {

    const EventEmitter = require('events');

    class A extends EventEmitter{
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

        await a.run();

    } catch (e) {
        console.error(e);
    }

})();

