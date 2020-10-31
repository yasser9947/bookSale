import React from 'react'
import { ErrorMessage } from 'formik'

export const FormEroor = ({name}) => {
    return (
        <div style={{position:"relative"}}><ErrorMessage name={name} render={() =>  <label className ="Login__erorr"> ما يتخلى فاضي</label>} /></div>
    )
}
