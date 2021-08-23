/* eslint-disable react-hooks/exhaustive-deps */
import { db } from '../firebase/index';
import { useEffect, useState } from 'react';
import '../styles/Game.css';
import Marker from './Marker';
import Menu from './Menu';

const Game = (props) => {
    const [charCoords, setCharCoords] = useState({});
    const [showMenu, setShowMenu] = useState(false);
    const [coords, setCoords] = useState([0, 0]);
    const [selectedChar, setSelectedChar] = useState('');
    const [waldoFound, setWaldoFound] = useState(false);
    const [odlawFound, setOdlawFound] = useState(false);
    const [wizzardFound, setWizzardFound] = useState(false);
    const [waldoMarker, setWaldoMarker] = useState([]);
    const [odlawMarker, setOdlawMarker] = useState([]);
    const [wizzardMarker, setWizzardMarker] = useState([]);

    const gameOver = props.gameOver;
    const setCharsFound = props.setCharsFound;
    const charsFound = props.charsFound;


   document.addEventListener('click', (e) => {
       if(e.target.id !== 'main-image' && e.target.className !== 'char') {
           setShowMenu(false);
       } 
   });

   useEffect(() => {
        fetchCharCoords();
   }, []);

   useEffect(() => {
       if(waldoFound && odlawFound && wizzardFound) {
           gameOver(true);
       }
   }, [waldoFound, odlawFound, wizzardFound]);

   useEffect(() => {
       if(waldoFound) {
           setWaldoMarker(coords);
           setCharsFound([...charsFound].concat('Waldo'));
       }
   }, [waldoFound]);

   useEffect(() => {
       if(odlawFound) {
           setOdlawMarker(coords);
           setCharsFound([...charsFound].concat('Odlaw'));
       }
   }, [odlawFound]);

   useEffect(() => {
       if(wizzardFound) {
           setWizzardMarker(coords);
           setCharsFound([...charsFound].concat('Wizzard'));
       }
   }, [wizzardFound]);

    const fetchCharCoords = async () => {
        const response = db.collection('coords');
        const data = await response.get();
        data.docs.forEach(item => {
            setCharCoords(item.data());
        })
    };

    const getImgCoords = (e) => {
        e.preventDefault();

        let img = document.getElementById('main-image');
        let x = img.getBoundingClientRect().left;
        let y = img.getBoundingClientRect().top;
        setCoords([e.clientX - x, e.clientY - y]);
        setShowMenu(true);
        setSelectedChar(e.target.alt);
    };

    const renderMenu = () => {
        if(showMenu) {
            return <Menu position={coords} evaluate={evaluateChar}/>;
        } else {
            return <></>;
        }
    }

    const evaluateChar = (e) => {
        if(e.target.textContent === selectedChar) {
            switch(selectedChar) {
                case 'Waldo':
                    setWaldoFound(true);
                    break;
                case 'Odlaw':
                    setOdlawFound(true);
                    break;
                case 'Wizzard':
                    setWizzardFound(true);
                    break;
                default:
                    break;
            }
        } else {
            console.log('try again');
        }
    }

    return(
        <div id="Game">
            { renderMenu() }
            { waldoFound ? <Marker location={waldoMarker}/> : <></> }
            { odlawFound ? <Marker location={odlawMarker}/> : <></> }
            { wizzardFound ? <Marker location={wizzardMarker}/> : <></> }
            
            <img id="main-image" src={require('../assets/picture.jpg').default} alt="" useMap="#workmap" onClick={getImgCoords}/>
            <map name="workmap">
                <area shape="rect" className="char" coords={charCoords.Waldo} alt="Waldo" onClick={getImgCoords}/>
                <area shape="rect" className="char" coords={charCoords.Odlaw} alt="Odlaw" onClick={getImgCoords}/>
                <area shape="rect" className="char" coords={charCoords.Wizzard} alt="Wizzard" onClick={getImgCoords}/>
            </map>
        </div>
    );
}

export default Game;