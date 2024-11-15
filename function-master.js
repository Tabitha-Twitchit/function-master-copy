//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let newArray = Object.values(object);
    return newArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // console.log(object);
    let newArray = Object.keys(object);
    // console.log(newArray);
    let newString = newArray.join(" ");
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let newArray =  Object.values(object);
    let newString = "";
    // console.log(newArray);
    for (let i = 0; i < newArray.length; i++){
        // TABI you are v close here, but the problem seems to be the 
        // added space on the last array element, so you just need 
        // some logic to trim it.
        if(typeof newArray[i] === "string" /*&& newArray[i] !== newArray.length -1*/){
            newString += newArray[i] + " ";
        } 
    }
    // the way slice works here is that it reassigns newstring to itself
    // with the method applied. The method returns a string beggining char
    // 0 index, and continuing to the end -1 (we are choosing what to 
    // include not cut away and dispose). IDK you could -index strings like this, curious. 
    newString = newString.slice(0, -1);
    
    // console.log(newString);
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    // capitalize the 0 index char concatenated with the rest of string from 1 index onward
    return string[0].toUpperCase() + string.slice(1);
    
    ;}
    
    //////////////////////////////////////////////////////////////////////
    // Function 6 - Capitalize All Words /////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    
    function capitalizeAllWords(string) {
        // create a temp array of the string words split individually 
        let tempArray = string.split(" ");
        // maybe unnecessary but create a second array where each are capped
        // using map to apply methods to all elements, element passed in as
        // arg for the syntax to work.  
        const cappedArray = tempArray.map(element => {
            return element[0].toUpperCase() + element.slice(1);
        });
    // rejoin capped array elements into string
        string = cappedArray.join(" ");
        return string;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // console.log(object);

    // stupidly the test insists we know better than the user that their
    // name should be capitalized. SO we reassign the value of their name
    // key to title case. You can do this via mutating the obj:
    // object.name = object.name[0].toUpperCase() + object.name.slice(1);
    
    // Or even better we can do this non destructively byt creating a new temp var
    let titleCased = object.name[0].toUpperCase() + object.name.slice(1);
    
    // and return it instead.
    // console.log("Welcome " + titleCased + "!");
    return "Welcome " + titleCased + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
// console.log(object);

// HELLA FUN! In an effort to keep things dry-er, I wrote a function, 
// which I should have done before, seeing how many of these use title case,
// to just run on my strings at the return.
function titleCase(string){
    string  = string[0].toUpperCase() + string.slice(1);
    return string;
}

// console.log(titleCase(object.name) + " is a " + titleCase(object.species));
return titleCase(object.name) + " is a " + titleCase(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // console.log(object);
    if(object.noises && object.noises.length > 0){
        // console.log(object.noises.join(" "));
        return object.noises.join(" ");
    } else {
        return "there are no noises"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let searchArray = string.split(" ");
    // console.log(searchArray);
    for (let i = 0; i < searchArray.length; i++){
        if(searchArray[i] === word){
            return true;
        }
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // console.log(name);
    // console.log(object);
    
    // WOW ok, loving learning more methods
    // So looking ahead at the tests I can see the final test includes
    // a sitch where there is NO friends array, so building a truthy
    // test into this, along with applying a method to the array that 
    // looks for our value. 
    if(object.friends && object.friends.includes(name)){
        return true;
    } else {
        // if not truthy Or the name isn't present (all other cases)...
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//    console.log(name);
//    console.log(array);
   let outputList = [];

//    loop the array arg
   for(let i = 0; i < array.length; i++){
    // do further actions for every object who IS NOT our name
    if(array[i].name !== name){
        // console.log("check for jimmy");
        if(!array[i].friends.includes(name)){
            outputList.push(array[i]["name"]);
        }
    }
   }

// console.log(outputList);
return outputList;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
// console.log(object);
// console.log(key);
// console.log(value);

if (Object.keys(object).includes(key)){
    object[key] = value;
} else if (!Object.keys(object).includes(key)){
    object[key] = value;
}
// console.log(object);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// console.log(object);
// console.log(array);

// loop the array--we only need to loop as many things to delete
// as we have, NOT everything in the obj.
for(let i = 0; i < array.length; i++){
    // create a temp var to manage unwieldy bracket syntax
    let keyToDel = array[i];
    // look in obj keys for current array item (saved off on prev line)
    if(Object.keys(object).includes(keyToDel)){
        // if found, delete it.  
        delete object[keyToDel];
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // console.log(array);

    // uses the spread operator to return a new array containing a Set
    // data structure. Sets can only be comprised of unique values. The
    // Set derives its values in this case from the array argument.
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}