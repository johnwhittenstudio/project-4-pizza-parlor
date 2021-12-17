// Business Logic for Customer ---------------------

function Customer(fullName, phoneNumber, address) {
  this.fullName = fullName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}


// Business Logic for Pizza ---------------------

function Pizza(pizzaCrust, pizzaSize, pizzaSauce, pizzaToppings) {
  this.pizzaCrust = pizzaCrust;
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaToppings = pizzaToppings;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 16.00;
}

Pizza.prototype.listToppings = function() {
  return this.toppings.join(", ");
}

Pizza.prototype.calculatePrice = function() {
  this.toppings.forEach(topping => {
    if (topping === "Marinara" || topping === "Roasted Garlic" || topping === "Feta" || topping === "Pepperoni" || topping === "Spinach" || topping === "Green Peppers" || topping === "Sun Dried Tomatoes") {
      this.price += 2.00;
    }
  })
  if (this.size === "extra large") {
    this.price += 24;
  } else if (this.size === "large") {
    this.price += 16;
  } else if (this.size === "medium") {
    this.price += 8;
  } else (this.size === "small") 
    this.price += 0;
  }
