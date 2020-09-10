const question = {
    questionMessage: 'QUESTION_MESSAGE',
    answerMessage: 'Thanks!',
    options: [
        {
            name: 'Option 1',
            value: 'option1'
        },
        {
            name: 'Option 2',
            value: 'option2'
        },
        {
            name: 'Option 3',
            value: 'option3'
        },
        {
            name: 'Option 4',
            value: 'option4'
        },
    ]
};

export default {
    getQuestion: () => {
        return question;
    }
}