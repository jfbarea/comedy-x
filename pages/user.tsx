import {
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Button, 
  Card, 
  CardActions, 
  CardActionArea, 
  CardMedia,
  CardContent, 
  Typography, 
  Grid} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import services from '../services';
import settings from '../settings';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const questionCard = ({question, handleSubmit, answer, handleChange, answered}) => (
 <>
        <CardContent>
        <Typography variant="h5" component="h5" color="textSecondary" gutterBottom>
          {question.questionMessage}
        </Typography>
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={answer} onChange={handleChange}>
                    {question.options.map(({id, text}) => <FormControlLabel value={id} control={<Radio />} key={id} label={text} />)}
                </RadioGroup>
                <CardActions>
                  <Button type="submit" size="small" color="secondary" disabled={!answered}>Votar</Button>
                </CardActions>
            </FormControl>

        </form>
        </CardContent>
        </>

)
const answerCard = ({classes}) => (
  <>
   <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/answer.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Voto Emitido
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vuelve al show, pero no dejes el móvil hasta que te lo digan.
          </Typography>
        </CardContent>
   </CardActionArea>
   </>
     );
  
const User = () => {
    const classes = useStyles();
    const [answer, setAnswer] = useState('answer');
    const [answered, setAnswered] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [question, setQuestion] = useState({questionMessage: '', options: [], answerMessage:'', questionId: ''});
    const handleChange = (event) => {
        setAnswer(event.target.value)
        setAnswered(true)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowForm(false);
        axios({
            method:'post', url: `${settings.BASE_URL}/question/vote`, data:{answer, question: question.questionId}})
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
      <Card elevation={24}>
        {
          showForm ? 
            questionCard( {question, handleSubmit, answer, handleChange, answered}) 
          :
            answerCard({classes})
        }
      </Card>
    </>
    )
};

export default User;
