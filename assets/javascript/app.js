var correct = 0;
var wrong = 0;
var questionIndex = 0;
var intervalId;
var clockRunning = false;
var time = 10;

$("#start-btn").click(function () {
    $("#intro").hide();
    $("#q_a").css("display", "block")
});

$(".answ-btn").click(function () {
    $("#q_a").hide();
    $(".funGif").attr("src", `assets/images/${questionIndex + 1}.gif`)
    $("#y_n").css("display", "block")
});

$("#cont-btn").click(function () {
    $("#y_n").hide();
    $("#q_a").css("display", "block")
    questionIndex++;
});


var questions = [
    {
        q: "How many daughters does King Triton have?",
        a1: "5",
        a2: "7",
        a3: "10",
        a4: "13",
        correct: "7"
    },
    {
        q: "What is the name of Jasmine's tiger?",
        a1: "Raja",
        a2: "Apu",
        a3: "Sher",
        a4: "Khan",
        correct: "Raja"
    },
    {
        q: "What name does Ursula take when disguised as a human?",
        a1: "Mary",
        a2: "Victoria",
        a3: "Sarah",
        a4: "Vanessa",
        correct: "Vanessa"
    },
    {
        q: "What is Snow White poisoned with?",
        a1: "A peach",
        a2: "A plum",
        a3: "An apple",
        a4: "A pear",
        correct: "An apple"
    },
    {
        q: "Who is Rapunzel's love interest?",
        a1: "Prince Eric",
        a2: "Prince Adam",
        a3: "John Smith",
        a4: "Flynn Ryder",
        correct: "Flyn Ryder"
    },
    {
        q: "Which country is Belle from?",
        a1: "England",
        a2: "France",
        a3: "Italy",
        a4: "Spain",
        correct: "France"
    },
    {
        q: "Who is the leader of the seven dwarfs?",
        a1: "Happy",
        a2: "Doc",
        a3: "Grumpy",
        a4: "Dopey",
        correct: "Doc"
    },
    {
        q: "What is the name of city in Aladdin?",
        a1: "Baghdad",
        a2: "Arabia",
        a3: "Agrabah",
        a4: "Persia",
        correct: "Agrabah"
    },
    {
        q: "Who is Sleeping Beauty's true love?",
        a1: "Prince Charming",
        a2: "Prince Phillip",
        a3: "Prince Adam",
        a4: "Prince Eric",
        correct: "Prince Phillip"
    },
    {
        q: "Who is Ariel's best friend?",
        a1: "Ursula",
        a2: "Dory",
        a3: "Flounder",
        a4: "Marvin",
        correct: "Flounder"
    }

]

$("#start-btn").on("click", start);
$("#cont-btn").on("click", start);
$(".answ-btn").on("click", stop);
$(".setGame").on("click", setGame);

function setGame() {
    //shortcut
    // window.location.reload()
    //long version
    console.log("click");
    questionIndex = 0;
    start();
    renderQuestion();
    $("#noTime").hide();
    $("#final").hide();
    $("#q_a").css("display", "block")
}

// function reset() {
//     time = 10;
//     $("#timer").text("00:10");
// }

function start() {
    time = 10;
    $("#timer").text("00:10");
    console.log(time)
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }else{
        clearInterval(intervalId);
    }
    
}

function count() {
    time--;
    var converted = timeConverter(time);
    console.log(converted);
    $("#timer").text(converted);
    if (time === 0) {
        stop();
        $("#q_a").hide();
        $("#noTime").css("display", "block")
    }
}
function stop() {
    
    clearInterval(intervalId);
    clockRunning = false;
    var converted = timeConverter(time);
    console.log(converted)
    $("#stopTime").text(converted);
}
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
function renderQuestion() {
    console.log("Render function")

    console.log(questionIndex);
    console.log(questions.length)
    if (questionIndex <= (questions.length - 1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
        document.querySelector("#answer1").innerHTML = questions[questionIndex].a1;
        document.querySelector("#answer2").innerHTML = questions[questionIndex].a2;
        document.querySelector("#answer3").innerHTML = questions[questionIndex].a3;
        document.querySelector("#answer4").innerHTML = questions[questionIndex].a4;
    } else if (questionIndex === questions.length) {
        $("#y_n").hide();
        $("#q_a").hide();
        // $("noTime").hide();
        $("#final").css("display", "block")
        document.querySelector("#corTally").innerHTML = correct;
        document.querySelector("#wrongTally").innerHTML = wrong;
        stop();
        return;
        // $("#corTally").text(correct);
        // $("#wrongTally").text(wrong);
    }
}
// $(".timeout").click(function () {
//     $("#noTime").hide();
//     $("#final").hide();
//     $("#q_a").css("display", "block")
// stop();
// start();

// })
$(".qbtn").on("click", renderQuestion);
$(".timeout").click(function () {
    $("#noTime").hide();
    $("#final").hide();
    $("#q_a").css("display", "block")
    stop();
    start();

})
$(".answ-btn").on("click", function () {

    var userChoice = $(this).text();
    console.log(userChoice);
    if (userChoice === questions[questionIndex].correct) {
        correct++;
        $("#yesOrNo").text("You are correct!");
        $("#itWas").text(questions[questionIndex].correct);
        // displayImage();

    }
    else {
        wrong++;
        $("#yesOrNo").text("Oh no! It's wrong!");
        $("#itWas").text(questions[questionIndex].correct);
        // displayImage();


    }
})
