import '../styles/Header.css';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import Leaderboard from './LeaderBoard';


const Header = (props) => {
    const [name, setName] = useState('Stranger');
    const [time, setTime] = useState(0);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const gameOver = props.gameOver;
    const charsFound = props.charsFound;
    const setScore = props.setScore;

    useEffect(() => {
        let interval;
        if(!gameOver) {
            interval = setInterval(() => {
                setTime(time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    });

    useEffect(() => {
        if(gameOver) {
            setScore(time);
        }
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user.displayName) {
                setName(firebase.auth().currentUser.displayName);
            } else {
                setName('Stranger');
            }
        });
    });

    const toggleLeaderboard = () => {
        if(!showLeaderboard) {
            setShowLeaderboard(true);
        } else {
            setShowLeaderboard(false);
        }
    }

    return(
        <header>
            {showLeaderboard ? <Leaderboard /> : null}
            
            <div id="info">
                <p id="welcome">Welcome, {name}!</p>
                <p id="timer">{time} seconds passed!</p>
            </div>
            <div id="chars-array">
                <p style={{ textDecoration: charsFound.includes('Waldo') ? 'line-through' : 'none' }}>Waldo</p>
                <p style={{ textDecoration: charsFound.includes('Odlaw') ? 'line-through' : 'none' }}>Odlaw</p>
                <p style={{ textDecoration: charsFound.includes('Wizzard') ? 'line-through' : 'none' }}>Wizzard</p>
            </div>
            <button id="leaderboard-btn" onClick={toggleLeaderboard}>Leaderboard</button>
        </header>
    );
}

export default Header;