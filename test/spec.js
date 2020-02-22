const { expect } = require('chai');
const { db, User, Stock, Transaction, Portfolio } = require('../server/db');


describe('Stock Portfolio TDD', () => {
  describe('Models', () => {
    describe('Stock', ()=> { 

      describe('filterIexData ', () => {
        it('returns an array of filtered stock', async () => {
          const result = await Stock.filterIexData();
          expect(Array.isArray(result)).to.equal(true);
        });

        
      });
    });
  })
});