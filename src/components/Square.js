function Square(props) {

    return (
        <button
            className='grid-item'
            onClick={() => props.onMoveHandle(props.index)}
        >
            {props.square}
        </button>
    );
}

export default Square;