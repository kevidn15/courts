function Name(props) {    
    function removeName(name) {
        props.handleRemove(name)
    }

    return (
        <div className="name">
            {props.name}
            <button onClick={() => removeName(props.name)}>
            -
            </button>
        </div>
    )
}

export default Name;