var human = {};
$("#submit").on("click",function(event){
    event.preventDefault();

    var name = $("#name").val();
    human.name = name;
    var age = $("#age").val();
    human.age = age;
    var one = $("#one").val();
    human.one = one;
    var two = $("#two").val();
    human.two = two;
    var three = $("#three").val();
    human.three = three;
    var four = $("#four").val();
    human.four = four;
    var five = $("#five").val();
    human.five = five;
    var six = $("#six").val();
    human.six = six;
    var seven = $("#seven").val();
    human.seven = seven;
    var eight = $("#eight").val();
    human.eight = eight;
    var nine = $("#nine").val();
    human.nine = nine;
    var ten = $("#ten").val();
    human.ten = ten;
    var fun = $("#fun").val();
    human.fun = fun;

    console.log("human",human);

    
    $.post("/api/friends",human,function(data){
        console.log("survey received: ",data);
        $(".modal").css("display","block");
    })
    var match = {};

    $.post("/api/match/",human,function(data){
        console.log("this is it: ",data);
        console.log("data: ",data);
        match = data;
        console.log("match name: ",match.wholeScore.name);
        console.log("match activity: ",match.wholeScore.fun);
        $("#matchAge").text(match.wholeScore.age);
        $(".matchName").text(match.wholeScore.name);
        $("#matchActivity").text(match.wholeScore.fun);
        var picIndex = Math.floor(Math.random() * 9);
        $("#matchPic").attr("src","/images/goats/" + picIndex + ".jpg");
    })
    
    $("#show").attr("id","hide");
    $(".youName").text(human.name);
    $("#youPic").attr("src",human.img);
    $("#youActivity").text(human.fun);
    $("#youAge").text(human.age);
})


$("#photo").on("click",function(event){
    event.preventDefault();

    for(var i = 0; i < 8; i++){
        var image = $('<img>');
        image.addClass("profilePic");
        image.attr('src', "/images/nonGoats/" + i + ".jpg");
        $("#images").append(image);
    }
 
})

$(document).on("click", '.profilePic', function(event){
    event.preventDefault();
    human.img = $(this).attr('src');

    $(".profilePic").addClass("hide");
    $(this).attr("id","show");
});


