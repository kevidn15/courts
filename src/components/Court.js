import { useState, useRef, useCallback } from "react";
import NamesList from './NamesList'


function Court(props) {
    const [playerQueue, setPlayerQueue] = useState([]);
    const namesRef = useRef()

    function onAddButtonClick(e) {
        const names = namesRef.current.value
        if (names !== '') {
            setPlayerQueue(playerQueue.concat(names))
            namesRef.current.value = null
        }
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            const names = namesRef.current.value
            if (names !== '') {
                setPlayerQueue(playerQueue.concat(names))
                namesRef.current.value = null
            }
        }
    }

    const handleRemove = useCallback((name) => {
        const queueCopy = [...playerQueue]
        queueCopy.splice(queueCopy.indexOf(name), 1)
        setPlayerQueue(queueCopy)
    }, [playerQueue])

    return (
        <div className="Court">
            <h1>Court {props.number}</h1>
            <div className="input-wrapper">
                <input type="text" className="modern-input" ref={namesRef} placeholder="Enter your name" onKeyPress={handleKeyPress}></input>
                <button className="modern-add-button" onClick={onAddButtonClick}>+</button>
            </div>
            
            <NamesList playerQueue={playerQueue} handleRemove={handleRemove} />
            
        </div>
    )
}

export default Court;
