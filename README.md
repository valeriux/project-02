# GA - SEI - PROJECT-02 (Woof Woof Doggies Browser)

<img width="1100" alt="Screenshot 2019-07-01 at 15 15 17" src="https://user-images.githubusercontent.com/47470930/60443387-10b32b80-9c13-11e9-970e-f877a2d0e975.png">


# Timeframe
* 1 day

# Technologies used
* React
* React Select
* Webpack
* Ajax
* JavaScript (ES6)
* CSS Animation.
* SCSS.
* HTML5
* Bulma (CSS framework)
* GitHub

## Woof Woof Dogs Page - React project

This was a pair-coding, hackathon project at General Assembly.

The brief was to:

* Consume a publicly available API and it was Thedogapi API.
* Deliver the data back in a React app

## Installation

* The site can be run locally by cloning the repository and typing npm i and then npm run serve in the terminal.

## App overview

The application allows a user to search for a dog breed, returning the results under the search input. 
To search you have two options:
* You can select the breed from the list.
* You can write for a specific breed

In order to implement the search we used react-select. We did two axios request:

<img width="697" alt="Screenshot 2019-07-12 at 04 18 16" src="https://user-images.githubusercontent.com/47470930/61117542-5c0fda00-a45c-11e9-9b2a-0d8931315e85.png">

* The first one was to obtain the breed with the value that was selected.
* The second one was to obtain the image per value.

