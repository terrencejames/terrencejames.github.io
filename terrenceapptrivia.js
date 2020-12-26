Survey
    .StylesManager
    .applyTheme("modern");

var name = "";
var json = {
    title: "$$ TERRENCEAPPTRIVIA $$",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 60,
    maxTimeToFinish: 660,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "MERRY CHRISTMAS SIGN IN WITH YOUR TERRENCEAPP TAG TO ENTER. EVEN IF YOU GET A QUESTION WRONG KEEP PLAYING YOU MIGHT WIN"
                }
            ]
        }, {
            questions: [
                {
                    type: "text",
                    name: "name",
                    title: "WHAT'S YOUR TERRENCE APP TAG",
                    choices: [
                        "#Uldy", "#Bryan", "#Fursty", "#James", "#Jan", "#Jorge", "#Paula", "#Benjo", "#Mark", "#Marion", "#Aaron", "#Stephanie", "#Ryan", "#Megan", "#Other",
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "1",
                    title: "WHAT'S TERRENCE'S FAVORITE CANDLE SCENT",
                    choicesOrder: "random",
                    choices: [
                        "DESSERTS", "FLORALS", "EIZEN PEEING ON MY CARPET", "FRUITY", "WOODSY"
                    ],
                    correctAnswer: "DESSERTS"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "2",
                    title: "WHAT IS TERRENCE'S FAVORITE TYPE OF PASTRY",
                    choicesOrder: "random",
                    choices: [
                        "COOKIES", "CAKES", "DONUTS", "PANDESAL", "HOPIA", "MOONCAKE"
                    ],
                    correctAnswer: "COOKIES"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "3",
                    title: "WHAT IS TERRENCE'S POSITION AT WORK",
                    choicesOrder: "random",
                    choices: [
                        "SOFTWARE ENGINEER I", "SOFTWARE ENGINEER II", "SOFTWARE ENGINEER III", "SOFTWARE DEVELOPMENT ENGINEER I", "SOFTWARE DEVELOPMENT ENGINEER II", "SOFTWARE DEVELOPMENT ENGINEER III"
                    ],
                    correctAnswer: "SOFTWARE ENGINEER III"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "4",
                    title: "WHAT DOES TERRENCE DO AT WORK",
                    choicesOrder: "random",
                    choices: [
                        "MOBILE DEVELOPMENT", "WEB DEVELOPMENT", "SERVER DEVELOPMENT", "IOS/ANDROID DEVELOPMENT", "SOFTWARE DEVELOPMENT"
                    ],
                    correctAnswer: "MOBILE DEVELOPMENT"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "5",
                    title: "WHO IS TERRENCE'S SPOTIFY ARTIST OF THE YEAR",
                    choicesOrder: "random",
                    choices: [
                        "JAMES REID", "YOKO SHIMOMURA", "NOBUO UEMATSU", "ARIANA GRANDE", "AIMER", "LiSA"
                    ],
                    correctAnswer: "JAMES REID"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "6",
                    title: "WHICH JRPG DID TERRENCE SPEND THE MOST TIME ON IN THE PAST COUPLE YEARS",
                    choicesOrder: "random",
                    choices: [
                        "KINGDOM HEARTS III", "PERSONA 5", "FINAL FANTASY VII REMAKE", "KINGDOM HEARTS II", "FIRE EMBLEM THREE HOUSES", "NIER AUTOMATA"
                    ],
                    correctAnswer: "PERSONA 5"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "7",
                    title: "HOW MANY HOURS DOES TERRENCE HAVE LOGGED IN SMASH",
                    choicesOrder: "random",
                    choices: [
                        "200-300", "300-400", "400-500", "500-600", "600-700", "700-800"
                    ],
                    correctAnswer: "500-600"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "8",
                    title: "WHAT IS TERRENCE'S FAVORITE TYPE OF GAME",
                    choicesOrder: "random",
                    choices: [
                        "PUZZLE", "JRPG", "MMO", "VISUAL NOVEL", "ZOMBIE", "ANIME/WEEB"
                    ],
                    correctAnswer: "VISUAL NOVEL"
                }
            ]
        },  {
          questions: [
              {
                  type: "radiogroup",
                  name: "9",
                  title: "WHICH ANIME DOES TERRENCE LIKE THE LEAST",
                  choicesOrder: "random",
                  choices: [
                      "NARUTO", "SHINGEKI NO KYOJIN", "MY HERO ACADEMIA", "FREE!", "OURAN HIGH SCHOOL HOST CLUB", "SWORD ART"
                  ],
                  correctAnswer: "MY HERO ACADEMIA"
              }
          ]
        },  {
            questions: [
                {
                    type: "radiogroup",
                    name: "10",
                    title: "GOOGLE THESE GUYS AND WHO DO YOU THINK IS THE CLOSEST TO TERRENCE'S TYPE",
                    choicesOrder: "random",
                    choices: [
                        "JAMES REID", "PAOLO PANGILINAN", "ELIJAH CANLAS", "ALBIE CASINO", "MANNY PACQUIAO", "INIGO PASCUAL"
                    ],
                    correctAnswer: "ELIJAH CANLAS"
                }
            ]
        },  {
            questions: [
                {
                    type: "radiogroup",
                    name: "11",
                    title: "GOOGLE THESE GIRLS AND WHO DO YOU THINK IS THE CLOSEST TO TERRENCE'S TYPE",
                    choicesOrder: "random",
                    choices: [
                        "LIZA SOBERANO", "NADINE LUSTRE", "KZ TANDINGAN", "SARAH GERONIMO", "PIA WURTZBACH", "TONI GONZAGA"
                    ],
                    correctAnswer: "LIZA SOBERANO"
                }
            ]
        },
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4> WOW BINCH YOU THINK YOU KNOW A PERSON BUT I GUESS I'LL GIVE YOU A PRIZE. HONESTLY IF YOU WERE CONTEMPLATING PAOLO PANGILINAN / NADINE LUSTRE FOR THE LAST TWO ANSWERS I GUESS I CAN ACCEPT THOSE TOO. SCREENSHOT THIS PAGE AND SEND/TAG TO TERRENCE"
};

window.survey = new Survey.Model(json);


survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "WHY TF DID YOU PUT THESE ANSWERS:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
