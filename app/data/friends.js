var tableArray = [];

Array.prototype.match = function(name){
    console.log("made it this far",name);
    var newFriend;
    var returnArray = [];
    for(let i=0; i<tableArray.length; i++){
        if(tableArray[i].name===name){
            newFriend = tableArray[i];
        };
    }
    for(i=0; i<tableArray.length; i++){
        var oneDiff = Math.abs(parseInt(newFriend.one) - parseInt(tableArray[i].one));
        var twoDiff = Math.abs(parseInt(newFriend.two) - parseInt(tableArray[i].two));
        var threeDiff = Math.abs(parseInt(newFriend.three) -parseInt (tableArray[i].three));
        var fourDiff = Math.abs(parseInt(newFriend.four) - parseInt(tableArray[i].four));
        var fiveDiff = Math.abs(parseInt(newFriend.five) - parseInt(tableArray[i].five));
        var sixDiff = Math.abs(parseInt(newFriend.six) - parseInt(tableArray[i].six));
        var sevenDiff = Math.abs(parseInt(newFriend.seven) - parseInt(tableArray[i].seven));
        var eightDiff = Math.abs(parseInt(newFriend.eight) - parseInt(tableArray[i].eight));
        var nineDiff = Math.abs(parseInt(newFriend.nine) - parseInt(tableArray[i].nine));
        var tenDiff = Math.abs(parseInt(newFriend.ten) - parseInt(tableArray[i].ten));
        var totalDiff = oneDiff + twoDiff + threeDiff + fourDiff + fiveDiff + sixDiff + sevenDiff + eightDiff + nineDiff + tenDiff;
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
        returnObject.names = tableArray[i].name + " and " + name;
        returnArray.push(returnObject);
    }
    console.log("returnArray: ",returnArray);
    return returnArray;
}




module.exports = tableArray;