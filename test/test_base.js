const expect = require('expect.js');
const Test = require('../');

describe('#base', function() {
    it('#base', function() {
        expect(Test()).to.be(123);
    });
});
