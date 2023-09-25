const jsonData = require('./data.json');

// list all the food items

 function listallfooditems(food)
 {
         return food.map(item=>item.foodname);
 }
 console.log("listallfooditems",listallfooditems(jsonData));


//list all the food items with category vegetables

 function categoryvegetables(food)
 {
         return food.filter(item=>item.category==="Vegetable")
 }
 console.log("vegetables category",categoryvegetables(jsonData));

//list all the food items with category fruit

 function categoryfruit(food)
 {
                 return food.filter(item=>item.category==="Fruit")
 }
 console.log("category fruit",categoryfruit(jsonData));

//list all the food item with category protien

 function categoryprotien(food)
 {
                 return food.filter(item=>item.category==="Protein")
 }
 console.log("category protien",categoryprotien(jsonData));

//list all the food items with category nuts

 function categorynuts(food)
 {
                 return food.filter(item=>item.category==="Nuts")
 }
 console.log("category nuts",categorynuts(jsonData));

//list all the food items with category grains

 function categorygrains(food)
 {
                 return food.filter(item=>item.category==="Grain")
 }
 console.log("category grains",categorygrains(jsonData));

//list all the food items with category dairy

 function categorydairy(food)
 {
                 return food.filter(item=>item.category==="Dairy")
 }
 console.log("category dairy",categorydairy(jsonData));

//list all the food items with calorie above 100

 function calorieabove100(food)
 {
                 return food.filter(item=>item.calorie>100)
 }
 console.log("calorie above 100 ",calorieabove100(jsonData));

//list all the food items with calorie below 100

 function caloriebelow100(food)
 {
                 return food.filter(item=>item.calorie<100)
 }
 console.log("calorie below 100 ",caloriebelow100(jsonData));

//list all the food items with highest protien content to lowest

  function highesttolowest(food)
  {
         return food.sort((a,b)=>{
                return b.protiens - a.protiens;
         })
  }
  console.log("highest to lowest protien",highesttolowest(jsonData));

//list all the food items with lowest cab content to highest

function cablowtohigh(food)
{
       return food.sort((a,b)=>{
               return a.cab - b.cab;
       })
}
console.log("cab low to high",cablowtohigh(jsonData));