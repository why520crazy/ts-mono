"use strict";

module.exports = core;

function core() {
    console.log(`this is core`);
}

exports.hello = function() {
    console.log(`this is hello`);
};

exports.test = function() {
    console.log(`this is test`);
};
