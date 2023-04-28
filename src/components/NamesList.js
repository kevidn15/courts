import CurrentPlayers from "./CurrentPlayers"
import PlayerQueue from "./PlayerQueue"

function NamesList(props) {
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
            <CurrentPlayers name={firstGroup} playerQueue={props.playerQueue} handleRemove={props.handleRemove}/>
            <PlayerQueue queue={theRest} playerQueue={props.playerQueue} handleRemove={props.handleRemove} />
        </div>
    )
}

export default NamesList;