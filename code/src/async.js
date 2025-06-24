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
     * Task:
     *
     * 1. Call `request(path)` for each item in `paths`.
     * 2. Run all requests in **parallel**.
     * 3. Avoid duplicate requests — only call `request` once per unique path.
     * 4. Still return a result for every item in `paths` (3 results total), reusing results for duplicates.
     *
     * Expected console output:
     *
     *      /user/5 request has been called..
     *      /user/7 request has been called..
     *      /user/5 has been resolved..
     *      /user/7 has been resolved..
     *      /user/5 has been resolved..
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

