var tableArray = [
    {
        name: "Nan McRoddon",
        age: 45,
        one: 1,
        two: 4,
        three: 3,
        four: 2,
        five: 4,
        six: 1,
        seven: 5,
        eight: 5,
        nine: 2,
        ten: 3,
        fun: "surfing the hypertubes"
    },{
        name: "Fleta Forbes",
        age: 22,
        one: 3,
        two: 1,
        three: 2,
        four: 2,
        five: 3,
        six: 2,
        seven: 4,
        eight: 5,
        nine: 1,
        ten: 2,
        fun: "rolling down a grassy hill"
    },{
        name: "Thora Doolan",
        age: 55,
        one: 4,
        two: 2,
        three:2,
        four: 1,
        five: 3,
        six: 1,
        seven: 2,
        eight: 5,
        nine: 1,
        ten: 5,
        fun: "translating Finnegan's Wake into Pig Latin"
    },{
        name: "Newell Rand",
        age: 23,
        one: 3,
        two: 1,
        three: 1,
        four: 3,
        five: 1,
        six: 1,
        seven: 2,
        eight: 4,
        nine: 1,
        ten: 1,
        fun: "pretending you haven't seen me yet"
    },{
        name: "Buster Dabs",
        age: 87,
        one: 2,
        two: 2,
        three: 1,
        four: 1,
        five: 1,
        six: 1,
        seven: 2,
        eight: 1,
        nine: 2,
        ten: 1,
        fun: "playing marbles"
    },{
        name: "Aubrey Lane",
        age: 12,
        one: 4,
        two: 5,
        three: 2,
        four: 5,
        five: 1,
        six: 5,
        seven: 1,
        eight: 5,
        nine: 5,
        ten: 5,
        fun: "remembering what I was like when I was young"
    },{
        name: "Emery Batt",
        age: 32,
        one: 3,
        two: 3,
        three: 3,
        four: 3,
        five: 3,
        six: 3,
        seven: 3,
        eight: 3,
        nine: 2,
        ten: 4,
        fun: "peeling potatoes"
    },{
        name: "Alonzo Bunan",
        age: 62,
        one: 2,
        two: 2,
        three: 4,
        four: 5,
        five: 2,
        six: 2,
        seven: 5,
        eight: 4,
        nine: 2,
        ten: 1,
        fun: "making clothing out of found objects"
    },{
        name: "Crawford McDermot",
        age: 48,
        one: 1,
        two: 1,
        three: 2,
        four: 3,
        five: 5,
        six: 3,
        seven: 2,
        eight: 1,
        nine: 2,
        ten: 1,
        fun: "preparing for the end of days"
    },{
        name: "Tillman Oneil",
        age: 39,
        one: 4,
        two: 3,
        three: 2,
        four: 3,
        five: 1,
        six: 3,
        seven: 4,
        eight: 2,
        nine: 2,
        ten: 1,
        fun: "running to the oldies... on a treadmill... in the basement"
    },{
        name: "Laverne Johnston",
        age: 74,
        one: 1,
        two: 1,
        three: 2,
        four: 1,
        five: 1,
        six: 5,
        seven: 4,
        eight: 2,
        nine: 5,
        ten: 1,
        fun: "basing it entirely on empirical research because I HAVE to be right!"
    },{
        name: "Ferdinand Fillanes",
        age: 52,
        one: 4,
        two: 4,
        three: 1,
        four: 4,
        five: 4,
        six: 2,
        seven: 1,
        eight: 2,
        nine: 1,
        ten: 1,
        fun: "correcting your grammar"
    },{
        name: "Golda Kabble",
        age: 33,
        one: 1,
        two: 1,
        three: 5,
        four: 4,
        five: 4,
        six: 3,
        seven: 1,
        eight: 3,
        nine: 1,
        ten: 3,
        fun: "doing something inappropriate I'm sure"
    },{
        name: "Elta Burns",
        age: 47,
        one: 3,
        two: 3,
        three: 5,
        four: 2,
        five: 4,
        six: 1,
        seven: 1,
        eight: 3,
        nine: 4,
        ten: 3,
        fun: "using knitting needles as chopsticks in a pinch"
    },{
        name: "Lenora Learmonth",
        age: 21,
        one: 2,
        two: 3,
        three: 4,
        four: 2,
        five: 4,
        six: 3,
        seven: 1,
        eight: 3,
        nine: 1,
        ten: 3,
        fun: "painting dead people"
    },{
        name: "Phebe Lyness",
        age: 42,
        one: 2,
        two: 3,
        three: 3,
        four: 2,
        five: 4,
        six: 1,
        seven: 1,
        eight: 3,
        nine: 4,
        ten: 4,
        fun: "buying frozen pizza, potato chips and soda at Whole Foods"
    },{
        name: "Zetta Hale",
        age: 50,
        one: 2,
        two: 4,
        three: 3,
        four: 2,
        five: 1,
        six: 1,
        seven: 1,
        eight: 1,
        nine: 4,
        ten: 5,
        fun: "drag racing my Tesla"
    }
];

var namesTotals = [];

Array.prototype.match = function(newFriend){
    console.log("friends newFriend: ",newFriend);
    for(i=0; i<tableArray.length-1; i++){
        var oneDiff = Math.abs(parseInt(newFriend.one) - parseInt(tableArray[i].one));
        var twoDiff = Math.abs(parseInt(newFriend.two) - parseInt(tableArray[i].two));
        var threeDiff = Math.abs(parseInt(newFriend.three) - parseInt (tableArray[i].three));
        var fourDiff = Math.abs(parseInt(newFriend.four) - parseInt(tableArray[i].four));
        var fiveDiff = Math.abs(parseInt(newFriend.five) - parseInt(tableArray[i].five));
        var sixDiff = Math.abs(parseInt(newFriend.six) - parseInt(tableArray[i].six));
        var sevenDiff = Math.abs(parseInt(newFriend.seven) - parseInt(tableArray[i].seven));
        var eightDiff = Math.abs(parseInt(newFriend.eight) - parseInt(tableArray[i].eight));
        var nineDiff = Math.abs(parseInt(newFriend.nine) - parseInt(tableArray[i].nine));
        var tenDiff = Math.abs(parseInt(newFriend.ten) - parseInt(tableArray[i].ten));
        var totalDiff = oneDiff + twoDiff + threeDiff + fourDiff + fiveDiff + sixDiff + sevenDiff + eightDiff + nineDiff + tenDiff;
        var returnArray = [];
        var returnObject = {};
        returnObject.one = oneDiff;
        returnObject.two = twoDiff;
        returnObject.three = threeDiff;
        returnObject.four = fourDiff;
        returnObject.five = fiveDiff;
        returnObject.six = sixDiff;
        returnObject.seven = sevenDiff;
        returnObject.eight = eightDiff;
        returnObject.nine = nineDiff;
        returnObject.ten = tenDiff;
        returnObject.total = totalDiff;
        returnObject.names = tableArray[i].name + " and " + newFriend.name;
        returnArray.push(returnObject);
        namesTotals.push({
            name: returnObject.names,
            score: returnObject.total
        });
    }
    var theReturn = [];
    theReturn.push(returnArray,namesTotals);
    var minScore = {};
    minScore.score = 40;
    minScore.thing = "thing";
    for(let i=0; i<returnArray.length; i++){
        console.log("returnArray[i].total",returnArray[i].total);
        if(returnArray[i].total < minScore.score){
            minScore.score = returnArray[i].total;
            minScore.name = returnArray[i].name;
            console.log("returnArray[i]: ",returnArray[i])
            console.log("tableArray[i]: ",tableArray[i])
            minScore.wholeScore = tableArray[i];
            console.log("minScore: ",minScore.name);
        }
    }
    console.log("minScore: ",minScore);
    return minScore;
}

// -/-*/-*/-/-/-/-/-/-*/-*/-*/-*/-*/-/-*/-/-/-/-/-/-*/-*
// Why does it only pick Nan McRodden?!?!?!?!?
// -/-*/-*/-/-/-/-/-/-*/-*/-*/-*/-*/-/-*/-/-/-/-/-/-*/-*




module.exports = tableArray;