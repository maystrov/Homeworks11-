
const SIZE_SMALL = {price: 50, calories: 20};
const SIZE_MEDIUM = {price: 75, calories: 30};
const SIZE_LARGE = {price: 100, calories: 40};

const CHEESE = {label: 'cheese', price: 10, calories: 20};
const SALAD = {label: 'salad', price: 20, calories: 5};
const POTATO = {label: 'potato', price: 15, calories: 10};
const SPICE = {label: 'spice', price: 15, calories: 0};
const MAYO = {label: 'mayo', price: 20, calories: 5};

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

const burger = new Burger(SIZE_LARGE);
burger.addTopping(CHEESE);

console.log('Burger price with toppings: ' + burger.getPrice() + ' grn')
console.log('Burger calories with toppings: ' + burger.getCalories() + ' kcal')



