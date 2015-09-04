/**
 * Created by Shlomi on 03/09/2015.
 */

// ############ General

    //What is the diff bet == and ===
    //

// ############ Promises

// ############ Functions, scopes and closures

// ############ How to fix that? ES5 and ES6:

for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}

// ############ Conditions
var a = 6;
// What's better?
if(foo() && a === 5){}
// OR:
if(a === 5 && foo()){}
// Why?