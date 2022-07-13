// Define a function that takes in an array of elements and joins
// them together into a string separated by a comma with a space after the comma.

// Declaring an array of cars
let arrayOfCars = ["BMW", "Mercedes-Benz", "Jaguar", "Maserati", "Audi"];

//Writing a function with an array as a parameter
function changeToString(arr){

 //using the .join() method with a comma and space as a separator  
    return arr.join(", ");
}

console.log(changeToString(arrayOfCars));