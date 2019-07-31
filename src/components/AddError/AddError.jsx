import React from 'react'
import { Formik, Field } from 'formik'
import { useCookies } from 'react-cookie'

const AddError = () => {
    const [cookies,setCookie] = useCookies('name');
    return (
        <div>
            <Formik>

            </Formik>
        </div>
    )
}

export default AddError