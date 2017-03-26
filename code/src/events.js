/**
 * Created by Shlomi on 04/09/2015.
 */


(function(){
    // What's the diff between:

    $('table#t1 tr').on('click', () => {});

    // And:

    $('table#t1').on('click', 'tr', () => {});
})();


