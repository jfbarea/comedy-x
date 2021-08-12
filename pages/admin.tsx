import React, {useState, useEffect} from 'react';
import Card from '../components/QuestionCard'
import {Select, MenuItem, ButtonGroup, Button, Divider, Typography, Paper, Grid} from '@material-ui/core'

import settings from '../settings'
import axios from 'axios'


const Admin = () => {
    const [displayedQuestion, setDisplayedQuestion] = useState({questionId: ''});
    const [currentQuestion, setCurrentQuestion] = useState({shortQuestionMessage: '' });
    const [questions, setQuestions] = useState([]);
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedQuestionId = event.target.value as string;
        const question = questions.filter(({questionId})=> selectedQuestionId===questionId)[0]
        setDisplayedQuestion(question);
    };
    const handleReset = () => {
        axios({
            method: 'post',
            url: `${settings.BASE_URL}/question/reset`,
            headers: {'cmdx-admin': true}
        })
    }
    const handleSelect = async (questionId) => {
        try {
            const {data} = await axios({
                method: 'put',
                url: `${settings.BASE_URL}/question/select`,
                data: {
                    question: questionId
                },
                headers: {'cmdx-admin': true}
            })
            console.log(data)
            setCurrentQuestion(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchQuestion = async() => {
            try {
                const {data} = await axios({method:'get', url: `${settings.BASE_URL}/question/all`});
                console.log(data);
                setQuestions(data)
                setDisplayedQuestion(data[0]);
                setCurrentQuestion(questions.filter(({selected})=> selected)[0] || {})
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchQuestion();
        // console.log(currentQuestion)
    },[]);
    return (
        <>
            
            <Card {...displayedQuestion}/>
            <Divider/>
            <Paper>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={displayedQuestion.questionId}
                onChange={handleChange}
              >
                {questions.map(({shortQuestionMessage,questionId})=> <MenuItem value={questionId}>{shortQuestionMessage}</MenuItem>) }
              </Select>
              <Grid container spacing={2}>
              {
                questions.map(({shortQuestionMessage,questionId})=> {
                  return (
                    <Grid item xs>
                      <Button
                        variant="outlined"
                        color={shortQuestionMessage === currentQuestion.shortQuestionMessage ? 'secondary': ''}
                        onClick={()=>handleSelect(questionId)} 
                        key={questionId}>
                          {shortQuestionMessage}
                      </Button>
                    </Grid> 
                  );
                })
              }
              </Grid>
            </Paper>
            {/* <Button onClick={handleReset} variant="outlined">RESET-CAUTION</Button> */}
        </>
    );
}
export default Admin;
