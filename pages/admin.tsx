import React, {useState, useEffect} from 'react';
import Card from '../components/QuestionCard'
import {Select, MenuItem, ButtonGroup, Button, Divider, Typography} from '@material-ui/core'

import services from '../services'

const {listQuestions} = services;

const Admin = () => {
    const [displayedQuestionId, setDisplayedQuestionId] = useState('');
    const [displayedQuestion, setDisplayedQuestion] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [questions, setQuestions] = useState([]);
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedQuestionId = event.target.value as string;
        const question = questions.filter(({questionId})=> selectedQuestionId===questionId)[0]
        setDisplayedQuestionId(selectedQuestionId);
        setDisplayedQuestion(question);
    };
    useEffect(() => {
        setQuestions(listQuestions())
        setDisplayedQuestion(questions[0]);
        setCurrentQuestion(questions.filter(({selected})=> selected)[0] || {})
        console.log(currentQuestion)
    })
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
            {/* <Typography> Pregunta en Curso {currentQuestion.shortQuestionMessage}</Typography> */}
        </>
    );
}
export default Admin;