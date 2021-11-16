import React from 'react'

const Header = ({score}) => {
    return (
        <nav >
            <h1 className="header">Memory-Game</h1>
            <p>Score: {score}</p>
        </nav>
    )
}

export default Header
