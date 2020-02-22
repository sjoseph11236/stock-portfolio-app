const { expect } = require('chai');
const { db, User, Stock, Transaction, Portfolio } = require('../server/db');
const app = require('supertest')(require('../server/api'));
const data = require('./data.json');
describe('Stock Portfolio TDD', () => {
  describe('Models', () => {
    describe('Stock', ()=> { 

      describe('filterIexData ', () => {
        const symbols = "AMZN,AAPL,fb"
        
        it('returns an array of filtered stock', async () => {
          const result = await Stock.filterIexData(data, symbols);
          expect(Array.isArray(result)).to.equal(true);
        });
        it('returns an array with atleast one stock', async ()=> {
          const result = await Stock.filterIexData(data, symbols);
          expect(result).to.have.lengthOf.at.least(1);
        });

        it('each object in the arr should a name', ()=> {

        });

      });
    });
  })
});