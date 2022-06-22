'use strict';

var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator - Test", function(){
    describe("Testing Operations", function(){
        it("Testing the sum operation", function(){
            expect(calculator.add(1,1)).to.equal(1+1);
        });

        it("Testing the minus operation", function(){
            expect(calculator.minus(1,1)).to.equal(1-1);
        });

        it("Testing the multiplication operation", function(){
            expect(calculator.multiply(3,3)).to.equal(3*3);
        });

        it("Testing the division operation", function(){
            expect(calculator.divide(6,2)).to.equal(6/2);
        });

        it("Testing the division operation by zero", function(){
            const expectError = new Error("No es posible dividir por cero");
            expect(calculator.divide(6,0).message).to.equal(expectError.message);
        });
    });
});