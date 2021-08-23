
const Marker = (props) => {
    const leftCoord = props.location[0];
    const topCoord = props.location[1];

    return(
        <div style={ { position: 'absolute', zIndex: '1', left: leftCoord + 50, top: topCoord - 20, width: '50px',fontSize: '50px', color: 'red' } }>
            X
        </div>
    )
}

export default Marker;