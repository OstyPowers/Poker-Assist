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

    describe('Testing User Input', function() {

        describe('when the user inputs ace ace with a position of button', function() {
            beforeEach(function() {
                theHand.addHoleCardA('ace');
                theHand.addHoleCardB('ace');
                theHand.suited(false)
                theHand.addPosition('Button');
            });

            describe('the card rank', function() {
                it('should be 1, 1', function() {
                    expect(theHand.getCardRank).toBe(1,1);
                });
            });

            describe('the hand rank', function() {
                it('should be 1', function() {
                    expect(theHand.getHandRank).toBe(1);
                });
            });

            describe('the position', function() {
                it('should be "Button"', function() {
                    expect(theHand.getPosition).toBe('Button');
                });
            });

            describe('the hand value', function() {
                it('should be "pair"', function() {
                    expect(theHand.getHandValue).toBe('pair');
                });
            });
        });

        describe('when the user inputs jack ten with a position of small blind', function() {
            beforeEach(function() {
                theHand.addHoleCardA('jack');
                theHand.addHoleCardB('ten');
                theHand.suited(true);
                theHand.addPosition('Small Blind');
                });
            
                describe('the card rank', function() {
                    it('should be 4, 5', function() {
                        expect(theHand.getCardRank).toBe(4,5);
                    });
                });

                describe('the hand rank', function() {
                    it('should be 18', function() {
                        expect(theHand.getHandRank).toBe(18);
                    });
                });

                describe('the position', function() {
                    it('should be "Small Blind', function() {
                        expect(theHand.getPosition).toBe('Small Blind');
                    });
                });

                describe('the hand value', function() {
                    it('should be "high card"', function() {
                        expect(theHand.getHandValue).toBe('high card');
                    });
                });
            });
    });
});
