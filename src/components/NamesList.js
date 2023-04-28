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

    return (
        <div className="namesList">
            <CurrentPlayers playerQueue={props.playerQueue} handleRemove={props.handleRemove} handleUpdate={props.handleUpdate}/>
            <PlayerQueue playerQueue={props.playerQueue} handleRemove={props.handleRemove} handleUpdate={props.handleUpdate}/>
        </div>
    )
}

export default NamesList;