import React from 'react'
import { Redirect } from 'react'
import { Formik } from 'formik'
import { useCookies } from 'react-cookie'
import isLogin from '../../utils/isLogin'


const Auth = () => {
    const [cookies, setCookie] = useCookies(['name', 'login']);
    return (
        <div>
            {(isLogin(cookies.login)) ? <div>123</div> :
                <div>
                    <h1>Please log in</h1>
                    <Formik
                        initialValues={{name: 'admin', password: 'admin'}}
                        validate={values => {
                            let errors = {};
                            if (values.name !== 'admin') {
                                errors.name = 'name error'
                            } else if (values.password !== 'admin') {
                                errors.password = 'password error'
                            }
                            return errors;
                        }
                        }
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                setCookie('name', values.name);
                                setCookie('login', true);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name && errors.name}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            }
        </div>
    )
};

export default Auth