const question = {
    questionMessage: 'QUESTION_MESSAGE',
    answerMessage: 'Thanks!',
    options: [
        {
            text: 'Serio. No quieres ser su colega.',
            id: 'option1'
        },
        {
            text: 'Ciego de coca. ¿Acaso el baño del McD no es un buen sitio para ponerse?.',
            id: 'option2'
        },
        {
            text: 'Unos chavales han puesto música y obviamente, bailas.',
            id: 'option3'
        }
    ]
};
const questionsList = [
    {
        questionMessage: 'BlaBlaBla1',
        shortQuestionMessage: 'Bla1',
        options: [
            {text: 'Text11', score: 23},
            {text: 'Text12', score: 9},
            {text: 'Text13', score: 1},
        ],
        questionId: 'q1',
        selected: false
    },
    {
        questionMessage: 'BlaBlaBla2',
        shortQuestionMessage: 'Bla2',
        options: [
            {text: 'Text21', score: 23},
            {text: 'Text22', score: 9},
            {text: 'Text23', score: 1},
        ],
        questionId: 'q2',
        selected: false
    },
    {
        questionMessage: 'BlaBlaBla3',
        shortQuestionMessage: 'Bla3',
        options: [
            {text: 'Text31', score: 23},
            {text: 'Text32', score: 9},
            {text: 'Text33', score: 1},
        ],
        questionId: 'q3',
        selected: true
    },
    {
        questionMessage: 'BlaBlaBla4',
        shortQuestionMessage: 'Bla4',
        options: [
            {text: 'Text41', score: 23},
            {text: 'Text42', score: 9},
            {text: 'Text43', score: 1},
        ],
        questionId: 'q4',
        selected: false
    },
]
export default {
    getQuestion: () => {
        return question;
    },
    listQuestions: () => {
        return questionsList;
    }
}