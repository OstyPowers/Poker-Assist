/* globals describe it xdescribe xit beforeEach expect Ballot localStorage STORAGE_KEY */

describe('Poker Assist', function() {

  var theHand;
  beforeEach(function() {
      theHand = new Hand();
  });

  describe('Testing Default Values', function() {
      
      describe('when no cards are input', function() {
          
          describe('the card rank', function() {
              it('should be null', function() {
                  expect(theHand.getCardRank).toBe(null);
              });
          });

          describe('the hand rank', function() {
              it('should be null', function() {
                  expect(theHand.getHandRank).toBe(null);
              });
          });

          describe('the position', function() {
             it('should be null', function() {
                    expect(theHand.getPosition).toBe(null);
                });
            });

            describe('the hand value', function() {
                it('should be null', function() {
                    expect(theHand.getHandValue).toBe(null);
                });
            });
        
        });
    });
});
