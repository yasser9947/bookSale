import React from 'react'
import { OneCard } from './card/OneCard'
let card = [1 ,2 ,3 ,4, 5,6 ,7 ,6 ,6 ,6 ,6 ,6 ,6 , 6]
export const PreOrder = () => {
    return (
        <div className="order">
            <div className="order__choose">
               {card.map(ele =>{
                  return <OneCard />
               })}
            </div>
            <div className="order__listCard">
                <h1>tow</h1>
            </div>


        </div>
    )
}
