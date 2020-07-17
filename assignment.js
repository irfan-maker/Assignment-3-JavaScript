// // <!--feetToMile Section-->
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(60000);
result = result.toFixed(2);
// console.log("Our required Mile is:", result);

// <!--woodCalculator section--->
function woodCalculator(chair, table, bed) {
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWood;
}

var totalWoodResult = woodCalculator(14, 5, 14);
// console.log("Total Wood Need", totalWoodResult,"cubic centimeters");

// <!--brickCalculator section-->
function brickCalculator(numberOfFloor) {
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (numberOfFloor > 20) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) + ((numberOfFloor - 20) * 10 * 1000);
    }
    else if (numberOfFloor > 10) {
        numberOfBricks = (firstTenFloor * 15 * 1000) + ((numberOfFloor - 10) * 12 * 1000);
    }
    else if (numberOfFloor > 0) {
        numberOfBricks = (numberOfFloor * 15 * 1000);
    }
    else {
        console.log("Number of floor > 0");
    }
    return numberOfBricks;
}
var totalBreakCount = brickCalculator(26);
// console.log("Total Bricks required:", totalBreakCount);

// <!--tinyFreind section-->
function tinyFriend(names) {
    var shortest = names[0];

    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < shortest.length) {
            shortest = currentName;
        }
    }
    return shortest;
}


var shortestNameFriend = tinyFriend(['salam', 'irfanamin', 'don', 'sadia', 'ishmamamin', 'maruf']);
// console.log("The name of my tiny freind is:", shortestNameFriend);