import firebase from 'firebase';
import uniqid from 'uniqid';
import { useState } from 'react';
import { db } from '../firebase';
import '../styles/GameOver.css';

const GameOver = (props) => {
    const [name, setName] = useState(firebase.auth().currentUser.displayName || 'Anonymous');
    const [submitted, setSubmitted] = useState(false);
    const score = props.score;

    const submitScore = (e) => {
        e.preventDefault();
        db.collection('leaderboard').doc(name).set({
            name, score, id: uniqid()
        }).then(() => {
            console.log('succesfully written!')
        }).catch((error) => {
            console.error('Error writing document to database', error);
        });
        setSubmitted(true);
        showBoard();
    };

    const showBoard = () => {
        document.getElementById('leaderboard-btn').click();
    }

    const renderScreen = () => {
        if(!submitted) {
            return (
            <div id="game-over">
                <h3>Game Over</h3>
                <form onSubmit={submitScore}>
                    <label>Enter your name to show off on the leaderboard!</label>
                    <input type="text" defaultValue={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            );
        } else {
            return <div></div>
        }
    }
    
    return(
        renderScreen() 
    )
};

export default GameOver;