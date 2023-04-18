import Name from './Name'

function PlayerQueue(props) {
    return (
        <div className="playerQueue">
            <h3>In Queue</h3>
            {props.queue.map(name => {
                return <Name key={name} name={name} playerQueue={props.playerQueue} handleRemove={props.handleRemove}/>
            })}
        </div>
    )
}

export default PlayerQueue;