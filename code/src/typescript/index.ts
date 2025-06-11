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

    console.log(res.c.d);

    /**
     * The task:
     *  How to make `res.c` always valid?
     */

})();