import { useState } from 'react';

function Name(props) {    

    const [name, setName] = useState(props.name)

    function removeName(name) {
        props.handleRemove(name)
    }

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleBlur() {
        props.handleUpdate(props.name, name)
    }

    return (
        <div className="name">
            <input type="text" value={name} onChange={handleChange} onBlur={handleBlur} />
            <button onClick={() => removeName(props.name)}>
            -
            </button>
        </div>
    )
}

export default Name;