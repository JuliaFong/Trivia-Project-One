//player one

const questionDiv = $('.question')
const answerUl = $('.answers')

const playerOne = {
    name: [],
    age: 0,
    score: 0,
    overallScore: 0,
}
const missedQuestions = []

const game = {
    round: 1,
    time: 30,
    questions: [

        {
            question: 'Who originated the role of Galinda the Good Witch from the Musical Wicked?',
            answers: ['Julie Andrews',
                'Ariana Grande',
                'Kristin Chenowith',
                'Sarah Jessica Parker'
            ],
            answer: 'Kristin Chenowith',
            type: 'multiple choice',
            difficulty: 1,
            media: 'null'

        },
        {
            //img of the last 5 years
            question: 'Which composer wrote an entire musical based off of his marriage and divorce? ',
            answers: [' Jason Robert Brown',
                'Bob Dylan',
                'Stephen Sondheim',
                'Sir Andrew Lloyd Weber'

            ],
            answer: 'Jason Robert Brown',
            type: 'image',
            difficulty: 1,
            media: './static/img1.jpg'

        },
        {
            question: 'What Disney movie has NOT been adapted as a Broadway Musical?',
            answers: [' Beauty and the Beast',
                'Tarzan',
                'Mulan',
                'The little mermaid'
            ],
            answer: 'Mulan',
            type: 'multiple choice',
            difficulty: 1,
            media: 'null'
        },
        {
            //video of chicago
            question: 'Who is the original choreographaphor of this musical?',
            answers: ['Gene Kelly',
                ' Stephen Sondheim',
                ' Savion Glover',
                ' Bob Fosse'

            ],
            answer: 'Bob Fosse',
            type: 'video',
            difficulty: 1
            media: './static/'
        },
        //picture of cats the musical
        {
            question: 'Who composed the musical pictured above?',
            answers: ['Andrew Lloyd Webber',
                ' Sir Andrew Lloyd Webber',
                ' Rogers & Hammerstien',
                ' Bob Fosse'
            ],
            answer: 'Sir Andrew Lloyd Webber',
            type: 'image',
            difficulty: 1
        },
        { //Singing in the rain good morning video
            question: ' Who starred and co-choreographed the musical "Singing in the Rain"?',
            answers: ['Donald OConnor',
                'Debbie Reynolds',
                'Stanley Donen',
                'Gene Kelly'
            ],
            answer: 'Gene Kelly',
            type: 'video',
            difficulty: 2
        },
        {
            question: ' Which one did Stephen Sondheim NOT compose?',
            answers: ['Sunday in the park with George',
                ' Sweeney Todd',
                ' Into the Woods',
                'Little shop of horrors'
            ],
            answer: 'Little Shop of Horrors',
            type: 'multiple choice',
            difficulty: 2,
            media: 'null'

        },
        {
            //round three
            question: 'Who originally sang the song "Will he like me?" from the 1994 musical, "She loves me"',
            answers: ['Barbara Streisand',
                ' Barbara Cook',
                ' Audra Mcdonald',
                ' Laura Benanti'
            ],
            answer: 'Barbara Cook',
            type: 'multiple choice',
            difficulty: 2,
            media: 'null'
        },
        {
            question: 'Who originated the role of Eva Peron in the musical Evita?',
            answers: ['Audra McDonald',
                'Julie Andrews',
                'Patti LuPone',
                'Barbara Cook'
            ],
            answer: 'Pattie LuPone',
            type: 'multiple choice',
            difficulty: 2,
            media: 'null'
        },
        {
            question: 'finish this lyric from the musical Thouroughly modern millie,I dont careif hes a nobody',
            answers: ['Thick n thin Rich or Poor ',
                'Gimme Gimme that thing called love',
                'I dont careif hes a nobody',
                'In my heart hell be a somebody '
            ],
            answer: 'In my heart hell be a somebody ',
            type: 'multiple choice',
            difficulty: 3,
            media: 'null'

        },
        {
            question: 'Who did Sir Andrew Lloyd Webber write "Phantom of the Opera for?"',
            answers: ['Julie Andrews',
                'Sarah Brightman',
                'Bernadette Peters',
                'Audra McDonald'
            ],
            answer: 'Sarah Brightman',
            type: 'multiple choice',
            difficulty: 3,
            media: 'null'
        },
        {
            question: 'What family is the musical "Grey Gardens," based on?',
            answers: ['The Kardashians',
                ' The Kennedys',
                ' The Jackson 5',
                ' The Obamas'
            ],
            answer: 'The Kennedys',
            type: 'multiple choice',
            difficulty: 3,
            media: 'null'
        }, {
            question: ' What was the first musical to be made into a movie?',
            answers: ['My Fair Lady',
                'Sound of Music',
                'The Jazz Singer',
                'Grease'
            ],
            answer: 'The Jazz Singer',
            type: 'multiple choice',
            difficulty: 3,
            media: 'null'
        },
        {
            question: 'What musical is this from, Deep in December its nice to remember,The fire of September that made us mellow.?',
            answers: ['The Fantasticks',
                'Wicked',
                'Suessical the Musical',
                'My Fair Lady'
            ],
            answer: 'The Fantasticks',
            type: 'multiple choice',
            difficulty: 3,
            media: 'null'

        },
        {
            question: 'What is considered the first book musical?',
            answers: ['Ragtime',
                ' Showboat',
                ' Oklahoma!',
                ' Sound of Music'
            ],
            answer: 'Showboat',
            type: 'multiple choice',
            difficulty: 4,
            media: 'null'
        },

        {
            question: 'Who won the first EGOT?',
            answers: ['Richard Rogers',
                ' Cole Porter',
                ' Audrey Hepburn',
                ' Irving Berlin'
            ],
            answer: 'Richard Rogers',
            type: 'multiple choice',
            difficulty: 4,
            media: 'null'

        },
        {
            question: 'Finish this lyric from Wicked, the musical, Was I really seeking good, Or just seeking attention ?',
            answers: ['All right, enough So be it, so be it then',
                'All helpful urges should be circumvented',
                'Sure, I meant well. Well, look at what well-meant did',
                'Is that all good deeds are When looked at with an ice-cold eye?'
            ],
            answer: 'Is that all good deeds are When looked at with an ice-cold eye?',
            type: 'multiple choice',
            difficulty: 4,
            media: 'null'
        },
        { //video of ariana grande singing in 13
            question: 'which pop star got her start singing on broadway?',
            answers: ['Lady Gaga',
                ' Ariana Grande',
                ' Katy Perry',
                ' Sarah Jessica Parker'
            ],
            answer: 'Ariana Grande',
            type: 'video',
            difficulty: 4
            media:
        },
        {
            question: 'What is the longest running Broadway show?',
            answers: ['Phantom of the Opera',
                'Oklahoma!',
                'Wicked',
                'Chicago',
            ],
            answer: 'Phantom of the Opera',
            type: 'multiple choice',
            difficulty: 4,
            media: 'null'

        },

        {
            question: ' What is considered the first musical?',
            answers: ['Black Crook',
                ' Showboat',
                ' Oklahoma',
                ' South Pacific'
            ],
            answer: 'Black Crook',
            type: 'multiple choice',
            difficulty: 5,
            media: 'null'
        },

        {
            question: 'Who is the first woman to win an EGOT?',
            answers: ['Helen Hayes',
                ' Audrey Hepburn',
                ' Whoopi Goldbery',
                ' Rita Moreno'
            ],
            answer: 'Helen Hayes',
            type: 'multiple choice',
            difficulty: 5,
            media: 'null'
        },
        {
            //img of sheet music
            question: 'Who wrote this song, and what musical is this from?',
            answers: [' Lorenz Hart, Cinderella',
                'Cole Porter, Anastasia',
                'Richard Rogers, Cinderella',
                'Irving Berlin, Anastasia',
            ],
            answer: 'Richard Rogers, Cinderella',
            type: 'image',
            difficulty: 5
            media: './static'
        },
        { //the fantastick sheet music
            question: ' what musical is this song from?',
            answers: [' Sound of Music',
                'Cinderella',
                'The fantasticks',
                'Beauty and the Beast'

            ],
            answer: 'The Fantasticks',
            type: 'image',
            difficulty: 5
            media:
        },
        { //video
            question: 'What actress starred in the musical Annie in 1979 and made her broadway debut?',
            answers: ['Lucy Lui',
                'Sarah Jessica Parker',
                'Cynthia Nixon',
                'Kristin Davis'
            ],
            answer: 'Sarah Jessica Parker',
            type: 'video',
            difficulty: 5,
            media:

        },

    ],
    startGame() {
        while (this.rounds <= 5) {
            setTimer.call
        }
    },
    chooseQuestion() {
        // should organize questions by difficulty [check game.round] and then grab a random one
        console.log('This is chooseQuestion()!')

        if (game.round == 1 && game.difficulty == 1) {

        }
        if (game.round == 2 && game.difficulty == 2) {

        }
        if (game.round == 3 && game.difficulty == 3) {

        }
        if (game.round == 4 && game.difficulty == 4) {

        }
        if (game.round == 5 && game.difficulty == 5) {

        }
    },
    checkQuestion() {
        // check what kind of question it is [multiple choice, image whatever] and set timer
        console.log('This is checkQuestion()!')
        if (game.question == multipleChoice == image == video) { this.checkQuestion }
    },
    //Set up round goes here
    getUserAnswer() {
        // get the user answer from the DOM
        console.log('This is getUserAnswer()!')
    },
    checkAnswer() {
        // compare user answer to question object answer and either start round over or end game if over
        console.log('This is checkAnswer()!')
        this.round++
            //$('#score').text(`overallScore: ${this.score}`);
    }

}

function setUpRound() {
    const roundQuestions = game.questions.filter(q => q.difficulty === game.round)
    const random = Math.floor(Math.random() * roundQuestions.length)
    const selectedQuestion = roundQuestions.splice(random, 1)[0]
    console.log(selectedQuestion);
    questionDiv.text(selectedQuestion.question);
    answerUl.text('')
    for (let i = 0; i < selectedQuestion.answers.length; i++) {
        if (selectedQuestion.answers[i] === selectedQuestion.answer) {
            // right answer
            answerUl.append(`<button id="correct-answer">${selectedQuestion.answers[i]}</button>`)
        } else {
            // 3 wrong answers
            answerUl.append(`<button class="answer">${selectedQuestion.answers[i]}</button>`)
        }
    }
    // click listener for right answer
    $('#correct-answer').on('click', (e) => {
        if ($(e.target).text().trimStart() === selectedQuestion.answer) {
            alert('you got it right!!')
            playerOne.score += 1;
            setUpRound();
        }
    });

    // click listener for wrong answers
    $('.answer').on('click', (e) => {
        if ($(e.target).text().trimStart() === selectedQuestion.answer) {
            alert('you got it right!!')
            playerOne.score += 1
        } else {
            alert('WRONG!!')
            playerOne.score -= 1
        }
        console.log(playerOne.score)
        answerUl.text('')
        setUpRound()
    });
    game.time = selectedQuestion.type === "multiple choice" ? 30 : selectedQuestion.type === "image" ? 60 : 90;
    if (game.round === 1) {
        const $timer = $('#timer');
        const interval = setInterval(() => {
            if (game.time === 0) {
                clearInterval(interval);
                game.round++
            } else {
                game.time--
            }
            $timer.text(game.time)
                // at certain time of interval fire alert
                // alert('uh oh! Running out of time!!!');
                //}, 1000)
        }, 1000);

        // for (let i = 0; i < selectedQuestion.answers.length; i++) {
        //     if (selectedQuestion.answers[i] === selectedQuestion.answer) {
        //         // right answer
        //         answerUl.append(`<button id="correct-answer">${selectedQuestion.answers[i]}</button>`)
        //     } else {
        //         // 3 wrong answers
        //         answerUl.append(`<button class="answer">${selectedQuestion.answers[i]}</button>`)
        //     }
        // }
    };
}
$('#start-button').on('click', (e) => {
    setUpRound()
});