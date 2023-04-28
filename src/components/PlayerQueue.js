import Name from './Name'

function PlayerQueue(props) {
    const theRest = props.playerQueue.slice(1)

    return (
        <div className="playerQueue">
            <h3>In Queue</h3>
            {theRest.map(name => {
                return <Name key={name} name={name} playerQueue={props.playerQueue} handleRemove={props.handleRemove} handleUpdate={props.handleUpdate}/>
            })}
        </div>
    )
}

export default PlayerQueue;