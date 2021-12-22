// // Business Logic for Customer ---------------------

function Customer(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

// Business Logic for Pizza ---------------------

function Pizza(crust, size, sauce, toppings) {
  this.crust = crust;
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.total = 0.00;
}

Pizza.prototype.listToppings = function() {
  return this.toppings.join(", ");
};

Pizza.prototype.calculateTotal = function() {
  let total = 0.00;
  this.toppings.forEach(function(topping) {
    total += 2.00})

  if (this.size === "Extra Large") {
    total += 40.00;
  } else if (this.size === "Large") {
    total += 32.00;
  } else if (this.size === "Medium") {
    total += 24.00;
  } else if (this.size === "Small") {
    total += 16.00;
  } else {
    total = 0.00;
  }

this.total = total;
}


// UI Logic ------------------

$(document).ready(function(){

  $("form#new-contact").submit(function(event){
    event.preventDefault();

  const inputtedFirstName = $("input#first-name").val();
  const inputtedLastName = $("input#last-name").val();
  const inputtedPhoneNumber = $("input#phone-number").val();
  let newCustomer = new Customer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);

  const selectedCrust = $("select#new-crust").val();
  const selectedSize = $("select#new-size").val();
  const selectedSauce = $("select#new-sauce").val();
  const selectedToppings = $("input:checkbox[name=selected-topping]:checked").map(function() {
    return $(this).val()
  }).get()
  let newPizza = new Pizza(selectedCrust, selectedSize, selectedSauce, selectedToppings);
  newPizza.calculateTotal()

  $(".first-name").html(newCustomer.firstName);
  $(".last-name").html(newCustomer.lastName);
  $(".phone-number").html(newCustomer.phoneNumber);
  $(".crust").html(newPizza.crust);
  $(".size").html(newPizza.size);
  $(".sauce").html(newPizza.sauce);
  $(".toppings").html(newPizza.listToppings());
  $(".total").html(newPizza.total);
  document.getElementById('new-contact').reset();
  })
})