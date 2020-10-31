import { motion } from 'framer-motion'
import React from 'react'
import { flip } from '../../../assist/animition'
import {LeftSide} from './dashboard/LeftSide'
import { RightSide } from './dashboard/RightSide'
export const Dashboard = () => {
    return (
        <motion.div
        initial={{transform : " rotateY(90deg)" }}
        animate={{ transform : " rotateY(0deg)"}}
        transition={flip}
        exit={{transform : " rotateY(90deg)"}}
        className="dashboard">
            <div className="dashboard__left">
                <LeftSide />
            </div>
            
              <RightSide />
           

        </motion.div>
    )
}
