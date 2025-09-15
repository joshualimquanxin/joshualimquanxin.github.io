function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE
    console.log(friends);
    selector = document.getElementById("friends").selectedOptions;
    console.log(selector);
    for (let friend of selector) {
        console.log(friend.value);
        friends.push(friend.value);
    }
    // Display user's selection in Developer Tools --> Console.
    console.log(friends);



    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    //
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    // YOUR CODE GOES HERE
    cards = [];
    for (let friend of friends) {
        for (let fruit of fruits) {
            cards.push(fruit + "_" + friend + ".png");
            cards.push(fruit + "_" + friend + ".png");
        }
    }
    cards = shuffleArray(cards);
    console.log(cards);


    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE

    // You will need to rewrite the value of this result_str (String).
    let result_str = `
        <div>
    `;

    for (let i = 0; i < num_rows; i++) {
        result_str += "<div class=\"row\">";
        for (let j = 0; j < num_cols; j++) {
            result_str += '<img onclick="flip(this)" id="' + cards[i*4+j] + '" class="column" src="cards/hidden.png">';
        }
        result_str += "</div>";
    }

    result_str += "</div>";

    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;

    document.getElementById('total-score').innerHTML = "0";
    flipped = [];
    done = [];
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
flipped = [];
done = [];
function flip(card) {
    console.log(done, card.id);
    if (flipped.length < 2 && !done.includes(card.id) && !flipped.includes(card)) {
        flipped.push(card);
        console.log(flipped);
        card.src = "cards/" + card.id;
        if (flipped.length == 2) {
            if (flipped[0].id === flipped[1].id) {
                for (card of flipped) {
                    card.style.opacity = "0.5";
                }
                done.push(flipped[0].id);
                score = document.getElementById('total-score');
                updatedScore = parseInt(score.innerHTML) + 1;
                score.innerHTML = updatedScore;
                flipped = [];
                if (updatedScore == document.getElementsByTagName("img").length / 2) {
                    score.innerHTML = "All Matched, Congratulations!";
                }
            } else {
                setTimeout(() => {
                    for (card of flipped) {
                        card.src = "cards/hidden.png";
                    }
                    flipped = [];
                }, 2000)
            }
        }
    }
}

// document.addEventListener('onclick', () => {
//     if (calculating) {
//         calculating = false;
//     }

//     calculating = false;
// })