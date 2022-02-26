# Pizza Parlor

## by _**John Whitten**_

### _December 11, 2021_

#### _This is a web-based application wherein the user can order a pizza, select various toppings and sizes, and receive an order confirmation._

## Github Pages Link

### [Michelob Angelo's Pizza Parlor](https://johnwhittenstudio.github.io/project-4-pizza-parlor/) 

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _Javascript_
- _jQuery-3.6.0_

## Project Title: Pizza Parlor

## Description

#### _This is the fourth independent project for Epicodus._

#### _Project Prompt: Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost._

- _Allow the user to choose toppings and size for the pizza they'd like to order._
- _Create a pizza object constructor with properties for toppings and size._
- _Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this. Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes._

## Project Objectives

- _Constructors and prototypes are used successfully._

- _Application works as expected._

- _Tests are included for each business logic behavior and code is committed after each test passes._

- _Project is in a polished, portfolio-quality state and follows best practices and coding conventions taught at Epicodus._

- _The prompt’s required functionality and baseline project requirements are in place by the deadline._

### Project Objectives Further Exploration

- _Site is styled with CSS and images._

- _Allow users to order more than one pizza with different toppings._

- _Display the list of pizzas ordered as links that can be clicked for details._

- _Offer a delivery option that then requires address information._

## Directions

- _Open the terminal on your local computer._

- _Navigate to the parent directory of your preference._

- _Clone this project using $ git clone https://github.com/johnwhittenstudio/project-4_

#### Open Project using Terminal

- _Navigate to the top level of the repository with the command $ cd project-4_

- _Open index.html in the browser with the command $ open index.html_

#### Open Project using Local Machine UI

- _Open the folder using your local machine's user interface by double clicking on the folder project-4._

- _Open the index.html in your browser by double clicking on index.html_

#### Alternatively

- _Open a live version of the project in your browser by clicking on https://johnwhittenstudio.github.io/project-4-pizza-parlor/

## Tests

```

Describe: Customer()

Test: "It should return a Customer object with three properties for name, phone number, and address"
Code: const customerOne = new Customer("John", "1234567890", "123 Yum Yum Lane, Hungryville, Oregon 12345");
Expected Output: Customer { name: "John", phone number: "1234567890", address: "123 Yum Yum Lane, Hungryville, Oregon 12345" }

Test passed!


Describe: Pizza()

Test: "It should return a Pizza object with four properties for crust, size, sauce, and toppings"
Code: customerPizza = new Pizza("Detroit Style", "Extra Large", "Pesto Basil", ["Marinara", "Roasted Garlic", "Feta", "Spinach"]);
Expected Output: Pizza { pizzaCrust: "Detroit Style", pizzaSize: "Extra Large", pizzaSauce: "Pesto Basil", pizzaToppings: ["Marinara", "Roasted Garlic", "Feta", "Spinach"] }

Test passed!


Describe: Pizza()

  Calculate Total:
    • Pizza = $16 flate rate
    • Size: small + $1; medium + $8; large + $16; extra large + $24
    • Toppings: Mozarella + $2; Pepperoni + $2; Green Peppers + $2, Feta + $2, Sun Dried Tomatoes + $2, Roasted Garlic + $2

let total = 0;
  if (this.size === "extra large") {
    total += 40;
  } else if (this.size === "large") {
    total += 32;
  } else if (this.size === "medium") {
    total += 24;
  } else (this.size === "small") {
    total += 16;
  }

  return total

Test: "It should return a value calculated by adding the pizza size and the number of toppings"
Code: let totalPrice = new Price
Expected Output: Pizza { crust: 'Detroit Style', size: 'Extra Large', sauce: 'Pesto Basil', toppings: [ 'Marinara', 'Roasted Garlic', 'Feta' ], total: 46

Test passed!

```

## Known Bugs

- none

## License

[MIT License](https://opensource.org/licenses/MIT) Published _**2021**_ _**John Whitten**_

## Contact Information

_If you encounter any issues with this site, please contact John Whitten at [johnwhitten.studio@gmail.com](mailto:johnwhitten.studio@gmail.com)_
