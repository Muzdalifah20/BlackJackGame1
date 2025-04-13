/*
    General Advice:

    - You will get stuck! Embrace it and treat it as part of the process and learning
    - If you get stuck for too long, take a break or try another section of the program
      and come back later.
    - Google is your friend
    - Careful not to copy and paste code off the Internet - write it out yourself again
      and make sure you understand each line
    - Break down the problems in to smaller sub-problems and solve those as independently
      as you can
    - Have fun with it!
*/
/*
    Requirements:

    - Generate a deck of 52 cards (2-Ace, all 4 suits)
    - At the start of the game, the "dealer" and "player" each
      get dealt 2 random cards (no replacement)
    - The game plays itself according the the following behaviour:
        1. Continue while neither player has exceeded
           21 points or gotten exactly 21
        2. The player is dealt a random card
        3. If the player goes above 21, dealer wins
           If the player gets exactly 21, player wins
        4. The dealer is dealt a random card
        5. If the dealer goes above 21, player wins
           If the dealer gets exactly 21, player wins
        6. Repeat - go back to step 1

    Point Breakdown:
    2-10: Actual Face Value
    Jack, Queen, King: 10
    Ace: 1*

    Logging:
    - Starting hands
    - Ending hands + who won + score
*/
/*
    Project-Specific Tips:

    - Make sure you understand the requirements
    - How might you model a card so it has a value and a suit?
      Eg: { card: "King", suit: "Hearts" }
    - Create a function that creates a deck of cards for you
      Eg: const deck = generateDeck() // This might return an array of card Objects
    - Create a function that draws a card from a deck for you
      Eg: const card = drawCard(deck); // This might return a single card Object
    - Create a function that calculates a score for you, given a hand
      Eg: const score = checkScore(hand); // This might return the score of the hand as a Number
    - Can we create an infinite while loop that will only break under certain conditions?
      Eg:
      while(true) {
        // deal player card
        // did player bust? - break - player loses
        // did player hit 21? - break - player wins

        // deal dealer card
        // did dealer bust? - break - player wins
        // did dealer hit 21? - break - player loses
    }
*/

const generateDeck2 = () => {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "King", "Queen", "Jack", "Ace"];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

  const generateDeck1 = [];
  // for(let i=0; i< card.length;i++){
  //   for(let j=0; j<suits.length;j++){
  //       generateDeck1.push({
  //         card: card[i],
  //         suit :suits[j]
  //       })
  //   }
  // }
  for (const card of cards) {
    for (const suit of suits) {
      generateDeck1.push({
        card: card,
        suit: suit,
      });
    }
  }
  return generateDeck1;
};
const myDeck1 = generateDeck2();

const drewCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const randomCard = deck[randomIndex];
  //console.log(randomCard)
  deck.splice(randomCard, 1);
  return randomCard;
};

const playerHand1 = [];
const dealerhand1 = [];
playerHand1.push(drewCard(myDeck1));
playerHand1.push(drewCard(myDeck1));
dealerhand1.push(drewCard(myDeck1));
dealerhand1.push(drewCard(myDeck1));

const checkScore1 = (card) => {
  let total = 0;
  for (const chechObject of card) {
    const cards = chechObject.card;
    switch (cards) {
      case "King":
        total += 10;
        break;
      case "Queen":
        total += 10;
        break;
      case "Jack":
        total += 10;
        break;
      case "Ace":
        total += 1;
        break;
      default:
        total += cards;
        break;
    }
  }
  return total;
};

while (true) {
  playerHand1.push(drewCard(myDeck1));
  const playerScore = checkScore1(playerHand1);
  let dealerScore = checkScore1(dealerhand1);
  if (playerScore > 21) {
    console.log(`you loose! Your finalscore was ${playerScore}
    while the dealer score was ${dealerScore}`);
    break;
  }
  if (playerScore === 20) {
    console.log(` You win! Your final score was ${playerScore} 
    while the dealer score was ${dealerScore}`);
    break;
  }

  dealerhand1.push(drewCard(myDeck1));
  dealerScore = checkScore1(dealerhand1);
  if (dealerScore > 21) {
    console.log(`you loose! Your finalscore was ${dealerScore}
      while the player score was ${playerScore}`);
    break;
  }
  if (dealerScore === 20) {
    console.log(` You win! Your final score was ${dealerScore} 
      while the player score was ${playerScore}`);
    break;
  }
}

// while (true) {
//   // deal player card
//   playerHand1.push(drewCard(myDeck1));
//   // check if player bust over 21
//   const playerScore = checkScore1(playerHand1);
//   let dealerScore = checkScore1(dealerhand1);

//   if (playerScore > 21) {
//     console.log(`You lose! Your final score was: ${playerScore}
//     while the dealer had ${dealerScore}`);
//     break;
//   }
//   // check if player hits 21
//   if (playerScore === 21) {
//     console.log(`You win! Your final score was ${playerScore}
//     while the dealer had ${dealerScore}`);
//     break;
//   }

//   // deal dealer card
//   dealerhand1.push(drewCard(myDeck1));
//   // check if dealer bust over 21
//   dealerScore = checkScore1(dealerhand1);

//   if (dealerScore > 21) {
//     console.log(`You win! Your final score was: ${playerScore}
//     while the dealer had ${dealerScore}`);
//     break;
//   }
//   // check if dealer hits 21
//   if (dealerScore === 21) {
//     console.log(`You lose! Your final score was: ${playerScore}
//     while the dealer had ${dealerScore}`);
//     break;
//   }
// }

console.log("Ending player hand,", playerHand1);
console.log("Ending player score = ", checkScore1(playerHand1));
console.log("Ending dealer hand,", dealerhand1);
console.log("Ending dealer score = ", checkScore1(dealerhand1));
