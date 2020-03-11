"use strict";

const { utils } = require("..");

describe("@ts-mono/core", () => {
    describe("utils", () => {
        it("should create id", () => {
            const result = utils.createId();
            console.log(result);
        });
    });
});
