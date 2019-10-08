//player one

const questionDiv = $('.question')
const answerUl = $('.answers')

const playerOne = {
    name: [],
    age: 0,
    score: 0,
    overallScore: 0,
}

const game = {
    round: 0,
    questions: [
        //picture of cats the musical
        {
            question: 'Who composed the musical pictured above?',
            answers: ['Andrew Lloyd Webber',
                ' Sir Andrew Lloyd Webber',
                ' Rogers & Hammerstien',
                ' Bob Fosse'

            ],
            answer: 'Sir Andrew Lloyd Webber',
            type: 'multiple choice',
            difficulty: 1
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
            difficulty: 5
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
            difficulty: 4
        },

        {
            question: ' What was the first musical to be made into a movie?',
            answers: ['My Fair Lady',
                'Sound of Music',
                'The Jazz Singer',
                'Grease'
            ],
            answer: 'The Jazz Singer',
            type: 'multiple choice',
            difficulty: 3
        },

        { //Singing in the rain good morning video
            question: ' Who starred and co-choreographed the musical "Singing in the Rain"?',
            answers: ['Donald OConnor',
                'Debbie Reynolds',
                'Stanley Donen',
                'Gene Kelly'
            ],
            answer: 'Gene Kelly',
            type: 'multiple choice',
            difficulty: 2
        },
        { // section two
            question: 'What family is the musical "Grey Gardens," based on?',
            answers: ['The Kardashians',
                ' The Kennedys',
                ' The Jackson 5',
                ' The Obamas'
            ],
            answer: 'The Kennedys',
            type: 'multiple choice',
            difficulty: 3
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
            type: 'multiple choice',
            difficulty: 1
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
            difficulty: 2

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
            difficulty: 4
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
            difficulty: 2
        },
        { //video of ariana grande singing in 13
            question: 'which pop star got her start singing on broadway?',
            answers: ['Lady Gaga',
                ' Ariana Grande',
                ' Katy Perry',
                ' Sarah Jessica Parker'
            ],
            answer: 'Ariana Grande',
            type: 'multiple choice',
            difficulty: 4
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
            difficulty: 3
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
            difficulty: 1
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
            type: 'multiple choice',
            difficulty: 5
        },
        //round four
        {
            //img of the last 5 years
            question: 'Which composer wrote an entire musical based off of his marriage and divorce? ',
            answers: [' Jason Robert Brown',
                'Bob Dylan',
                'Stephen Sondheim',
                'Sir Andrew Lloyd Weber'

            ],
            answer: 'Jason Robert Brown',
            type: 'multiple choice',
            difficulty: 1
        },
        { //the fantastick sheet music
            question: ' what musical is this song from?',
            answers: [' Sound of Music',
                'Cinderella',
                'The fantasticks',
                'Beauty and the Beast'

            ],
            answer: 'The Fantasticks',
            type: 'multiple choice',
            difficulty: 5
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
            difficulty: 3

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
            difficulty: 4
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
            difficulty: 2
        },
        // round 5.. finale!!
        {
            question: 'Who originated the role of Galinda the Good Witch from the Musical Wicked?',
            answers: ['Julie Andrews',
                'Ariana Grande',
                'Kristin Chenowith',
                'Sarah Jessica Parker'
            ],
            answer: 'Kristin Chenowith',
            type: 'multiple choice',
            difficulty: 1

        }, { //img of sheet music "In the heights and video of song"
            question: 'Who wrote, composed, and starred in this musical?',
            answers: [' Lin Manuel Miranda, In the Heights',
                'Stephen Sodheim, Into the Woods',
                'Lin Manuel Miranda, Hamilton',
                'Stephen Sondheim, Sweeney Todd'
            ],
            answer: 'Lin Manuel Miranda, In the Heights',
            type: 'multiple choice',
            difficulty: 2
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
            difficulty: 3

        },
        {
            question: 'What actress starred in the musical Annie in 1979 and made her broadway debut?',
            answers: ['Lucy Lui',
                'Sarah Jessica Parker',
                'Cynthia Nixon',
                'Kristin Davis'
            ],
            answer: 'Sarah Jessica Parker',
            type: 'multiple choice',
            difficulty: 5
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
            difficulty: 4

        }
    ]
}






const setUpRound = () => {
    const random = Math.floor(Math.random() * questions.length)
    questionDiv.text(questions[random].question)
    if (this.round === 0) {
        setTimer(function() {
                const $timer = $('#timer');
                const interval = setInterval(() => {
                    if (this.time === 0) {
                        clearInterval(interval);
                        this.round++
                    } else {
                        this.time--
                    }
                    $timer.text(`timer: {this.time}`)
                })
            },
            3000)

    };



    for (let i = 0; i < questions[random].answers.length; i++) {
        answerUl.append(`<button>${questions[random].answers[i]}</button>`)
    }
    $('button').on('click', (e) => {

        if ($(e.target).text().trimStart() === questions[random].answer) {
            alert('you got it right!!')
            playerOne.score += 1
        } else {
            alert('WRONG!!')
            playerOne.score -= 1
        }
        console.log(playerOne.score)
        answerUl.text('')
        setUpRound()
    })
};

function setUpRound() {
    questions.push()

}