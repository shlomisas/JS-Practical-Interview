(() => {
    // implement me a typescript interview question using ENUM

    const getStatus = (status: string) => {
        return status;
    }

    /**
     * The task:
     * How to type the `getStatus` function so the user won't be able to pass a wrong value to it?
     */

})();

(() => {

    const configurations = {
        llm: {
            url: 'https://a.c.b',
            apiKey: '123'
        },
        sso: {
            endpoint: 'https://x.y.z',
            apiKey: '456',
            apiSecret: '789'
        },
        pii: {
            enabled: true
        }
    }

    const getConfiguration = (key: string) => {
        return configurations[key];
    }

    /**
     * The task:
     * How to type the `configurations` above so the user won't be able to send a wrong key to `getConfiguration`
     * and infer the correct type of the returned value?
     */
})();

(() => () => {

    type CodeRes = {
        code: string;
    }

    type RedirectRes = {
        redirect: string;
    }

    const getOPT = (phone: string): CodeRes | RedirectRes => {
        if (phone === '123') {
            return { code: '123' }
        }
        return { redirect: 'https://google.com' }
    }

    const res = getOPT('123');

    if ('code' in res) {
        console.log(res.code);
    } else {
        console.log(res.redirect);
    }

    /**
     * The task:
     * How to type the `getOPT` to the user won't need to use type guards to access the returned value?
     */

})();