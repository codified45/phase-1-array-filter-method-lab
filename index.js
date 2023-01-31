// Code your solution here


// You'll be writing three functions:

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

const createDriverArray = () => {
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
    return drivers;
}

const arrayOfDriverNames = createDriverArray();


const findMatching = (arrayOfDriverNames, string) => {
    
    const checkDriverString = driverString => driverString.toUpperCase() === string.toUpperCase();

    return arrayOfDriverNames.filter(checkDriverString);
}

