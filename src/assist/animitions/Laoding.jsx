import React from 'react'

export const Laoding = () => {
    return (

        <div className="block">
            <div className="squares">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
            <div className="lines1">
                <div className="line"  style={{"--i": 1}}></div>
                <div className="line"  style={{"--i": 2}}></div>
                <div className="line" style={{"--i": 3}}></div>
                <div className="line"  style={{"--i": 4}}></div>
            </div>
        </div>

    )
}
