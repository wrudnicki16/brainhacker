# Brainhacker

[Live demo here!](https://brainhacker1.herokuapp.com/)

Brainhacker is an Edtech platform inspired by Brainscape. It provides a learning experience using technologies such as Rails, PostgreSQL, React.js, and Redux. The project was designed and implemented from scratch over a 10 day time-frame. Current version of the platform provides a lite range of features, over time more features will be added.

## Why Brainhacker?

Brainhacker utilizes 2 techniques scientifically proven to have maximum results on memory and learning: spaced-learning and active recall. In addition, Brainhacker provides a scoring system which allows users to rate their confidence levels for each term that they study, so that when they go back to studying a particular subject, they will first be directed to study their least confident terms first, maximizing their study time.

## Key Features
* Backend to frontend secure user authentication.
  * User's passwords salted by BCrypt.
  * Users can log in with either their username or as a demo user.
* Create your own decks for you and others to study
  * Can modify cards in deck to be studied.
  * Cards have modifiable spacing to customize the creation workflow.
* Study all cards in a deck
  * Rate your confidence level for each of the cards on a 1-5 scale.
  * Track your progress for a particular deck.
  * Watch a cool flip animation.
* Search decks
  * Uses an autocomplete mechanism for searching.
  * Shows all decks by default.

## Minor Features
* Text to Speech
  * Uses Google's Speech Synthesis Web API
  * Parses deck names, Ex: Contains "Spanish" or "Español", reads 
    the back side of the card in the specified language (for a select few).
* Toast
  * Indicates whether or not you can edit a specific deck.
* Mobile Responsive
  * Works on both Safari and Chrome.

## Card CRUD
![Card gif](https://media.giphy.com/media/3o7WIH3PQkngShl0bK/giphy.gif)

## Deck CRUD
![Deck gif](https://media.giphy.com/media/26DMYbKvW1FmkP2X6/giphy.gif)

## Decks
One difficulty of creating a Deck is that I need to have both a deck sidebar as well as a deck show page displaying on the browser at the same time. For this I created separate components which rendered separately at the same time through different routes, both with their appropriate slices of state. Another difficulty involved my main page's background image, which was the same as the splash of the login page. When I deleted a deck, my splash background would show, making the site appear not complete. I managed to hide a div between components which would expanded when my deck show component was deleted, in order to fill the right side of the screen with white space without the user knowing that anything had happened.

## Cards
My cards, in order to update appropriately without a submit button, needed to update as you typed. However, this would bog down the server if you updated on a keystroke, so I decided to update `onBlur()`, giving my input updating appropriate speed.

## Study Deck
Having a live progress bar was tricky at first, as I had to decide whether or not to keep progress in the component's state or send it from the back end. I didn't want to send it from the back end as that would be theoretically slower than leaving that process to the front end, but I figured accuracy was more important than speed in this case, so I decided to ping the database instead. However, if scalability became an issue I would probably change this.

## Keeping code DRY
I am always trying to keep code dry when developing, abstracting information in the form of helper methods and partials so I avoid repeated code, making my code readable for both myself and my peers.

<img width="691" alt="screen shot 2018-02-09 at 3 39 59 pm" src="https://github.com/wrudnicki16/brainhacker/blob/master/Screen%20Shot%202018-02-12%20at%201.33.07%20AM.png">

## Future Features

* Tags
* Make edit deck its own page with a card sidebar and expanded card edit
* Upload Media
* Deck icons
