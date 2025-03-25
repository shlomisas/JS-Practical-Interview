(async() => {
    try {

        // Native usage:
        setTimeout(() => {
            console.log('done!');
        }, 1000);

        // Desired usage (promisified version):
        await setTimeoutP(1000);
        console.log('done!');
    } catch(e) {
        console.error(e);
    }

    /**
     * The task: Implement setTimeoutP
     */

})();

(async ()=>{

    const request = async (path) => {
        console.log(`request function called with ${path}!`);

        // Randomly throw an error
        if(Math.random() >= 0.5) {
            throw new Error(`${path} went wrong..`);
        }

        return `${path} has been requested..`;
    };

    const paths = [
        '/user/5',
        '/user/7',
        '/user/5'
    ];

    /**
     * The task:
     * 1. Loop thru `paths`, call `request` in sequence (one after one) and print the results
     * 2. Loop thru `paths`, call `request` in parallel and print the results
     * 3. catch errors on each
     */
})();

(async ()=>{

    const request = async (path) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log(`${path} request has been called..`);
                res(`${path} has been resolved..`);
            })
        });
    };

    const paths = [
        '/user/5',
        '/user/7',
        '/user/5'
    ];

    /**
     * The task:
     * 1. Loop thru `paths`, call `request` in parallel and print the results
     * 2. Avoid performing duplicate requests of the same path but keep the responses' number the same (3 in this example)
     */

})();

