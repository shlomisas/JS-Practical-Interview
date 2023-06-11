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
        // Randomly throw an error
        if(Math.random() >= 0.5) {
            throw new Error(`${path} went wrong..`);
        }

        return `${path} went sababa..`;
    };

    const paths = [
        '/do?a=5&b=6',
        '/do?a=7&b=8',
        '/do?a=5&b=6'
    ];

    /**
     * The task:
     * 1. Loop thru `paths` and call `request` in sequence (one after one)
     * 2. Loop thru `paths` and call `request` in parallel
     * 3. catch errors on each
     */
})();

(async ()=>{

    const request = async (path) => {
        return `${path} went sababa..`;
    };

    const paths = [
        '/do?a=5&b=6',
        '/do?a=7&b=8',
        '/do?a=5&b=6'
    ];

    /**
     * The task: 
     * 1. Loop thru `paths` and call `request` in parallel 
     * 2. Avoid duplicate requests of the same path but keep the responses' number the same (3 in this example)
     */
})();

