import '../styles/Leaderboard.css';
import { db } from '../firebase/index';
import { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchData = async () => {
        const newList = [{id:'21321313', name: 'Name', score: 'Score'}];
        const response = db.collection('leaderboard').orderBy('score', 'asc');
        const data = await response.get();
        data.docs.forEach(item => newList.push(item.data()));
        setList(newList);
    }

    return(
        <div id='leaderboard'>
            {
                list.map(item => {
                    return(
                        <div key={item.id} className='entry'>
                            <h4>{item.name}</h4>
                            <h3>{item.score} seconds</h3>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Leaderboard;
