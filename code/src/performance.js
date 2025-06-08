(() => {

    const EventEmitter = require('events');

    class A extends EventEmitter{
      x = 5;
      foo(){
        console.log(`x = ${this.x}`);
      }
    }

    const a = new A();

    a.on('event', a.foo.bind(a));
    a.off('event', a.foo);
  
    a.emit('event');

    /**
     * The task:
     * 1. Will the event be triggered upon emitting it?
     * 2. Why?
     */
})();

(async () => {

    const models = await Model.find({ status: 'active '});

    for (const model of models) {
        await model.update({ status: 'inactive' });
    }

    /**
     * The task:
     * 1. What's the performance issue here?
     * 2. How to fix that?
     */
})();



