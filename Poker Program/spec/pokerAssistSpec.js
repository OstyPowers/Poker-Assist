describe('Poker Assist', function() {

  var theHand;
  beforeEach(function() {
      theHand = new Hand();
  });

  describe('Testing Default Values', function() {
      
      describe('when no cards are input', function() {
          
          describe('the card rank', function() {
              it('should be null', function() {
                  expect(theHand.getCardRank()).toBe(null);
              });
          });

          describe('the hand rank', function() {
              it('should be null', function() {
                  expect(theHand.getHandRank()).toBe(null);
              });
          });

          describe('the position', function() {
             it('should be null', function() {
                    expect(theHand.getPosition()).toBe(null);
                });
            });

            describe('the hand value', function() {
                it('should be null', function() {
                    expect(theHand.getHandValue()).toBe(null);
                });
            });

            describe('holecards suited', function() {
                it('should be false', function() {
                    expect(theHand.suited).toBeFalsy();
                });
            });
        
        });
    });

    describe('Testing User Input', function() {

        describe('when the user inputs ace ace with a position of button', function() {
            beforeEach(function() {
                theHand.addHoleCardA('ace', 'heart');
                theHand.addHoleCardB('ace', 'spade');
                theHand.suited(false)
                theHand.addPosition('Button');
            });

            describe('the card rank', function() {
                it('should be 1, 1', function() {
                    expect(theHand.getCardRank()).toBe(1,1);
                });
            });

            describe('the hand rank', function() {
                it('should be 1', function() {
                    expect(theHand.getHandRank()).toBe(1);
                });
            });

            describe('the position', function() {
                it('should be "Button"', function() {
                    expect(theHand.getPosition()).toBe('Button');
                });
            });

            describe('the hand value', function() {
                it('should be "pair"', function() {
                    expect(theHand.getHandValue()).toBe('pair');
                });
            });

            describe('holecards suited', function() {
                it('should be false', function() {
                    expect(theHand.suited).toBeFalsy();
                });
            });
        });

        describe('when the user inputs jack ten with a position of small blind', function() {
            beforeEach(function() {
                theHand.addHoleCardA('jack', 'club');
                theHand.addHoleCardB('ten', 'club');
                theHand.suited(true);
                theHand.addPosition('Small Blind');
                });
            
                describe('the card rank', function() {
                    it('should be 4, 5', function() {
                        expect(theHand.getCardRank()).toBe(4,5);
                    });
                });

                describe('the hand rank', function() {
                    it('should be 18', function() {
                        expect(theHand.getHandRank()).toBe(18);
                    });
                });

                describe('the position', function() {
                    it('should be "Small Blind', function() {
                        expect(theHand.getPosition()).toBe('Small Blind');
                    });
                });

                describe('the hand value', function() {
                    it('should be "high card"', function() {
                        expect(theHand.getHandValue()).toBe('high card');
                    });
                });

                describe('holecards suited', function() {
                    it('should be true', function() {
                        expect(theHand.suited).toBeTruthy();
                    });
                });
            });

        describe('when the user inputs eight eight with a position of big blind', function() {
            beforeEach(function() {
                theHand.addHoleCardA('eight', 'diamond');
                theHand.addHoleCardB('eight', 'spade');
                theHand.suited(false);
                theHand.addPosition('Big Blind');
            });

            describe('the card rank', function() {
                it('should be 7, 7', function() {
                    expect(theHand.getCardRank()).toBe(7,7);
                });
            });

            describe('the hand rank', function() {
                it('should be 17', function() {
                    expect(theHand.getHandRank()).toBe(17);
                });
            });

            describe('the position', function() {
                it('should be "Big Blind"', function() {
                    expect(theHand.getPosition()).toBe('Big Blind');
                });
            });

            describe('the hand value', function() {
                it('should be "pair"', function() {
                    expect(theHand.getHandValue()).toBe('pair');
                });
            });

            describe('holecards suited', function() {
                it('should be false', function() {
                    expect(theHand.suited).toBeFalsy();
                });
            });
        });

        describe('when the user inputs seven two with a position of under the gun', function() {
            beforeEach(function() {
                theHand.addHoleCardA('seven', 'club');
                theHand.addHoleCardB('two', 'heart');
                theHand.suited(false);
                theHand.addPosition('UTG');
            });

            describe('the card rank', function() {
                it('should be 8, 13', function() {
                    expect(theHand.getCardRank()).toBe(8,13);
                });
            });

            describe('the hand rank', function() {
                it('should be 169', function() {
                    expect(theHand.getHandRank()).toBe(169);
                });
            });

            describe('the position', function() {
                it('should be "UTG"', function() {
                    expect(theHand.getPosition()).toBe('UTG');
                });
            });

            describe('the hand value', function() {
                it('should be "high card"', function() {
                    expect(theHand.getHandValue()).toBe('high card');
                });
            });

            describe('holecards suited', function() {
                it('should be false', function() {
                    expect(theHand.suited).toBeFalsy();
                });
            });
        });

        describe('when user inputs ten two with a position of under the gun plus one', function() {
            beforeEach(function() {
                theHand.addHoleCardA('ten', 'spade');
                theHand.addHoleCardB('two', 'spade');
                theHand.suited(true);
                theHand.addPosition('UTG+1');
            });

            describe('the card rank', function() {
                it('should be 5, 13', function() {
                    expect(theHand.getCardRank()).toBe(5,13);
                });
            });

            describe('the hand rank', function() {
                it('should be 124', function() {
                    expect(theHand.getHandRank()).toBe(124);
                });
            });

            describe('the position', function() {
                it('should be "UTG+1"', function() {
                    expect(theHand.getPosition()).tobe('UTG+1');
                });
            });

            describe('the hand value', function() {
                it('should be "high card"', function() {
                    expect(theHand.getHandValue()).toBe('high card');
                });
            });

            describe('holecards suited', function() {
                it('should be true', function() {
                    expect(theHand.suited).toBeTruthy();
                });
            });
        });

        describe('when a user inputs six five with a position of under the gun plus two', function() {
            beforeEach(function() {
                theHand.addHoleCardA('six', 'club');
                theHand.addHoleCardB('five', 'club');
                theHand.suited(true);
                theHand.addPosition('UTG+2');
            });

            describe('the card rank', function() {
                it('should be 9, 10', function() {
                    expect(theHand.getCardRank()).toBe(9,10);
                });
            });

            describe('the hand rank', function() {
                it('should be 69', function() {
                    expect(theHand.getHandRank()).toBe(69);
                });
            });

            describe('the position', function() {
                it('should be "UTG+2"', function() {
                    expect(theHand.getPosition()).toBe('UTG+2');
                });
            });

            describe('the hand value', function() {
                it('should be "high card"', function() {
                    expect(theHand.getHandValue()).toBe('high card');
                });
            });

            describe('holecards suited', function() {
                it('should be true', function() {
                    expect(theHand.suited).toBeTruthy();
                });
            });
        });

        describe('when a user inputs ace eight with a position of low jack', function() {
            beforeEach(function() {
                theHand.addHoleCardA('ace', 'heart');
                theHand.addHoleCardB('eight', 'diamond');
                theHand.suited(false);
                theHand.addPosition('LowJack');
            });

            describe('the card rank', function() {
                it('should be 1, 7', function() {
                    expect(theHand.getCardRank()).toBe(1,7);
                });
            });

            describe('the hand rank', function() {
                it('should be 46', function() {
                    expect(theHand.getHandRank()).tobe(46);
                });
            });

            describe('the position', function() {
                it('should be "LowJack"', function() {
                    expect(theHand.getPosition()).toBe('LowJack');
                });
            });

            describe('the hand value', function() {
                it('should be "high card"', function() {
                    expect(theHand.getHandValue()).toBe('high card');
                });
            });

            describe('holecards suited', function() {
                it('should be false', function() {
                    expect(theHand.suited).toBeFalsy();
                });
            });
        });

        describe('when the user inputs jack two with a position of high jack', function() {
            beforeEach(function() {
                theHand.addHoleCardA('jack', 'heart');
                theHand.addHoleCardB('two', 'spade');
                theHand.suited(false);
                theHand.addPosition('HiJack');
            });

            describe('the card rank', function() {
                it('should be 4, 13', function() {
                    expect(theHand.getCardRank()).toBe(4,13);
                });
            });

            describe('the hand rank', function() {
                it('should be 131', function() {
                    expect(theHand.getHandRank()).toBe(131);
                });
            });

            describe('the position', function() {
                it('should be "HiJack"', function() {
                    expect(theHand.getPosition()).toBe('HiJack');
                });
            });

            describe('the hand value', function() {
                it('should be "high card"', function() {
                    expect(theHand.getHandValue()).toBe('high card');
                });
            });

            describe('holecards suited', function() {
                it('should be false', function() {
                    expect(theHand.suited).toBeFalsy();
                });
            });
        });

        describe('when the user inputs ace two with a position of cut off', function() {
            beforeEach(function() {
                theHand.addHoleCardA('ace', 'diamond');
                theHand.addHoleCardB('two', 'diamond');
                theHand.suited(true);
                theHand.addPosition('CutOff');
            });

            describe('the card rank', function() {
                it('should be 1, 13', function() {
                    expect(theHand.getCardRank()).toBe(1,13);
                });
            });

            describe('the hand rank', function() {
                it('should be 45', function() {
                    expect(theHand.getHandRank()).toBe(45);
                });
            });

            describe('the position', function() {
                it('should be "CutOff"', function() {
                    expect(theHand.getPosition()).toBe('CutOff');
                });
            });

            describe('the hand value', function() {
                it('should be "high card"', function() {
                    expect(theHand.getHandValue()).toBe('high card');
                });
            });

            describe('holecards suited', function() {
                it('should be true', function() {
                    expect(theHand.suited).toBeTruthy();
                });
            });
        });
    });
    
});
