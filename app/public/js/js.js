$("#submit").on("click",function(event){
    event.preventDefault();

    var human = {};

    var name = $("#name").val();
    console.log("name",name);
    human.name = name;

    var age = $("#age").val();
    console.log("age",age);
    human.age = age;
    
    var one = $("#one").val();
    console.log("one",one);
    human.one = one;
    
    var two = $("#two").val();
    console.log("two",two);
    human.two = two;

    var three = $("#three").val();
    console.log("three",three);
    human.three = three;

    var four = $("#four").val();
    console.log("four",four);
    human.four = four;

    var five = $("#five").val();
    console.log("five",five);
    human.five = five;

    var six = $("#six").val();
    console.log("six",six);
    human.six = six;

    var seven = $("#seven").val();
    console.log("seven",seven);
    human.seven = seven;

    var eight = $("#eight").val();
    console.log("eight",eight);
    human.eight = eight;

    var nine = $("#nine").val();
    console.log("nine",nine);
    human.nine = nine;

    var ten = $("#ten").val();
    console.log("ten",ten);
    human.ten = ten;

    console.log("human",human);
    
    $.post("/api/friends",human,function(data){
        console.log("data",data);
    })
})
