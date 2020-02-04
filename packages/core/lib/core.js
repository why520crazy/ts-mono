"use strict";

const hello = function() {
    console.log(`this is hello from core`);
};

const test = function() {
    console.log(`this is test`);
};

const test1 = function() {
    console.log(`this is test1`);
};


module.exports = {
    test,
    hello,
    test1
};
