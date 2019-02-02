const assert = require("chai").assert;
const expect = require("chai").expect;

describe("Chai", () => {
    it("is on board, captain!", () => {
        assert.equal(1, 1);
        expect(1).to.equal(1);
    })
})

describe("Test Driven", () => {
    it("just works, what else ...", () => {
        expect(sayHelloTo("me")).to.equal("Hello me")
    })
})

// implement functionality right here and move it away when finished :)
function sayHelloTo(name) {
    return "Hello " + name;
}