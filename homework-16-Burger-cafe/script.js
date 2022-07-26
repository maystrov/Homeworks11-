
SIZE_SMALL = {price: 50, calories: 20};
SIZE_MEDIUM = {price: 75, calories: 30};
SIZE_LARGE = {price: 100, calories: 40};

CHEESE = {label: 'cheese', price: 10, calories: 20};
SALAD = {label: 'salad', price: 20, calories: 5};
POTATO = {label: 'potato', price: 15, calories: 10};
SPICE = {label: 'spice', price: 15, calories: 0};
MAYO = {label: 'mayo', price: 20, calories: 5};

function Burger(size, toppings = []) {
  this.price = size.price;
  this.calories = size.calories;
  this.toppings = toppings;

  this.addTopping = function(topping)  {
    if(!topping) return ;
    this.toppings.push(topping);
    console.log(this.toppings)
  }

  this.getPrice = function() {
    this.price = this.toppings.reduce(function(acum, curValue) {
      return acum + curValue.price;
    }, this.price) ;
    return this.price;
  }
  
  this.getCalories = function() {
    this.calories = this.toppings.reduce(function(acum, curValue) {
      return acum + curValue.calories;
    }, this.calories) ;
    return this.calories;
  }
}

const burger = new Burger(SIZE_LARGE, [MAYO, POTATO ]);
burger.addTopping(CHEESE);

console.log('Burger price with toppings: ' + burger.getPrice() + ' grn')
console.log('Burger calories with toppings: ' + burger.getCalories() + ' kcal')



