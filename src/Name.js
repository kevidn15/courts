function Name(props) {
    console.log(props.playerQueue + " in Name.js")
    console.log(props.name + " in Name.js")
    console.log(props.handleRemove)
    
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