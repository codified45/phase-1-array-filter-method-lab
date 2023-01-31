

const createDriverArray = () => {
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
    return drivers;
}

const arrayOfDriverNames = createDriverArray();

const createDriverObject = () => {
    const driversObj = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
    return driversObj;
};

const driversObject = createDriverObject();

// You'll be writing three functions:

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

const findMatching = (arrayOfDriverNames, string) => {
    
    const checkDriverString = driverString => driverString.toUpperCase() === string.toUpperCase();

    return arrayOfDriverNames.filter(checkDriverString);
}
// // .filter with Callback function syntax
// filter(callbackFn)
// filter(callbackFn, thisArg)


// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

const fuzzyMatch = (arrayOfDriverNames, string) => {

    const fuzzyCheck = driverString => {
        let strLength = string.length;
        return driverString.substring(0, strLength).toUpperCase() === string.toUpperCase();
        }

    return arrayOfDriverNames.filter(fuzzyCheck);
}

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.


const matchName = (driversObject, string) => {

    const nameCheck = object => object.name === string;
    
    return driversObject.filter(nameCheck);
}