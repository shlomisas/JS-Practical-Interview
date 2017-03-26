/**
 * Created by Shlomi on 04/09/2015.
 */

(function(){
    items = items || [];

    function push(item){
        items.push(item);
    }

    push('a');
    push('b');
    push('c');
    push('d');

    // What's the leak in this code, why?, and how to fix it?
})();

(function(){
    function init() {
        $('#elem').click(() => {});
    }

    init();

    // What's the possible leak in this code and how to fix it?
})();


