[githubrepo]: https://github.com/richyarwood/GA-SEI-project-02

# GA-SEI-PROJECT-02

![image](https://user-images.githubusercontent.com/47919053/60401807-87eab000-9b7e-11e9-9604-59bbf35f3f41.png)

# Timeframe
1.5 days

# Technologies used
* React
* Webpack
* Ajax
* JavaScript (ES6)
* HTML5
* Bulma (CSS framework)
* SCSS
* GitHub

## Cocktail DB API - React project
This was a pair-coding, hackathon project with [Richard Yarwood](https://github.com/richyarwood) at General Assembly.

The brief was to:
* Consume a publicly available API
* Deliver the data back in a React app

The project consumes data from [CocktailDB API](https://www.thecocktaildb.com/api.php).

The site can be run locally by cloning the repository and typing ```npm i``` and then ```npm run serve``` in the terminal.

### App overview

![image](https://user-images.githubusercontent.com/47919053/60401794-5bcf2f00-9b7e-11e9-8504-880e9d97015b.png)

The application allows a user to search for a cocktail by single ingredient or name of the cocktail, returning the results under the search input.

Clicking on a cocktail provides information on the ingredients and instructions on how to make the cocktail.

![image](https://user-images.githubusercontent.com/47919053/60401819-ba94a880-9b7e-11e9-8105-c92181ff54ba.png)

Similar cocktails are displayed under each cocktail. This filter is based on the ingredients of the cocktail on display.

### Development process

Three endpoints were chosen:

* Filter by ingredient: https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
* Search by name: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
* Random cocktail: https://www.thecocktaildb.com/api/json/v1/1/random.php

The main page is rendered from four components ```Home.js```, ```NavBar.js```, ```RandomCocktail.js``` and ```CocktailIndex.js```.

Choosing from the radio buttons (ingredient or name) sets a search variable which was appended to the api call. A ternary operator allowed us to refactor the code to a simple statement and ```scrollIntoView``` was used on submit to maximise the number of results on the page:

```
handleSubmit(e) {
  e.preventDefault()
  const endpoint = this.state.filter === 'ingredient' ? 'filter.php?i' : 'search.php?s'

  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${endpoint}=${this.state.search.searchInput}`)
    .then(res => this.setState({ data: res.data }))
    .then(() => this.searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}
```

#### Cocktail detail page

The delivery of the ingredients was a challenge because the data from the API was unstructured with many empty or null values, and the drinks and measures separated in to different key: value pairs.

This was resolved by filtering the response data:

```
getData(){
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
    params: {
      i: this.props.match.params.id
    }
  })
    .then(res => {
      const data = res.data.drinks[0]

      const drinks = Object.keys(data)
        .filter(key => key.match(/ingredient/i))
        .filter(key => !!data[key] || data[key] === ' ')
        .map(key => data[key].trim())

      const measures = Object.keys(data)
        .filter(key => key.match(/measure/i))
        .filter(key => !!data[key] || data[key] === ' ')
        .map(key => data[key].trim())

      const ingredients = drinks.map((drink, index) => {
        return { drink: drinks[index], measure: measures[index] }
      })

      const cocktail = {
        image: data.strDrinkThumb,
        name: data.strDrink,
        instructions: data.strInstructions,
        glass: data.strGlass,
        alcoholic: data.strAlcoholic,
        category: data.strCategory,
        id: data.idDrink,
        ingredients
      }

      this.setState({ cocktail })
    })
}
```

##### Similar cocktails

The similar cocktails component was created by randomly choosing an ingredient from the cocktail on show and using this ingredient to make another API call.

```
getData(){
  const randomIngredient = this.props.ingredients[Math.floor(Math.random() * this.props.ingredients.length)]

  axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
    params: {
      i: randomIngredient.drink
    }
  })
    .then(res => {
      const drinks = res.data.drinks.slice(0,5)
      this.setState({ data: drinks })
    })
}
```

### Future enhancements
* Upgrading the API to allow searches by multiple ingredients.
* Adding failed search notifications.
