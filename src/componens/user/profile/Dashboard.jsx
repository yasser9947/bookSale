import React from 'react'
import {LeftSide} from './dashboard/LeftSide'
import { RightSide } from './dashboard/RightSide'
export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <LeftSide />
            </div>
            
              <RightSide />
           

        </div>
    )
}
