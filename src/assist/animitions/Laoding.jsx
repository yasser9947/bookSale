import React from 'react'

export const Laoding = () => {
    return (

        <div class="block">
            <div class="squares">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="lines1">
                <div class="line"  style={{"--i": 1}}></div>
                <div class="line"  style={{"--i": 2}}></div>
                <div class="line" style={{"--i": 3}}></div>
                <div class="line"  style={{"--i": 4}}></div>
            </div>
        </div>

    )
}
