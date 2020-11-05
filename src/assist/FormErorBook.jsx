import React from 'react'
import { ErrorMessage } from 'formik'

const FormErorBook = ({ status ,name }) => {
    return (
        <>
            <ErrorMessage name={name} render={() => <div className="addBookr__form__eroor" >
                <div className="tool_tip">
                    <span > {status}</span>
                </div>
            </div>} />
        </>
    )
}

export default FormErorBook
