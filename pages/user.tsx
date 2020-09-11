import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import services from '../services';
import settings from '../settings';
import axios from 'axios';


const User = () => {
    const [answer, setAnswer] = useState('answer');
    const [showForm, setShowForm] = useState(true);
    const [question, setQuestion] = useState({questionMessage: '', options: [], answerMessage:'', questionId: ''});
    const handleChange = (event) => {
        setAnswer(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowForm(false);
        axios({
            method:'post', url: `${settings.BASE_URL}/question/vote`, data:{answer, question: question.questionId}})
        console.log('SUBMIT', {answer, question: question.questionId})
    }
    useEffect(() => {
        const fetchQuestion = async() => {
            try {
                const {data:{questionMessage, options, answerMessage, questionId}} = await axios({method:'get', url: `${settings.BASE_URL}/question`});
                console.log({questionMessage, options, answerMessage});
                setQuestion({questionMessage, options, answerMessage, questionId})
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchQuestion();
    },[])
 
    return (
    <>
    {showForm ? <>
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{question.questionMessage}</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={answer} onChange={handleChange}>
                    {question.options.map(({id, text}) => <FormControlLabel value={id} control={<Radio />} key={id} label={text} />)}
                </RadioGroup>
                <Button type="submit" variant="outlined" color="default" >Send</Button>
            </FormControl>
        </form>
        </>
    :
        <h1>{question.answerMessage}</h1>
    }
    </>
    )
};

export default User;