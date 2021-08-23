import '../styles/Menu.css';

const Menu = (props) => {
    const leftCoord = props.position[0];
    const topCoord = props.position[1];
    const evaluate = props.evaluate;

    return(
        <div id="menu" style={ {left: leftCoord, top: topCoord} }>
            <button onClick={evaluate}>Waldo</button>
            <button onClick={evaluate}>Odlaw</button>
            <button onClick={evaluate}>Wizzard</button>
        </div>
    )
}

export default Menu;