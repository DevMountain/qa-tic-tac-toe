import React from 'react'

const Welcome = ({setView}) => {
    return (
        <div>
            <h2>Welcome!</h2>
            <p>How many people are playing?</p>
            <button onClick={() => setView('one')}>1 player</button>
            <button onClick={() => setView('two')}>2 players</button>
        </div>
    )
}

export default Welcome