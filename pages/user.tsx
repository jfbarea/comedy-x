import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button} from '@material-ui/core';
import React, {useState} from 'react';
import services from '../services'

const {getQuestion} = services;

const User = () => {
    const {questionMessage, options, answerMessage} = getQuestion();
    const [answer, setAnswer] = useState('answer');
    const [showForm, setShowForm] = useState(true);
    const handleChange = (event) => {
        setAnswer(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowForm(false);
        console.log('SUBMIT', answer)
    }
 
    return (
    <>
    {showForm ? <>
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{questionMessage}</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={answer} onChange={handleChange}>
                    {options.map(({value, name}) => <FormControlLabel value={value} control={<Radio />} key={value} label={name} />)}
                </RadioGroup>
                <Button type="submit" variant="outlined" color="default" >Send</Button>
            </FormControl>
        </form>
        </>
    :
        <h1>{answerMessage}</h1>
    }
    </>
    )
};

export default User;