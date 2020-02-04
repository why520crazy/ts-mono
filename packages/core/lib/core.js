"use strict";

const hello = function() {
    console.log(`this is hello from core`);
};

const test = function() {
    console.log(`this is test`);
};

module.exports = {
    test,
    hello
};
