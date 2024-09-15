Sorry Card Genorator
45 total cards

5x Ones

4x (2, 3, 4, 5, 7, 8, 10, 11, 12)

4x sorry cards

chance calculator? or array of 45 cards
fixed or roll?

I created a ts file of the cards in the deck.

I created the cards first using tailwind and daisyUi Card class. I inverted the last element to be upside down using negative scale.

I styled the rest of the cards.

I set the placement for the variables.

Imported clsx to use conditional formatting for the cards.

Imported the data for the cards.

Imported useState from react.

Set up useState to track cards and clicks

Created the random card const.

Handleclick function generates the random number and displays card using useState.

On first load the back of the card is displayed. When the card is clicked the randomized card is displayed.

Set up state to use for animation. Effect and setEffect.

Card will play flip animation when clicked.

Problem: it disapears completely. 