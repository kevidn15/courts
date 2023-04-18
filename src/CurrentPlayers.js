import Name from './Name'
import Stopwatch from './Stopwatch';

function CurrentPlayers(props) {

    return (
        <div className="currentPlayers">
            <h3>Currently Playing</h3>
            <Name key={props.name} name={props.name} playerQueue={props.playerQueue} handleRemove={props.handleRemove}/>
            <Stopwatch />
        </div>
    )
}

export default CurrentPlayers;