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

(() => {

    enum EVENTS {
        A = 'a',
        B = 'b',
        C = 'c'
    }
    function foo (event: EVENTS) {
        switch(event) {
            case EVENTS.A:
                return { a: 5 };
            case EVENTS.B:
                return { b: 'Kyrylo' };
            case EVENTS.C:
                return { c: { d: 5}};
        }
    }

    const res = foo(EVENTS.C);

    /**
     * The task:
     * How to make `foo` return a strict type per event so we won't need to check `res` before using it?
     */

})();