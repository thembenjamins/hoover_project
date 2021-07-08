var fs = require('fs');

//////////////////////////////////////////////////////////////
//Read the input.txt file and store the result in a variable.
//////////////////////////////////////////////////////////////
var inputData;
try {
    //Get input.txt file
    var data = fs.readFileSync('input.txt', 'utf8');
    //Assign inputData to the result of the text file.
    inputData = data.toString();
    //console.log(inputData);


//Get each line of text as an object in an array.
// [ [5,5]
//   [1,2]
//   [0,1]
//   [2,2]
//   [2,3]
//   [NNESEESWNWWW] ]
var inputDataArray = inputData.split('\n').map(function(ln) {
    return ln.split('\t');
});
//console.log("Data Array: " + inputDataArray);

//Hoover Map Size. Get the first object in the array.
var mapSize = inputDataArray[0][0].toString();
//console.log("Map Size: " + mapSize);

//Hoover Starting Position. Get the 2nd object which is the starting position.
var startingPosition = inputDataArray[1][0].toString();
//console.log(startingPosition);

//Array of Dirt patches. Get the array of dirt patches
var arrayOfDirt = [];
//Loop through as there could be a variable number of dirt patches
for (var i = 2; i < inputDataArray.length - 1; i++) {
    arrayOfDirt.push(inputDataArray[i].toString());
}
//console.log("Array of Dirt Patches");
//console.log(arrayOfDirt);


//Get the finalObject in the array. This is the directions NNESEESWNWW
var directions = inputDataArray[inputDataArray.length - 1].toString();
directions = directions.match(/.{1}/g);
//console.log("Directions: " + directions);



//Run Navigate Room Function which will log the final Position
// and the number of pices of dirt picked up
//
// log:
// 1,6
// 3
////////////
navigateRoom(mapSize, startingPosition, arrayOfDirt, directions);


} catch (e) {
    console.log('Error:', e.stack);
}


///////////////////////////////////////////////
// The navigate room function loops through each of the directions
// to get the number of pieces of dirt as well as the final position.
//
// params
// mapSize           = Size of the Room '5 5'
// startingPosition  = X Y of the starting hoover position   '1 2'
// arrayOfDirt       = X Y Array of the dirt placed around the Room  '1 3','2 4'....
// directions        = Array of directions to loop through 'N','N','S'......
///////////////////////////////////////////////
function navigateRoom(mapSize, startingPosition, arrayOfDirt, directions) {
    var currentPosition = startingPosition;
    var dirtPickedUp = [];
    //console.log("Starting Position: " + currentPosition);
    for (var i = 0; i < directions.length; i++) {
        //Get the direction and make it upppercase
        var direction = directions[i].toUpperCase();
        //console.log("Direction: "+direction);
        newPosition = updateCurrentPosition(mapSize, direction, currentPosition);
        //console.log("New Position: " + newPosition);
        currentPosition = newPosition;

        //Check if roomba is on piece of dirt. If so add to array.
        if (arrayOfDirt.indexOf(currentPosition) > -1) {
            //Add Dirt Picked up to Array
            dirtPickedUp.push(currentPosition);
        }


    }
    //console.log("Final Position");
    console.log(currentPosition);

    //Get Unique Pieces of Dirt Picked Up
    var uniqueListOfDirt = [];
    for (var i = 0; i < dirtPickedUp.length; i++) {
        if (uniqueListOfDirt.indexOf(dirtPickedUp[i]) == -1) {
            //Not Found Add to array
            uniqueListOfDirt.push(dirtPickedUp[i]);
        }
    }
    //Get length of unique pieces of dirt. This is the # of pieces of dirt that was collected.
    var numPiecesOfDirt = uniqueListOfDirt.length;
    //console.log("Final Pieces of Dirt:")
    console.log(numPiecesOfDirt);



}



////////////////////////////////////////////////////////
// This functions purpose is to update the current position of the Hoover
// It takes in 3 params and returns the final position.
//
// Params
// mapSize = the 1st row in the text file.
// direction = the current direction when looping through the direction array.
// currentPosition = the current position at each step of the loop through the array.
///////////////////////////////////////////////////////
function updateCurrentPosition(mapSize, direction, currentPosition) {
    var newPosition;
    var maxMapSize = Number(mapSize.charAt(0));
    var minMapSize = 0;
    var posX = Number(currentPosition.charAt(0));
    var posY = Number(currentPosition.charAt(currentPosition.length - 1));

    if (direction == "N") {
        //Increment Y by 1
        posY++;
    } else if (direction == "S") {
        //Decrement Y by 1
        posY--;
    } else if (direction == "E") {
        //Increment X by 1
        posX++;
    } else if (direction == "W") {
        //Decrement X by 1
        posX--;
    } else {
        //Not a valid direction do nothing
    }

    //Check if Roomba will navigate out of Room.
    //If so Set to outer most bounds maxMapSize of minMapSize
    if (posY > maxMapSize) {
        posY = maxMapSize;
    } else if (posY < minMapSize) {
        posY = minMapSize;
    } else if (posX > maxMapSize) {
        posX = maxMapSize;
    } else if (posX < minMapSize) {
        posX = minMapSize;
    }
    //Finalize New Position
    newPosition = posX + " " + posY;


    return newPosition;
}
