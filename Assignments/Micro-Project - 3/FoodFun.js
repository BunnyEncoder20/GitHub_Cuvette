var foods = [
    {
      "id": 1,
      "foodname": "Apple",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.3,
      "cab": 25
    },
    {
      "id": 2,
      "foodname": "Banana",
      "calorie": 105,
      "category": "Fruit",
      "protiens": 1.3,
      "cab": 27
    },
    {
      "id": 3,
      "foodname": "Orange",
      "calorie": 62,
      "category": "Fruit",
      "protiens": 1.2,
      "cab": 15
    },
    {
      "id": 4,
      "foodname": "Pear",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.5,
      "cab": 25
    },
    {
      "id": 5,
      "foodname": "Grapefruit",
      "calorie": 42,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 11
    },
    {
      "id": 6,
      "foodname": "Strawberry",
      "calorie": 46,
      "category": "Fruit",
      "protiens": 1.5,
      "cab": 10
    },
    {
      "id": 7,
      "foodname": "Blueberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 14
    },
    {
      "id": 8,
      "foodname": "Raspberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.4,
      "cab": 15
    },
    {
      "id": 9,
      "foodname": "Broccoli",
      "calorie": 34,
      "category": "Vegetable",
      "protiens": 3.3,
      "cab": 5
    },
    {
      "id": 10,
      "foodname": "Cauliflower",
      "calorie": 25,
      "category": "Vegetable",
      "protiens": 2.6,
      "cab": 5
    },
    {
      "id": 11,
      "foodname": "Green Beans",
      "calorie": 31,
      "category": "Vegetable",
      "protiens": 2.4,
      "cab": 4
    },
    {
      "id": 12,
      "foodname": "Asparagus",
      "calorie": 20,
      "category": "Vegetable",
      "protiens": 2.2,
      "cab": 2
    },
    {
      "id": 13,
      "foodname": "Spinach",
      "calorie": 23,
      "category": "Vegetable",
      "protiens": 3.5,
      "cab": 4
    },
    {
      "id": 14,
      "foodname": "Kale",
      "calorie": 33,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 7
    },
    {
      "id": 15,
      "foodname": "Sweet Potato",
      "calorie": 103,
      "category": "Vegetable",
      "protiens": 2,
      "cab": 27
    },
    {
      "id": 16,
      "foodname": "Potato",
      "calorie": 161,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 37
    },
    {"id": 17,
      "foodname": "Carrot",
      "calorie": 41,
      "category": "Vegetable",
      "protiens": 0.9,
      "cab": 9
    },
    {
      "id": 18,
      "foodname": "Onion",
      "calorie": 40,
      "category": "Vegetable",
      "protiens": 1.4,
      "cab": 9
    },
    {
      "id": 19,
      "foodname": "Egg",
      "calorie": 77,
      "category": "Protein",
      "protiens": 6.3,
      "cab": 0.5
    },
    {
      "id": 20,
      "foodname": "Chicken Breast",
      "calorie": 165,
      "category": "Protein",
      "protiens": 31,
      "cab": 0
    },
    {
      "id": 21,
      "foodname": "Salmon",
      "calorie": 206,
      "category": "Protein",
      "protiens": 22,
      "cab": 0
    },
    {
      "id": 22,
      "foodname": "Tuna",
      "calorie": 179,
      "category": "Protein",
      "protiens": 39,
      "cab": 0
    },
    {
      "id": 23,
      "foodname": "Beef",
      "calorie": 250,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 24,
      "foodname": "Pork",
      "calorie": 242,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 25,
      "foodname": "Lamb",
      "calorie": 294,
      "category": "Protein",
      "protiens": 25,
      "cab": 0
    },
    {
      "id": 26,
      "foodname": "Shrimp",
      "calorie": 85,
      "category": "Protein",
      "protiens": 20,
      "cab": 0.2
    },
    {
      "id": 27,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 28,
      "foodname": "Brown Rice",
      "calorie": 216,
      "category": "Grain",
      "protiens": 4.5,
      "cab": 45
    },
    {
      "id": 29,
      "foodname": "Oats",
      "calorie": 389,
      "category": "Grain",
      "protiens": 16.9,
      "cab": 66
    },
    {
      "id": 30,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 31,
      "foodname": "Bread",
      "calorie": 265,
      "category": "Grain",
      "protiens": 9.4,
      "cab": 49
    },
    {
      "id": 32,
      "foodname": "Pasta",
      "calorie": 131,
      "category": "Grain",
      "protiens": 5.5,
      "cab": 26
    },
    {
      "id": 33,
      "foodname": "Milk",
      "calorie": 60,
      "category": "Dairy",
      "protiens": 3.2,
      "cab": 5.1
    },
    {
      "id": 34,
      "foodname": "Cheese",
      "calorie": 402,
      "category": "Dairy",
      "protiens": 25,
      "cab": 2.4
    },
    {
      "id": 35,
      "foodname": "Yogurt",
      "calorie": 59,
      "category": "Dairy",
      "protiens": 3.5,
      "cab": 5
    },
    {
      "id": 36,
      "foodname": "Butter",
      "calorie": 717,
      "category": "Dairy",
      "protiens": 0.9,
      "cab": 0.1
    },
    {
      "id": 37,
      "foodname": "Almonds",
      "calorie": 579,
      "category": "Nuts",
      "protiens": 21,
      "cab": 22
    },
    {
      "id": 38,
      "foodname": "Walnuts",
      "calorie": 654,
      "category": "Nuts",
      "protiens": 15,
      "cab": 14
    },
    {
      "id": 39,
      "foodname": "Peanuts",
      "calorie": 567,
      "category": "Nuts",
      "protiens": 26,
      "cab": 16
    },
    {
      "id": 40,
      "foodname": "Cashews",
      "calorie": 553,
      "category": "Nuts",
      "protiens": 18,
      "cab": 30
    }
  ]
// Note : this code uses prompt-sync to take input from users.
const prompt = require('prompt-sync')();

console.log("Welcome to Micro-Project - 3\n1. list all the food items\n2. list all the food items with category vegetables\n3. list all the food items with category fruit\n4. list all the food items with category protien\n5. list all the food items with category nuts\n6. list all the food items with category grains\n7. list all the food items with category dairy\n8. list all the food items with calorie above 100\n9. list all the food items with calorie below 100\n10. list all the food items with highest protien content to lowest\n11. list all the food items with lowest cab content to highest") ;
var funcSelected = prompt("Enter your numeric function choice (1 to 11) : ");

switch (funcSelected) {
    case '1':
        var result = task1(foods);
        console.log("\nResults : \n",result);
        break;
    
    case '2':
        var result = task2(foods);
        console.log("\nResults : \n",result);
        break;

    case '3':
        var result = task3(foods);
        console.log("\nResults : \n",result);
        break;

    case '4':
        var result = task4(foods);
        console.log("\nResults : \n",result);
        break;

    case '5':
        var result = task5(foods);
        console.log("\nResults : \n",result);
        break;
    
    case '6':
        var result = task6(foods);
        console.log("\nResults : \n",result);
        break;

    case '7':
        var result = task7(foods);
        console.log("\nResults : \n",result);
        break;

    case '8':
        var result = task8(foods);
        console.log("\nResults : \n",result);
        break;

    case '9':
        var result = task9(foods);
        console.log("\nResults : \n",result);
        break;

    case '10':
        var result = task10(foods);
        console.log("\nResults : \n",result);
        break;

    case '11':
        var result = task11(foods);
        console.log("\nResults : \n",result);
        break;

    default:
        console.log("Please enter a valid input !");
        break;
}
  
function task1(foods) {
    // list all the food items
    console.log("returning list all the food items")
    return foods
}

function task2(foods) {
    // list all the food items with category vegetables
    console.log("returning list all the food items with category vegetables")
    var veggies = foods.filter(item => item.category === 'Vegetable');
    return veggies; 
}

function task3(foods) {
    // list all the food items with category fruit
    console.log("returning list all the food items with category fruit") ;
    var fruities = foods.filter(item => item.category === 'Fruit');
    return fruities;
}

function task4(foods) {
    // list all the food items with category protien
    console.log("returning list all the food items with category protien");
    var proteinBros = foods.filter(item => item.category === 'Protein');
    return proteinBros;
}

function task5(foods) {
    // list all the food items with category nuts
    console.log("returning list all the food items with category nuts");
    var dezzNuts = foods.filter(item => item.category === 'Nuts');
    return dezzNuts;
}

function task6(foods) {
    // list all the food items with category grains
    console.log("returning list all the food items with category grains")
    var grannies = foods.filter(item => item.category === 'Grain');
    return grannies;
}

function task7(foods) {
    // list all the food items with category dairy
    console.log("returning list all the food items with category dairy");
    var daries = foods.filter(item => item.category === 'Dairy');
    return daries;
}

function task8(foods) {
    // list all the food items with calorie above 100
    console.log("returning list all the food items with calorie above 100");
    var cal100plus = foods.filter(item => item.calorie>100);
    return cal100plus ;
}

function task9(foods) {
    // list all the food items with calorie below 100
    console.log("returning list all the food items with calorie below 100")
    var sub100cal = foods.filter(item => item.calorie<100);
    return sub100cal ;
}

function task10(foods) {
    // list all the food items with highest protien content to lowest
    console.log("returning list all the food items with highest protien content to lowest")
    var sortedProtein = foods.sort((item1,item2) => {
        return item2.protiens-item1.protiens ;
    });
    return sortedProtein;
}

function task11(foods) {
    // list all the food items with lowest cab content to highest
    console.log("returning list all the food items with lowest cab content to highest");
    var sortedCarbs = foods.sort((item1,item2) => {
        return item1.cab-item2.cab ;
    });
    return sortedCarbs ;
}