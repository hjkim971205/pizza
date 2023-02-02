# _pizza-parlor_

#### By _Hyung Jin Kim_

#### _This application will take your pizza order and give the price for the pizza with the toppings._

## Technologies Used

* _HTML_
* _JavaScript_ 
* _CSS_

## Description

_This application uses prototypes and constructors to create a webpage that will input a pizza order and output the price with the name and address to deliver to._ 

### Describe Pizza()

Test: "It should return a Pizza object with two properties for toppings and one property for size"
Code: const pizzaOrder = new Pizza(["pepperoni", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "medium" }

Test: "It should return a Pizza object with two properties for toppings and one property for size"
Code: const pizzaOrder = new Pizza(["bacon", "onion"], "small");
Expected Output: Pizza { toppings: ["bacon", "onion"], size: "small" }

Test: "It should return a Pizza object with two properties for toppings and one property for size"
Code: const pizzaOrder = new Pizza(["ham", "pineapple"], "large");
Expected Output: Pizza { toppings: ["ham", "pineapple"], size: "large" }

### Describe Pizza.prototype.cost()

Test: "It should continuously add the price with different size and toppings"
Code: pizzaOrder.cost();
      pizzaOrder;
Expected Output: Pizza { toppings: ["pepperoni", "pineapple"], size: "medium", extraFees: 1.75}

Test: "It should continuously add the price with different size and toppings"
Code: pizzaOrder.cost();
      pizzaOrder;
Expected Output: Pizza { toppings: ["ham", "jalapeno"], size: "small", extraFees: 3.50}

Test: "It should continuously add the price with different size and toppings"
Code: pizzaOrder.cost();
      pizzaOrder;
Expected Output: Pizza { toppings: ["none", "none"], size: "large", extraFees: 0.00}

### Describe Detail.prototype.orderDetail ()

Test: "It should return a statement with the order's name and the address to deliver to 
Code: let orderMessage = new Detail("nameInfo", "addressInfo");
      orderMessage.orderDetail();
Expected Output: "nameInfo, your order will be delivered to addressInfo"


### Describe Pizza.prototype.total()

Test: "It should give a total price of the pizza in a text"

Code: let pizzaOrder = new Pizza("medium", "pepperoni", "onions");
      pizzaOrder.cost();
Expected Output: "Your total price comes out to be 10.74 dollars"

## Setup/Installation 

* _Clone this repository to you desktop_
* _Navigate to the top directory_
* _Open index.html in your preferred web browser_
* _Interact with the web page_

## Known Bugs

* _Does not add a new line between the price of pizza and the order delivery._ 

## License

Copyright (c) _2023_ _Hyung Jin Kim_