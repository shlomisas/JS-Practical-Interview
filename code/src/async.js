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
     * 1. Loop through `paths`, call `request` in parallel and print the results
     * 2. Avoid performing duplicate requests of the same path but keep the responses' number the same (3 in this example)
     */

})();

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

