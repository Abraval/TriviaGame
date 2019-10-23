

$("#start-btn").click(function () {
    $("#intro").hide();
    $("#q_a").css("display", "block")
});

$(".answ-btn").click(function () {
    $("#q_a").hide();
    $("#y_n").css("display", "block")
});

$("#cont-btn").click(function () {
    $("#y_n").hide();
    $("#q_a").css("display", "block")
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
        q: "What is the name of Jasmine’s tiger?",
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
        q: "Who is Rapunzel’s love interest?",
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
        q: "Who is Sleeping Beauty’s true love?",
        a1: "Prince Charming",
        a2: "Prince Phillip",
        a3: "Prince Adam",
        a4: "Prince Eric",
        correct: "Prince Phillip"
    },
    {
        q: "Who is Ariel’s best friend?",
        a1: "Ursula",
        a2: "Dory",
        a3: "Flounder",
        a4: "Marvin",
        correct: "Flounder"
    }

]

