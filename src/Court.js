import { useState, useRef } from "react";
import Stopwatch from './Stopwatch'

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

    function removeName(name) {
        const queueCopy = [...playerQueue]
        queueCopy.splice(queueCopy.indexOf(name), 1)
        setPlayerQueue(queueCopy)
    }

    function Name({ name }) {
        return (
            <div className="name">
                {name}
                <button onClick={() => removeName(name)}>-</button>
            </div>
        )
    }


    return (
        <div className="Court">
            <h1>Court {props.number}</h1>
            <div class="input-wrapper">
                <input type="text" class="modern-input" ref={namesRef} placeholder="Enter your name" onKeyPress={handleKeyPress}></input>
                <button class="modern-add-button" onClick={onAddButtonClick}>Add</button>
            </div>
            
            <NamesList names={playerQueue} />
            
        </div>
    )
}

function NamesList({ names }) {
    if (names.length === 0) {
        return (
            <div className="namesList">
                No players in queue
            </div>
        )
    }
    
    const firstGroup = names[0]
    const theRest = names.slice(1)

    return (
        <div className="namesList">
            <h3>Currently Playing</h3>
            
            <Name key={firstGroup} name={firstGroup}/>

            {/* Stopwatch resets after adding new person pls fix */}
            <Stopwatch />


            <h3>In Queue</h3>
            {theRest.map(name => {
                return <Name key={name} name={name}/>
            })}
        </div>
    )
}

export default Court;
