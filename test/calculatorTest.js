const chai = require('chai');
const { assert } = require('chai');
const calculator = require('../calculator')


describe('Test addition', ()=> {
    it('Should return addition', ()=>{
        assert.equal(add(2,2), 4)
    })
})

describe('Test substraction', ()=> {
    it('Should return substraction', ()=>{
        assert.equal(substract(2,2), 0)
    })
})

describe('Test Multiplication', ()=> {
    it('Should return multiplication', ()=>{
        assert.equal(multiply(2,2), 4)
    })
})

describe('Test Division', ()=> {
    it('Should return division', ()=>{
        assert.equal(divide(2,2), 1)
    })
})