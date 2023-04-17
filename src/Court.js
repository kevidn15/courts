import { useState, useRef } from "react";

function Court(props) {
    const [playerQueue, setPlayerQueue] = useState(["Kevin", "Aldwin", "Ethan"]);
    const namesRef = useRef()

    function onAddButtonClick(e) {
        const names = namesRef.current.value
        if (names !== '') {
            setPlayerQueue(playerQueue.concat(names))
            namesRef.current.value = null
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
                <button onClick={() => removeName(name)}>Remove</button>
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
                <h3>In Queue</h3>
                {theRest.map(name => {
                    return <Name key={name} name={name}/>
                })}
            </div>
        )
    }


    return (
        <div className="Court">
            <h1>Court {props.number}</h1>
            <input ref={namesRef} type="text"></input>
            <button onClick={onAddButtonClick}>Add new</button>
            <NamesList names={playerQueue} />
            
        </div>
    )
}

export default Court;
