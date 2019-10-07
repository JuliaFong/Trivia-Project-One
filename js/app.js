//player one

const questionDiv = $('.question')
const answersUl = $('.answers')

const playerOne = {
    name: [],
    age: 0,
    score: 0,
    overallScore: 0,
}



const questions = [
    //picture of cats the musical
    {
        question: 'Who composed the musical pictured above?',
        answer: ['Andrew Lloyd Webber',
            ' Sir Andrew Lloyd Webber',
            ' Rogers & Hammerstien',
            ' Bob Fosse'

        ],
        answers: 'Sir Andrew Lloyd Webber',
        type: 'multiple choice'
    },
    {
        question: ' What is considered the first musical?',
        answer: ['Black Crook',
            ' Showboat',
            ' Oklahoma',
            ' South Pacific'
        ],
        answers: 'Black Crook',
        type: 'multiple choice',
    },
    {
        question: 'What is considered the first book musical?',
        answer: ['Ragtime',
            ' Showboat',
            ' Oklahoma!',
            ' Sound of Music'
        ],
        answers: 'Showboat',
        type: 'multiple choice',
    },

    {
        question: ' What was the first musical to be made into a movie?',
        answer: ['My Fair Lady',
            'Sound of Music',
            'The Jazz Singer',
            'Grease'
        ],
        answers: 'The Jazz Singer',
        type: 'multiple choice',
    },

    { //Singing in the rain good morning video
        question: ' Who starred and co-choreographed the musical "Singing in the Rain"?',
        answer: ['Donald OConnor',
            'Debbie Reynolds',
            'Stanley Donen',
            'Gene Kelly'
        ],
        answers: 'Gene Kelly',
        type: 'multiple choice'
    },
    { // section two
        question: 'What family is the musical "Grey Gardens," based on?',
        answer: ['The Kardashians',
            ' The Kennedys',
            ' The Jackson 5',
            ' The Obamas'
        ],
        answers: 'The Kennedys',
        type: 'multiple choice',
    },
    {
        //video of chicago
        question: 'Who is the original choreographaphor of this musical?',
        answer: ['Gene Kelly',
            ' Stephen Sondheim',
            ' Savion Glover',
            ' Bob Fosse'

        ],
        answers: 'Bob Fosse',
        type: 'multiple choice',
    },
    {
        question: ' Which one did Stephen Sondheim NOT compose?',
        answer: ['Sunday in the park with George',
            ' Sweeney Todd',
            ' Into the Woods',
            'Little shop of horrors'
        ],
        answers: 'Little Shop of Horrors',
        type: 'multiple choice',

    },
    {
        question: 'Who won the first EGOT?',
        answer: ['Richard Rogers',
            ' Cole Porter',
            ' Audrey Hepburn',
            ' Irving Berlin'
        ],
        answers: 'Richard Rogers',
        type: 'multiple choice'

    },
    {
        question: 'Who is the first woman to win an EGOT?',
        answer: ['Helen Hayes',
            ' Audrey Hepburn',
            ' Whoopi Goldbery',
            ' Rita Moreno'
        ],
        answers: 'Helen Hayes',
        type: 'multiple choice',
    },
    {
        //round three
        question: 'Who originally sang the song "Will he like me?" from the 1994 musical, "She loves me"',
        answer: ['Barbara Streisand',
            ' Barbara Cook',
            ' Audra Mcdonald',
            ' Laura Benanti'
        ],
        answers: 'Barbara Cook',
        type: 'multiple choice'
    },
    { //video of ariana grande singing in 13
        question: 'which pop star got her start singing on broadway?',
        answer: ['Lady Gaga',
            ' Ariana Grande',
            ' Katy Perry',
            ' Sarah Jessica Parker'
        ],
        answers: 'Ariana Grande',
        type: 'multiple choice'
    },
    {
        question: 'Who did Sir Andrew Lloyd Webber write "Phantom of the Opera for?"',
        answer: ['Julie Andrews',
            'Sarah Brightman',
            'Bernadette Peters',
            'Audra McDonald'
        ],
        answers: 'Sarah Brightman',
        type: 'multiple choice'
    },
    {
        question: 'What Disney movie has NOT been adapted as a Broadway Musical?',
        answer: [' Beauty and the Beast',
            'Tarzan',
            'Mulan',
            'The little mermaid'
        ],
        answers: 'Mulan',
        type: 'multiple choice'
    },
    {
        //img of sheet music
        question: 'Who wrote this song, and what musical is this from?',
        answer: [' Lorenz Hart, Cinderella',
            'Cole Porter, Anastasia',
            'Richard Rogers, Cinderella',
            'Irving Berlin, Anastasia',
        ],
        answers: 'Richard Rogers, Cinderella',
        type: 'multiple choice'
    },
    //round four
    {
        //img of the last 5 years
        question: 'Which composer wrote an entire musical based off of his marriage and divorce? ',
        answer: [' Jason Robert Brown',
            'Bob Dylan',
            'Stephen Sondheim',
            'Sir Andrew Lloyd Weber'

        ],
        answers: 'Jason Robert Brown',
        type: 'multiple choice'
    },
    { //the fantastick sheet music
        question: ' what musical is this song from?',
        answer: [' Sound of Music',
            'Cinderella',
            'The fantasticks',
            'Beauty and the Beast'

        ],
        answers: 'The Fantasticks',
        type: 'multiple choice'
    },
    {
        question: 'finish this lyric from the musical Thouroughly modern millie,I dont careif hes a nobody',
        answer: ['Thick n thin Rich or Poor ',
            'Gimme Gimme that thing called love',
            'I dont careif hes a nobody',
            'In my heart hell be a somebody '
        ],
        answers: 'In my heart hell be a somebody ',
        type: 'multiple choice'

    },
    {
        question: 'Finish this lyric from Wicked, the musical, Was I really seeking good, Or just seeking attention ?',
        answer: ['All right, enough So be it, so be it then',
            'All helpful urges should be circumvented',
            'Sure, I meant well. Well, look at what well-meant did',
            'Is that all good deeds are When looked at with an ice-cold eye?'
        ],
        answers: 'Is that all good deeds are When looked at with an ice-cold eye?',
        type: 'multiple choice'
    },
    {
        question: 'Who originated the role of Eva Peron in the musical Evita?',
        answer: ['Audra McDonald',
            'Julie Andrews',
            'Patti LuPone',
            'Barbara Cook'
        ],
        answers: 'Pattie LuPone',
        type: 'multiple choice'
    },
    // round 5.. finale!!
    {
        question: 'Who originated the role of Galinda the Good Witch from the Musical Wicked?',
        answer: ['Julie Andrews',
            'Ariana Grande',
            'Kristin Chenowith',
            'Sarah Jessica Parker'
        ],
        answers: 'Kristin Chenowith',
        type: 'multiple choice'
    }, { //img of sheet music "In the heights and video of song"
        question: 'Who wrote, composed, and starred in this musical?',
        answer: [' Lin Manuel Miranda, In the Heights',
            'Stephen Sodheim, Into the Woods',
            'Lin Manuel Miranda, Hamilton',
            'Stephen Sondheim, Sweeney Todd'
        ],
        answers: 'Lin Manuel Miranda, In the Heights',
        type: 'multiple choice'
    },
    {
        question: 'What musical is this from, Deep in December its nice to remember,The fire of September that made us mellow.?',
        answer: ['The Fantasticks',
            'Wicked',
            'Suessical the Musical',
            'My Fair Lady'
        ],
        answers: 'The Fantasticks',
        type: 'multiple choice'
    },
    {
        question: 'What actress starred in the musical Annie in 1979 and made her broadway debut?',
        answer: ['Lucy Lui',
            'Sarah Jessica Parker',
            'Cynthia Nixon',
            'Kristin Davis'
        ],
        answers: 'Sarah Jessica Parker',
        type: 'multiple choice'
    },
    {
        question: 'What is the longest running Broadway show?',
        answer: ['Phantom of the Opera',
            'Oklahoma!',
            'Wicked',
            'Chicago',
        ],
        answers: 'Phantom of the Opera',
        type: 'multiple choice'

    }
];





const random = Math.floor(Math.random() * questions.length)
questionDiv.text(questions[random].question)


setUpRound()
const $rounds = $('#rounds');
$rounds.text('round: ${this.round}');
if (this.round === 1) {
    this.questions(25);
    this.time = 30;
} else if (this.round === 2) {
    this.questions(25);
    this.time = 30;
} else if (this.round === 3) {
    this.question(25);
    this.time = 30;
} else if (this.round === 4) {
    this.question(25);
    this.time = 30;
} else if (this.round === 5) {
    this.question(25);
    this.time = 30;
}
const rounds = setUpRound(() => {
    if (this.round === 0) {
        setTimer() {
            const $timer = $('#timer');
            const interval = setInterval(() => {
                if (this.time === 0) {
                    clearInterval(interval);
                    this.round++
                } else {
                    this.time--
                }
                $timer.text(`timer: {this.time}`)

            }, 3000)
        }
    };



    for (let i = 0; i < questions[random].answer.length; i++) {
        answersUl.append(`<input type="checkbox">${questions[random].answer[i]}</input>`)
    }
}
});