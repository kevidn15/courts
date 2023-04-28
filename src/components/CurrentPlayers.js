import Name from './Name'
import Stopwatch from './Stopwatch';

function CurrentPlayers(props) {
    const firstGroup = props.playerQueue[0]

    return (
        <div className="currentPlayers">
            <Stopwatch />

            <h3>Currently Playing</h3>
            <Name key={firstGroup} name={firstGroup} playerQueue={props.playerQueue} handleRemove={props.handleRemove} handleUpdate={props.handleUpdate}/>
        </div>
    )
}

export default CurrentPlayers;