//Business logic
function Pizza(size, meatTopping,/*veggieTopping*/) {
    this.basePrice = 10.99;
    this.size = size;
    this.meatTopping = meatTopping;
    //this.veggieTopping = veggieTopping;
    this.extraFee = 0;
}

Pizza.prototype.cost = function () {
    if (this.size.includes("small")) {
        this.extraFee -= 2;
    }
    if (this.size.includes("medium")) {
        this.extraFee += 0;
    }
    if (this.size.includes("large")) {
        this.extraFee += 2;
    }
    if (this.meatTopping.includes("pepperoni") || this.meatTopping.includes("sausage")) {
        this.extraFee += 1;
    }
    if (this.meatTopping.includes("ham") || this.meatTopping.includes("bacon")) {
        this.extraFee += 2;
    }
    /*
    if(this.veggieTopping.includes("onion") || this.veggieTopping.includes("pineapple")) {
        this.extraFee += .75;
    }
    if(this.veggieTopping.includes("olive") || this.veggieTopping.includes("jalapeno")) {
        this.extraFee += 1.5;
    }
    */
}

Pizza.prototype.total = function () {
    let finalPrice;
    finalPrice = "your total price comes out to be " + (this.basePrice + this.extraFee) + " dollars";
    return finalPrice;
}

//UI logtic
function orderSubmit(event) {
    event.preventDefault();
    let sizeSelect = document.getElementById("pizza-size").value;
    let meatTopping = document.getElementById("meatTopping").value;
    //let veggieTopping = document.getElementById("veggieTopping").value;
    //let personInfor = document.getElementById("personInfo").value;

    let pizzaOrder = new Pizza(sizeSelect, meatTopping)
    pizzaOrder.cost();
    let p = document.createElement("p");
    let body = document.querySelector("body");
    p.setAttribute("class", "corners");
    p.append(pizzaOrder.total());
    body.append(p);
}

window.addEventListener("load", function () {
    const form = document.querySelector("form#orderInfo");
    form.addEventListener("submit", orderSubmit);
})
