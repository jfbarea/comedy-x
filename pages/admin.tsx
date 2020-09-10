import React, {useState} from 'react';
import Card from '../components/QuestionCard'
import {Select, MenuItem, ButtonGroup, Button, Divider} from '@material-ui/core'

import services from '../services'

// const {listQuestions} = services;
const listQuestions = () => {
    return [
        {
            questionMessage: 'BlaBlaBla1',
            shortQuestionMessage: 'Bla1',
            options: [
                {text: 'Text11', score: 23},
                {text: 'Text12', score: 9},
                {text: 'Text13', score: 1},
            ],
            questionId: 'q1',
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
        },
    ]
}
const Admin = () => {
    const [displayedQuestionId, setDisplayedQuestionId] = useState('');
    const [displayedQuestion, setDisplayedQuestion] = useState({});
    const questions = listQuestions();
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedQuestionId = event.target.value as string;
        const question = questions.filter(({questionId})=> selectedQuestionId===questionId)[0]
        setDisplayedQuestionId(selectedQuestionId);
        setDisplayedQuestion(question);
    };
    return (
        <>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={displayedQuestionId}
                onChange={handleChange}
            >
                {questions.map(({shortQuestionMessage,questionId})=> <MenuItem value={questionId}>{shortQuestionMessage}</MenuItem>) }
            </Select>
            <Card {...displayedQuestion}/>
            <Divider/>
            <ButtonGroup orientation="vertical"variant="outlined" color="default" aria-label="outlined primary button group">
                {questions.map(({shortQuestionMessage,questionId})=> <Button key={questionId}>{shortQuestionMessage}</Button>) }
            </ButtonGroup>
        </>
    );
}
export default Admin;