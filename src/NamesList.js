import Name from "./Name"
import Stopwatch from "./Stopwatch"

function NamesList(props) {
    console.log(props.playerQueue + " in NamesList.js")
    console.log(props.handleRemove)

    if (props.playerQueue.length === 0) {
        return (
            <div className="namesList">
                No players in queue
            </div>
        )
    }
    
    const firstGroup = props.playerQueue[0]
    const theRest = props.playerQueue.slice(1)

    return (
        <div className="namesList">
            <h3>Currently Playing</h3>
            
            <Name key={firstGroup} name={firstGroup} playerQueue={props.playerQueue} handleRemove={props.handleRemove}/>

            {/* Stopwatch resets after adding new person pls fix */}
            <Stopwatch />


            <h3>In Queue</h3>
            {theRest.map(name => {
                return <Name key={name} name={name} playerQueue={props.playerQueue} handleRemove={props.handleRemove}/>
            })}
        </div>
    )
}

export default NamesList;