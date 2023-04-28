import { useState } from 'react';

function Name(props) {    

    const [name, setName] = useState(props.name)

    function removeName(name) {
        props.handleRemove(name)
    }

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div className="name">
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={() => removeName(props.name)}>
            -
            </button>
        </div>
    )
}

export default Name;